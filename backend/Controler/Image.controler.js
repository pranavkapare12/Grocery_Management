import { uplode } from "../Functions/fileuplode.functions.js"
async function fileUplode(req,res){
    const file =req.file;
    // console.log(req.userData);
    const result = await uplode(file.filename,file.path)
    let storeData={
        public_id: result.public_id,
        url: result.secure_url,
        product_name: req.body.name,
        price: parseFloat(req.body.price),
        user_id: req.userData._id
    }
    console.log(storeData);
    return res.status(200).json({
        "message":"All is working corectly"
    })
}

export { fileUplode }