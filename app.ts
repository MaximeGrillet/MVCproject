import express, { Request, Response } from 'express';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) => {
  res.render('dashboard');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
