const ProductModel=require('../models/productModel');

// get products api -/api/v1/products
exports.getProducts=async (req,res,next)=>{
    //search funcionality
   const query= req.query.keyword?{name:{
        $regex:req.query.keyword,
        $options:"i"
    }}:{}
    const products= await ProductModel.find(query)
    res.json({
        success:true,
       products
    })
}

// get single products-/api/v1/products/:id
exports.getSingleProducts= async (req,res,next)=>{

    // get the id
   try 
   {
    const product=  await ProductModel.findById(req.params.id);
    res.json({
        success:true,
        product
    })
}

   
   catch (error) 
   {
    res.status(404).json({
        success:false,
        message:'Unable to get the Product ID'
    })
}
}
 

    