const express=require('express');
const bodyParser=require('body-parser');

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

const app= express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use('',(req,res)=>{
    res.status(404).send(`<h3>Page not found</h3>`);
});


app.listen(3000,()=>{
    console.log('listening on port no 3000');
});

