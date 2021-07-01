import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import users from './api/routes/v1/users';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('common'));

app.use('/users', users);

app.listen('');
