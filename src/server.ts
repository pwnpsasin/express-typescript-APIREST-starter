import { StartController } from './start/start.controller';
import { PostsController } from './posts/posts.controller';
import { App } from './app';

const app = new App(
  [
    new PostsController(),
    new StartController()
  ],
  3000,
);

app.listen();
