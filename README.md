打算实现一个可以在PC端播放贴吧语音条的脚本

1. [x] 获取移动端贴吧语音条地址
2. [x] 利用得到的语音条地址替换PC端地址


# 参考
## 使用nginx反向代理，解决ajax不能修改user-agent问题

**[JQuery Ajax Request: Change User-Agent](https://stackoverflow.com/questions/5771878/jquery-ajax-request-change-user-agent)**

The setRequestHeader() method
[...]
When the setRequestHeader(header, value) method is invoked, the user agent must run these steps: [...]
Terminate these steps if header is a case-insensitive match for one of the following headers:
[...]
User-Agent

## 使用JS解析HTML字符串

**[Parse an HTML string with JS](https://stackoverflow.com/questions/10585029/parse-an-html-string-with-js)**

Create a dummy DOM element and add the string to it. Then, you can manipulate it like any DOM element.
```js
var el = document.createElement( 'html' );
el.innerHTML = "<html><head><title>titleTest</title></head><body><a href='test0'>test01</a><a href='test1'>test02</a><a href='test2'>test03</a></body></html>";

el.getElementsByTagName( 'a' ); // Live NodeList of your anchor elements
```
