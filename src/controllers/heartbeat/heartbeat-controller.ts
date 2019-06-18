import { Response, Request, Router } from 'express';

export class HeartbeatController {
  public path = '/heartbeat';
  public router = Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes(): void {
    this.router.get(this.path, this.heartbeatinfo);
  }


  /**
   * Answer heartbeat
   */
  public heartbeatinfo = (request: Request, response: Response) => {
    response.status(200).send('OK');
  }

}


