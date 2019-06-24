jest.unmock('supertest').unmock('../../../app');
jest.setTimeout(30000);

import request from 'supertest';
import express from 'express';
import { PostsController } from './posts-controller';
import { exportAllDeclaration } from '@babel/types';

const app = express();
app.use(new PostsController().router);

describe('GET /posts', () => {

    it('should return 200 and json and body', async (done) => {

        const res = await request(app)
            .get('/posts')
            .set('Accept', 'application/json');

        expect(res.header['content-type']).toEqual(expect.stringContaining('json'));
        expect(res.status).toEqual(200);
        expect(res.body).toBeTruthy();
        done();
    });


});

