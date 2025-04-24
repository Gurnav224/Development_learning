import express, { type Request, type Response, type NextFunction } from 'express';
import logger from './logger';


const app = express();
const PORT = 8080;

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - start;
        logger.http(`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
    });
    next();
};

app.use(requestLogger)


// Your logger (error-handling middleware)
const errorLogger = (err: any, req: Request, res: Response, next: NextFunction) => {
    logger.error(`
Error: ${err.message}
Request Method: ${req.method}
Request URL: ${req.originalUrl}
    `);
    res.status(500).send("Internal Server Error");
};


// Route that works fine
app.get('/', (req: Request, res: Response) => {
    logger.log('info','server started')
    res.send('server started');
});

app.get('/home', (req: Request, res: Response) => {
    res.send('this is home route')
})

// Route that throws an error
app.get('/error', (req, res) => {
    throw new Error('This is a test error!');
});

app.get('/error2', (req, res, next) => {
    const err = new Error('Manual error passed to next');
    next(err); // triggers error handler
});



// ✅ Error-handling middleware should be AFTER all routes
app.use(errorLogger);

app.listen(PORT, () => {
    logger.log('info',`server started at http://localhost:${PORT}`);
});
