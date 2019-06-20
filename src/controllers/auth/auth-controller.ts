import { Response, Request, Router, NextFunction } from 'express';
// import { Post } from './post.interface';
import  { Auth } from '../../config/passport/auth';
import { pick } from 'lodash';

export class AuthController {
  public path = '/auth';
  public router = Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes(): void {
    this.router.get(this.path, this.logininfo);
    this.router.post(this.path, new Auth().login);
   
    this.router.all('*', (request: Request, response: Response, next: NextFunction) => {
      const auth = new Auth();
      
      return auth.authenticate((err: any, user: any, info: any) => {
   
        if (err) { return next(err); }
        if (!user) {
            if (info.name === 'TokenExpiredError') {
                return response.status(401).json({ message: 'Your token has expired. Please generate a new one' });
            } else {
                return response.status(401).json({ message: info.message });
            }
        }

        request.user = pick(user, ['id', 'name', 'roles']);
        return next();

      })(request, response, next);

    });
}

  /**
   * Login action
   */
  public logininfo = (request: Request, response: Response) => {
    response.status(200).send('OK');
  }  
}


