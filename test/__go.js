const expect = require('chai');
const request = require('supertest');

const assert = expect.assert;

// This here says what is exactly being tested in this case, it is all routes being used by the api dealing with the URLs
describe('URL Routes Used', () => {

  var server = require('../src/server.js');

  beforeEach(() => {
    server.open;
  });

  afterEach(() => {
    server.close;
  });

  it('GET /api/v1/urls should return all URLs stored in the database.', (done) => {
    request(server)
    .get('/api/v1/urls')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect((res) => {
      const urls = res.body;

      this.url = urls[0]

      assert.isAbove(urls.length, 0)
    })
    .end(done)
  });

  it('GET /api/v1/urls/:id should return one URL.', (done) => {
    const id = this.url.id
    request(server)
    .get('/api/v1/urls/' + id)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect((res) => {
      const url = res.body;
      assert.property(url, 'id')
      assert.property(url, 'shortURL')
    }).end(done);
  });
});
