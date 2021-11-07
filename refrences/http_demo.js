const http =require('http')

//Create server Object
//here create server is a method
let server = http.createServer((request,response) =>{
    // console.log(request)
    console.log(response)
    response.write("<h1>Hello World</h1>")
    response.end()
})
server.listen(5000,()=>console.log('server is running at port 5000'))
