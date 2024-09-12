import express, { Request, Response, NextFunction } from 'express';
import errorMiddleware from './middleware/errorMiddleware';
import { sayHello } from './sample';
import AppError from './util/appError';
const app = express();
const port = 3000;



app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Example route that throws an AppError
app.get('/app-error', (req: Request, res: Response, next: NextFunction) => {
    // throw new AppError(400, "This is an AppError");
    sayHello()
  });
  
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)

});