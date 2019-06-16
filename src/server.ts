import dotenv from 'dotenv';
dotenv.config({path: '.env'});

import { StartController } from './controllers/start/start.controller';
import { PostsController } from './controllers/posts/posts.controller';
import { App } from './app';

const app = new App(
  [
    new PostsController(),
    new StartController()
  ],
  parseInt(process.env.PORT, 10),
);

app.listen();
