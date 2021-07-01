import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './api/routes/v1';
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('common'));

app.use('/v1', routes);

app.listen('');
