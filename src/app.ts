import * as bodyParser from 'body-parser';
import express from 'express';
import { join } from 'path';
import compression from 'compression';  // compresses requests
// import { session } from 'express-session';
// import flash from 'express-flash';

import morgan from 'morgan';
import { StartController } from './controllers/start/start.controller';
import { PostsController } from './controllers/posts/posts.controller';

declare type Controllers = StartController | PostsController;

export class App {
  public app: express.Express;
  public port: number;

  constructor(controllers: Array<Controllers>, port: number) {
    this.app = express();
    this.port = port;

    this.initializeRenderEngine();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);

  }

  public listen(): void {
    this.app.listen(this.port, () => {
      // tslint:disable-next-line
      console.log(`API listening on the port ${this.port}`);
    });
  }

  public getApp(): express.Express {
    return this.app;
  }

  private initializeMiddlewares(): void {
    this.app.use(compression());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    // this.app.use(flash());
    this.app.use(morgan('dev'));

    this.app.use(
      express.static(join(__dirname, 'public'), { maxAge: 31557600000 })
    );
  }

  private initializeControllers(controllers: Array<Controllers>): void {
    controllers.forEach((controller: any) => {
      this.app.use('/', controller.router);
    });
  }

  private initializeRenderEngine(): void {
    this.app.set('views', join(__dirname, '../views'));
    this.app.set('view engine', 'pug');
  }

}

