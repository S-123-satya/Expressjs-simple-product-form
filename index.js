const bodyParser=require('body-parser');
const express=require('express');
const app= express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to simple add product website</h1>`);
})
app.get('/add-product',(req,res)=>{
    res.send(`<form action="/product" method="post">
    <div class="form-group">
      <label for="addProduct">Add product</label>
      <input type="text" class="form-control" id="addProduct" aria-describedby="productHelp" placeholder="Enter product name" name='productName'>
      <small id="productHelp" class="form-text text-muted">We'll add  your product to our webpage .</small>
    </div>
    <div class="form-group">
      <label for="productSize">Product Size</label>
      <input type="text" class="form-control" id="productSizes" placeholder="Product Size" name='productSize'>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>`);
})
app.post('/product',(req,res)=>{
    console.log(req.body);
    res.send(`<h1>Your product is added to our website</h1>`);
})

app.listen(3000,()=>{
    console.log('listening on port no 3000');
})

