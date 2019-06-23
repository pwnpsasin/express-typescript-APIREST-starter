jest.unmock('supertest').unmock('../../../app');
jest.setTimeout(30000);

import request from 'supertest';
import { App } from '../../../app';
import { NotFoundController } from './notfound-controller';

const app = new App([new NotFoundController()], [], [], 3000);

describe('GET /xyz-not-exists', () => {

    beforeAll((done) => {
        done();
    });

    it('should return 404 Not Found', (done) => {
        request(app.getApp())
            .get('/xyz-not-exists')
            .expect(404, done);
    });

});
