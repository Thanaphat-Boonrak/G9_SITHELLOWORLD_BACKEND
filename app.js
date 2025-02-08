const express = require("express");
const bodyParser = require("body-parser");
const Routes = require("./routes/routes");
const swaggerJsdoc = require('swagger-jsdoc');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ROOM MANAGEMENT G9',
      description: 'Not A Simple API'
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);




const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", Routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Server http://localhost:${port}`);
});
