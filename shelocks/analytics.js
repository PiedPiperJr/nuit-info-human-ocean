/**
 * @swagger
 * components:
 *   schemas:
 *     DeviceInfo:
 *       type: object
 *       properties:
 *         userAgent:
 *           type: string
 *         platform:
 *           type: string
 *         language:
 *           type: string
 *         screen:
 *           type: object
 *           properties:
 *             width:
 *               type: integer
 *             height:
 *               type: integer
 *             availWidth:
 *               type: integer
 *             availHeight:
 *               type: integer
 *             colorDepth:
 *               type: integer
 *             pixelDepth:
 *               type: integer
 *         viewport:
 *           type: object
 *           properties:
 *             width:
 *               type: integer
 *             height:
 *               type: integer
 */

/**
 * @swagger
 * /track:
 *   post:
 *     summary: Envoie des données de suivi au serveur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               eventType:
 *                 type: string
 *               position:
 *                 type: object
 *                 properties:
 *                   x:
 *                     type: integer
 *                   y:
 *                     type: integer
 *               timestamp:
 *                 type: integer
 *               speed:
 *                 type: object
 *                 properties:
 *                   x:
 *                     type: integer
 *                   y:
 *                     type: integer
 *                   timeDelta:
 *                     type: integer
 *               page:
 *                 type: string
 *               deviceInfo:
 *                 $ref: '#/components/schemas/DeviceInfo'
 *     responses:
 *       200:
 *         description: Données envoyées avec succès
 *       400:
 *         description: Erreur lors de l'envoi des données
 */

// Fonction pour collecter des informations sur l'appareil et l'écran
/**
 * @swagger
 * /device-info:
 *   get:
 *     summary: Récupère les informations sur l'appareil
 *     responses:
 *       200:
 *         description: Informations sur l'appareil récupérées avec succès
 */
function getDeviceInfo() {
    return {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screen: {
            width: window.screen.width,
            height: window.screen.height,
            availWidth: window.screen.availWidth,
            availHeight: window.screen.availHeight,
            colorDepth: window.screen.colorDepth,
            pixelDepth: window.screen.pixelDepth
        },
        viewport: {
            width: window.innerWidth,
            height: window.innerHeight
        }
    };
}

// Variables to track user behavior
let lastMousePosition = { x: 0, y: 0 };
let lastMouseMoveTime = Date.now();
let clickSequence = [];
let pageEnterTime = Date.now();
let currentArticle = null;
let articleStartTime = null;
let mouseMoveData = [];
let lastLoggedPosition = Date.now();

// Function to send data to the server
function sendDataToServer(data) {
    fetch('http://127.0.0.1:5000/track', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => {
        if (response.ok) {
            console.log('Data sent successfully');
        } else {
            console.error('Error sending data');
        }
    });
}

// Enhanced mouse move tracking with throttling
document.addEventListener(' ', (event) => {
    const currentTime = Date.now();
    // Only log position every 100ms to avoid overwhelming data
    if (currentTime - lastLoggedPosition >= 100) {
        const data = {
            eventType: 'mouseMove',
            position: {
                x: event.clientX,
                y: event.clientY
            },
            timestamp: currentTime,
            speed: {
                x: event.clientX - lastMousePosition.x,
                y: event.clientY - lastMousePosition.y,
                timeDelta: currentTime - lastMouseMoveTime
            },
            page: window.location.pathname,
            deviceInfo: getDeviceInfo()
        };
        mouseMoveData.push(data);
        sendDataToServer(data);
        
        lastMousePosition = { x: event.clientX, y: event.clientY };
        lastMouseMoveTime = currentTime;
        lastLoggedPosition = currentTime;
    }
});

// Enhanced click tracking
document.addEventListener('click', (event) => {
    const clickData = {
        eventType: 'click',
        target: {
            tagName: event.target.tagName,
            id: event.target.id,
            className: event.target.className,
            text: event.target.textContent?.substring(0, 100)
        },
        position: {
            x: event.clientX,
            y: event.clientY
        },
        timestamp: Date.now(),
        sequence: clickSequence.length + 1,
        page: window.location.pathname,
        deviceInfo: getDeviceInfo()
    };
    
    clickSequence.push(clickData);
    sendDataToServer(clickData);
});

// Track article views
function trackArticleView(articleId) {
    if (currentArticle !== articleId) {
        if (currentArticle !== null) {
            // Send data for previous article
            sendDataToServer({
                eventType: 'articleExit',
                articleId: currentArticle,
                timeSpent: Date.now() - articleStartTime,
                timestamp: Date.now()
            });
        }
        currentArticle = articleId;
        articleStartTime = Date.now();
        sendDataToServer({
            eventType: 'articleEnter',
            articleId: articleId,
            timestamp: articleStartTime
        });
    }
}

// Track form interactions
document.addEventListener('submit', (event) => {
    if (event.target.tagName === 'FORM') {
        const formData = new FormData(event.target);
        const answers = {};
        for (let [key, value] of formData.entries()) {
            answers[key] = value;
        }
        
        sendDataToServer({
            eventType: 'formSubmit',
            formId: event.target.id,
            timeToComplete: Date.now() - pageEnterTime,
            answers: answers,
            timestamp: Date.now()
        });
    }
});

// Track page visibility changes
document.addEventListener('visibilitychange', () => {
    sendDataToServer({
        eventType: 'visibilityChange',
        state: document.visibilityState,
        timestamp: Date.now()
    });
});

// Track page enter/exit
window.addEventListener('load', () => {
    pageEnterTime = Date.now();
    sendDataToServer({
        eventType: 'pageEnter',
        page: window.location.pathname,
        timestamp: pageEnterTime,
        deviceInfo: getDeviceInfo()
    });
});

window.addEventListener('beforeunload', () => {
    sendDataToServer({
        eventType: 'pageExit',
        page: window.location.pathname,
        timeSpent: Date.now() - pageEnterTime,
        timestamp: Date.now()
    });
});

// Periodically send accumulated mouse movement data
setInterval(() => {
    if (mouseMoveData.length > 0) {
        sendDataToServer({
            eventType: 'mouseMoveBundle',
            movements: mouseMoveData,
            timestamp: Date.now()
        });
        mouseMoveData = [];
    }
}, 5000);
