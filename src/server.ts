import dotenv from 'dotenv';
dotenv.config({path: '.env'});

import { StartController } from './controllers/start/start-controller';
import { HeartbeatController } from './controllers/heartbeat/heartbeat-controller';
import { AuthController } from './controllers/auth/auth-controller';
import { PostsController } from './controllers/posts/posts-controller';


import { App } from './app';

const app = new App(
  [
    // before authorization
    new HeartbeatController(),
    new StartController(),
    new AuthController(),
    // after authorization
    new PostsController()
  ],
  parseInt(process.env.PORT, 10),
);

app.listen();
