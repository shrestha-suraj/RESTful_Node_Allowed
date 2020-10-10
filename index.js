// Node in-built APIs
const http=require('http')
const url=require('url')
const stringdecoder=require('string_decoder').StringDecoder


const server=http.createServer((request,response)=>{
    // Get the url and parse it
    const parsedUrl=url.parse(request.url,true) 
    const path=parsedUrl.pathname
    const trimmedPath=path.replace(/^\/+|\/+$/g ,'')
    // Get the HTTP Method
    const method=request.method.toLowerCase()
    // Get the query string as an object from the url
    const query=parsedUrl.query
    // Get the headers as an object
    const headers=request.headers

    // Parsing payloads example: data coming from a form
    // Stirng decoder is needed to get payload
    const decoder=new stringdecoder('utf-8')
    let buffer=''
    // Request is emitting a event called data which calls a callback
    // after receiving data
    request.on('data',()=>{
        buffer+=decoder.write(data)
        // console.log(buffer)
    })
    request.on('end',()=>{
        buffer+=decoder.end()
        response.end('Hello World')
        console.log(buffer)
    })
    



    // Send the response
    response.end("Hello World")

    // Log the request path
})

server.listen(3000,()=>{
    console.log("Server is running on port 3000")
} )