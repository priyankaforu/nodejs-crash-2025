import http from 'http';
import path from 'path';
import fs from 'fs/promises';
import url from 'url';

const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async(req,res)=>{
    try {
        if(req.method === 'GET'){
            let filepath;
            if(req.url === '/' || req.url === '/home'){
                filepath = path.join(__dirname,'public','index.html');
            }else if(req.url === '/about'){
                filepath = path.join(__dirname, 'public', 'about.html');
            }else if(req.url === '/contact'){
                filepath = path.join(__dirname, 'public', 'contact.html');
            }else {
                throw new Error('not found');
            }
            const data = await fs.readFile(filepath);
            res.setHeader('Content-Type','text/html');
            res.write(data);
            res.end();
        }else {
            throw new Error('method not allowed');
        }
        
    }catch(error){
        res.writeHead(500, {'content-type':'text/html'});
        res.end('server error');
    }
});

server.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})