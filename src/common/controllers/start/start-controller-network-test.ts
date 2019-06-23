jest.unmock('supertest').unmock('../../../app');
jest.setTimeout(30000);

import request from 'supertest';
import express from 'express';
import { App } from '../../../app';
import { StartController } from './start-controller';

// const app = express();
// app.use(new StartController().router);

const app = new App([new StartController()], [], [], 3000);


describe('GET /', () => {

  it('should return 200 OK', async (done) => {

    const res = await request(app.getApp())
      .get('/');
      
    expect(res.status).toEqual(200);
    done();
  });


});

