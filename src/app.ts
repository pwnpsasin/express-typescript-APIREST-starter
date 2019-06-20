import dotenv from 'dotenv';
dotenv.config({path: '.env'});

import * as bodyParser from 'body-parser';
import express from 'express';
import { join } from 'path';
import compression from 'compression';  // compresses requests
import session from 'express-session';
import lusca from 'lusca';
// import flash from 'express-flash';
import methodOverride from 'method-override';
import errorHandler from 'errorhandler';

import morgan from 'morgan';

// controller's imports
import { StartController } from './controllers/start/start-controller';
import { HeartbeatController } from './controllers/heartbeat/heartbeat-controller';
import { AuthController } from './controllers/auth/auth-controller';
import { PostsController } from './controllers/posts/posts-controller';
import { Auth } from './config/passport/auth';


// controller's definitions
declare type Controllers = 
HeartbeatController | 
StartController | 
PostsController | 
AuthController;

export class App {
  public app: express.Express;
  public port: number;
  private isProduction: boolean;

  constructor(controllers: Array<Controllers>, port: number) {
    this.app = express();
    this.port = port;

    //Configure isProduction variable
    this.isProduction = process.env.NODE_ENV === 'production';

    this.initLogger();
    this.initializeAuth();
    this.initializeRenderEngine();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      // tslint:disable-next-line
      console.log(`${process.env.APPTITLE} listening on the port ${this.port}`);
    });
  }

  public getApp(): express.Express {
    return this.app;
  }

  public initializeAuth(): void {
    const auth = new Auth();
    this.app.use(auth.initialize());
  }

  private initLogger(): void {
    // logger on console
    this.app.use(morgan('dev'));
  }
  private initializeMiddlewares(): void {
    this.app.use(compression());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    // session
    this.app.use(session({
        secret: '0740600a-9050-11e9-8e32-1c1bb5508a2e',
        resave: true,
        saveUninitialized: true
    }));

    // security
    this.app.use(lusca.xframe('SAMEORIGIN'));
    this.app.use(lusca.xssProtection(true));

    // override
    this.app.use(methodOverride('_method'));                   // In query
    this.app.use(methodOverride('X-HTTP-Method'));             // Microsoft
    this.app.use(methodOverride('X-HTTP-Method-Override'));    // Google/GData
    this.app.use(methodOverride('X-Method-Override'));         // IBM
  

    if (!this.isProduction) {
      this.app.use(errorHandler());
    }

    // this.app.use(flash());

    
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
