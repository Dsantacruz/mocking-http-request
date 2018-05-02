const expect = require('chai').expect;
const nock = require('nock');

const getUser = require('../index').getUser;
const response = require('./response');

describe('Get User tests', () => {
  beforeEach(() => {
    nock('https://api.github.com')
      .get('/users/dsantacruz')
      .reply(200, response);
  });

  it('Get a user by username', () => {
    return getUser('dsantacruz')
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');

        //Test result of name, company and location for the response
        expect(response.name).to.equal('Diego Miguel Santa Cruz Mendezú')
        expect(response.company).to.equal('DSC')
        expect(response.location).to.equal(null)
      });
  });
});