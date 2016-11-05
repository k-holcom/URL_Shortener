const expect = require('chai');
const request = require('supertest');
const faker = require('faker');
// Brings in the model for URL
const urlMod = require('../src/models/url');

const assert = expect.assert;

// This here says what is exactly being tested in this case, it is all routes being used by the api dealing with the URLs
if(process.env.DEBUG === 'true'){
  describe('URL Routes Used', () => {
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

    // Tests to see if a URL is added to the database
    it('POST /api/v1/url should add a row to the database.', (done) => {
      const fakeURL = faker.internet.url()
      //This is the variable that will hold the random information that will follow phnx.wd
      var short = '';

      // This string will hold the information that will be used to create the random information after phnx.wd
      var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

      //Sets up the end of the shortened URL
      for(var i = 0; i < 6; i++){
        //chooses a random number between 1 and 62. This is to account for 0-9, A-Z, and a-z.
        var rand = Math.floor(Math.random() * (str.length - 0) + 0);

        //Find the character that is at the index of the randomly selected number.
        var char = str.substring(rand, rand + 1);

        //Adds the character to the variable short
        short = short + char;
      }
      const shortURL = short;
      const fakeInfo = {url: fakeURL, shortURL: shortURL}
      urlMod.add(fakeInfo, (err) => {
        throw new Error(err);
      },
      (url) => {
        this.urlInfo = fakeInfo.dataValues;
        assert.equal(url.short, fakeInfo.short)
        done();
      })
    });

    //Tests to see if all the URLs are being pulled from the database
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
    // Tests to see if only one URL is being pulled and that it is populated.
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

    // Tests that the URL is updated
    it('POST /api/v1/urls/:id should update the database', (done) => {
      const updateURL = this.url;
      //This is the variable that will hold the random information that will follow phnx.wd
      var short = '';

      // This string will hold the information that will be used to create the random information after phnx.wd
      var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

      // Sets up the end of the shortened URL
      for(var i = 0; i < 6; i++){
        // chooses a random number between 1 and 62. This is to account for 0-9, A-Z, and a-z.
        var rand = Math.floor(Math.random() * (str.length - 0) + 0);

        // Find the character that is at the index of the randomly selected number.
        var char = str.substring(rand, rand + 1);

        // Adds the character to the variable short
        short = short + char;
      }
      const shortURL = short;

      updateURL.shortURL = shortURL;
      urlMod.update(updateURL,
        (err) => {
          throw new Error(err);
        },
        (url) => {
          assert.equal(url.shortURL, updateURL.shortURL);
          done();
        }
      );
    });

    // Test to see if Removing a URL works
    it('DELETE /api/v1/urls/:id', (done) => {
      const delURL = this.url;
      delURL.force = true;

      urlMod.remove(delURL,
        (err) => {
          throw new Error(err);
        },
        (resp) => {
          // If it is successful, 1 should be returned
          assert.equal(resp, 1);
          done();
        }
      );
    });
  });
}
