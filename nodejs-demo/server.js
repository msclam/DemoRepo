var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  /*
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method
*/
  var parsedUrl = url.parse(request.url, true)
  var path = request.url
  var query = ' '
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method
 

  /******** 从这里开始看，上面不要看 ************/

  /*console.log('有个傻子发请求过来啦！路径（带查询参数）为：' + pathWithQuery)

  if(path === '/'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`二哈`)
    response.end()
  } else if(path === '/x'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/css;charset=utf-8')
    response.write(`body{color: red;}`)
    response.end()
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`你输入的路径不存在对应的内容`)
    response.end()
  }*/
  console.log('ff said: get the path of http\n' + path)
  /*console.log('ff said: the query string is\n' + query)*/
  /*console.log('ff said: the path which do not contain the query string is\n' + pathNoQuery)*/ 
  /*if (path == '/') {
	response.write('hi\n')
	response.end()
  } else if (path == '/index') {
	response.setHeader('Content-Type', 'text/html;charset=utf-8')
	response.write('<!DOCTYPE>\n<html><head></head><body>hello node.js</body></html>')
	response.end()
  }else {
    response.statusCode = 404
	response.end()
  }*/
  if(path == '/style.css'){  // 后缀没什么用, 可以style.js
    response.setHeader('Content-Type', 'text/css; charset=utf-8')
    response.write('body{background-color: #ddd;}h1{color: red;}')
    response.end()
  }else if(path == '/script.js'){
    response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
    response.write('alert("这是JS执行的")')
    response.end()
  }else if(path == '/index.html'){
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.write('<!DOCTYPE>\n<html>'  +
      '<head><link rel="stylesheet" href="/style.css">' +
      '</head><body>'  +
      '<h1>你好</h1>' +
      '<script src="/script.js"></script>' +
      '</body></html>')
    response.end()
  }else{
    response.statusCode = 404
    response.end()
  }
  

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)


