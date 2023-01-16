import express, { Express, NextFunction, Request, Response} from 'express';
import { getTime } from './time/time.router';
import prometheusMiddleware from 'express-prometheus-middleware'
import cors from 'cors';


export const app: Express = express();
app.use(cors());

const port = 7000

app.use('/', (req: Request, res: Response, next: NextFunction) => {
    if (req.header('Authorization') !== 'mysecrettoken') res.send(403).send('Forbidden')
    else next()  
})
app.use(prometheusMiddleware({
    metricsPath: '/metrics',
    collectDefaultMetrics: true,
    requestDurationBuckets: [0.1, 0.5, 1, 1.5],
    requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
   responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
  }));

app.get('/time', (req: Request, res: Response) => getTime(req, res));
  
app.listen(port, () => {
    console.log('listening on port', port)
})