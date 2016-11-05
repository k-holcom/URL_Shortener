const expect = require('chai');
const request = require('supertest');
// Brings in the model for URL
const urlMod = require('../src/models/url');
const goMod = require('../src/models/go');

const assert = expect.assert;

// Testing the goTo route
describe('Testing the go route: ', () => {
  // Brings in the server
  var server = require('../src/server.js');
  // Starts up the server each time
  beforeEach(() => {
    server.open;
  });
  // Closes the server each time
  afterEach(() => {
    server.close;
  });

  // Before I can test to see if a route is redirected, I must first have the shortURL to search for.
  it('Getting All URLs and then saving one.', (done) => {
    urlMod.find(
      (err) => {
        throw new Error(err);
      },
      (urls) => {
        this.allURLs = urls;
        this.url = this.allURLs[0]
        assert.isAbove(this.allURLs.length, 0)
        done();
      }
    );
  });

  // Tests to see if /go/:shortURL redirects
  it('GET /go/:shortURL should return with a status of 200', (done) => {
    const shortURL = this.url.shortURL;
    request(server)
    .get('/go/' + shortURL)
    .expect((res) => {
      expect(res.redirect).to.have.status(200)
    })
    done();
  })
});
