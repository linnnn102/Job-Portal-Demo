const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User Management API',
            version: '1.0.0',
            description: 'API for managing users.',
        },
        servers: [
            {
                url: 'http://localhost:5003',
            },
        ],
    },
    apis: ['./routes/sw.js'], // Points to route files
};



const swaggerSpec = swaggerJsDoc(options);

const port = process.env.PORT || 5003;
const swaggerDocs = (app, port) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`Swagger Docs available at http://localhost:${port}/api-docs`);
};

module.exports = swaggerDocs;