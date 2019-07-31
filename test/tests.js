import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../api/index';

chai.use(chatHttp);
const { expect } = chai;

describe('Testing the book endpoints:', () => {
    // it('It should retur hello world', (done) => {
    //   chai.request(app)
    //     .get('/')
    //     .set('Accept', 'application/json')
    //     .end((err, res) => {
    //       expect(res.status).to.equal(200);
    //       done();
    //     });
    // });
})