import { Response, Request, Router } from 'express';

export class StartController {
  public path = '/';
  public router = Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes(): void {
    this.router.get(this.path, this.welcome);
  }

   public welcome = (request: Request, response: Response) => {

    response.render('home', {
      title: 'API Examples'
    });
  }
}


