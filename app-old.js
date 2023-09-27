
http.createServer((req,res)=>{
    res.write('hola mundo')
    res.end();
})

.listen(3000);

console.log('esuchando en el puerto',3000)