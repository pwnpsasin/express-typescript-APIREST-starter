import { Response, Request, Router } from 'express';
// import { Post } from './post.interface';
import passport from 'passport';

export class AuthController {
  public path = '/auth';
  public router = Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes(): void {
    this.router.get(this.path, this.logininfo);
    this.router.post(this.path, passport.authenticate('local', { session: false }), this.loginAction);
  }


  /**
   * Login action
   */
  public logininfo = (request: Request, response: Response) => {
    response.status(200).send('OK');
  }

  public loginAction = (request: Request, response: Response) => {
    response.status(200).send('OK');
  } 
  

  
}


