const express=require('express');
const router=express.Router();

router.get('/add-product',(req,res,next)=>{
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
});
router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.send(`<h1>Your product is added to our website</h1>`);
});

module.exports=router;