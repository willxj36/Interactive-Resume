import * as express from 'express';
import router from './routes';
import * as path from 'path'
import * as helmet from 'helmet';

const app = express();

app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(router);
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
