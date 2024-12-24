import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/router';
import notFound from './app/middleware/notFound';
import globalErrorHandler from './app/middleware/globalErrorHandler';
const app: Application = express();

//middleware as parser
app.use(express.json());
app.use(cors());

//application route
app.use('/api', router);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
