import express from 'express';
import morgan from 'morgan';
import cors from 'cors'; //para que cualquier aplicacion de backend pueda conectarse
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { options } from "./swaggerOptions";
const specs = swaggerJSDoc(options);

import tasksRoutes from './routes/tasks';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(tasksRoutes)

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

export default app;