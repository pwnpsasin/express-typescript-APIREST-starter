import request from 'supertest';
import { App } from '../../app';
import { StartController } from './start-controller';

const app = new App( [new StartController()], 3000);

describe('GET /', () => {
  
  beforeEach(() => {
    jest.setTimeout(10000);
  });

  it('should return 200 OK', (done) => {
    request(app.getApp()).get('/')
      .expect(200, done);
  });


});
