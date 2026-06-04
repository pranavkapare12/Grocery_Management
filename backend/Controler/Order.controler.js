function makeOrder(req,res){
    console.log(req.body)
    return res.status(200).json({
        message:"All is working Correctly"
    })
}

export { makeOrder }