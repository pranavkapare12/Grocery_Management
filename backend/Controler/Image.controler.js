import { uplode } from "../Functions/fileuplode.functions.js"
async function fileUplode(req,res){
    const file =req.file;
    // const result = await uplode(file.filename,file.path)
    return res.status(200).json({
        "message":"All is working corectly"
    })
}

export { fileUplode }