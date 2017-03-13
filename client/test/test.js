var chai = require('chai')
var chaiHttp = require('chai-http');
// var blog = require('../blog')
var should = chai.should()

chai.use(chaiHttp);

describe('Testing CRUD on BLOG', function() {
  it('should return 200 when getting on blog', function(done){
    chai.request('http://localhost:3000')
      .get('/blog')
      // .send({
      //   title: "",
      //   content: ""
      // })
      .end(function(req,res) {
        res.should.have.status(200) // nanti harus diganti status menjadi 200
        done()
      })
  })

  it('should return 200 when posting on blog', function(done){
    chai.request('http://localhost:3000')
      .post('/blog')
      .field('_method', 'post')
      .field('title', 'hello world')
      .field('content', 'hello world')
      .end(function(req,res) {
        res.should.have.status(200) // nanti harus diganti status menjadi 200
        done()
      })
  })
});
