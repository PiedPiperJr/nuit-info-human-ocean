const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de suivi',
            version: '1.0.0',
            description: 'Documentation de l\'API pour le suivi des utilisateurs',
        },
        servers: [
            {
                url: 'http://localhost:5000', // Remplacez par l'URL de votre serveur
            },
        ],
    },
    apis: ['./analytics.js'], // Chemin vers votre fichier contenant les annotations Swagger
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
