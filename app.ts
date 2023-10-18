
import express from 'express';
import { getProjects } from './controllers/projectController';

const app = express();
const port = 3000;


app.get('/projects', getProjects);

app.listen(port, () => {
  console.log(`le serveur est lancé : ${port}`);
});
