var chai = require('chai')
var chaiHttp = require('chai-http');
var should = chai.should()

chai.use(chaiHttp);

describe('Testing CRUD on BLOG', function() {
  it('should return 200 when posting on blog', function(done){
    chai.request('http://localhost:3000')
      .post('/blog')
      .send({
        title: "hello world",
        content: "lorem ipsum dolor",
        slug: "hello-world"
      })
      .end(function(req,res) {
        res.should.have.status(200) // nanti harus diganti status menjadi 200
        done()
      })
  })

  it('should return 200 when getting on blog', function(done){
    chai.request('http://localhost:3000')
      .get('/blog')
      .end(function(req,res) {
        res.should.have.status(200) // nanti harus diganti status menjadi 200
        done()
      })
  })

  it('should return 200 when update on blog', function(done){
    chai.request('http://localhost:3000')
      .put('/blog/hello-world')
      // .field('_method', 'put')
      .send({
        title: "hello world",
        content: "lorem ipsum dolor nasi kucing"
      })
      .end(function(req,res) {
        res.should.have.status(200) // nanti harus diganti status menjadi 200
        done()
      })
  })

  it('should return 200 when delete post on blog', function(done){
    chai.request('http://localhost:3000')
      .delete('/blog/hello-world')
      .end(function(req,res) {
        res.should.have.status(200) // nanti harus diganti status menjadi 200
        done()
      })
  })


});
