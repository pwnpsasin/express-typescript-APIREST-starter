
import { Response, Request, Router } from 'express';

export class NotFoundController {
    public path = '/*';
    public router = Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes(): void {
        this.router.all(this.path, this.notfoundinfo);
    }


    /**
     * Answer Not Found path for API
     */
    public notfoundinfo = (request: Request, response: Response) => {
        response.status(404);

        if (request.accepts('html')) {
            response.render('404', {
                url: request.url
            });
            return;
        }

        response.type('txt').send('Not found');
    }

}



