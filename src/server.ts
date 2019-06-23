import dotenv from 'dotenv';
dotenv.config({path: '.env'});

import { StartController } from './common/controllers/start/start-controller';
import { HeartbeatController } from './common/controllers/heartbeat/heartbeat-controller';
import { AuthController } from './common/controllers/auth/auth-controller';
import { PostsController } from './v1/controllers/posts/posts-controller';


import { App } from './app';

const app = new App(
  // in /
  [
    // before authorization
    new HeartbeatController(),
    new StartController()
  ],
  // in /api/v1/
  [
    // before authorization
    new AuthController(),
    // after authorization
    new PostsController()
  ],
  // in /api/v2/ in future, sample
  [
  // before authorization
  new AuthController(),
  // after authorization
  new PostsController()
  ],
  parseInt(process.env.PORT, 10),
);

app.listen();
