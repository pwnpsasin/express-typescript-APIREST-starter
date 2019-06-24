// jest.unmock('supertest').unmock('../../../app');
// jest.setTimeout(30000);

import request from 'supertest';
import express from 'express';
import { NotFoundController } from './notfound-controller';

const app = express();
app.use(new NotFoundController().router);

describe('GET /xyz-not-exists', () => {

    it('should return 404 Not Found', async (done) => {

        const res = await request(app)
            .get('/axx-aaaa');
            //.set('Accept', 'application/json');

        //expect(res.header['content-type']).toEqual(expect.stringContaining('json'));
        expect(res.status).toEqual(404);
        done();
    });


});

