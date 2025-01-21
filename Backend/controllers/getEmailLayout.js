import { fileURLToPath } from 'url';
import { dirname } from 'path';



export function getEmailLayout(req,res){
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const {id}=req.params;  
    res.sendFile(`./templates/index${id}.html`,{root:__dirname});
}