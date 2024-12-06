const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // Chemin vers votre fichier swagger.json

const app = express();

// Middleware pour servir Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Autres routes de votre application
app.post('/track', (req, res) => {
    // Votre logique ici
});

app.get('/device-info', (req, res) => {
    // Votre logique ici
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
