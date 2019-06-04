import { StartController } from './controllers/start/start.controller';
import { PostsController } from './controllers/posts/posts.controller';
import { App } from './app';

const app = new App(
  [
    new PostsController(),
    new StartController()
  ],
  3000,
);

app.listen();
