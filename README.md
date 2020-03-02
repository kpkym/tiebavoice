打算实现一个可以在PC端播放贴吧语音条的脚本

1. [x] 获取移动端贴吧语音条地址
2. [ ] 利用得到的语音条地址替换PC端地址



* 使用nginx反向代理，解决ajax不能修改user-agent问题
    > **[JQuery Ajax Request: Change User-Agent](https://stackoverflow.com/questions/5771878/jquery-ajax-request-change-user-agent)**
    > The setRequestHeader() method
    > [...]
    > When the setRequestHeader(header, value) method is invoked, the user agent must run these steps: [...]
    > Terminate these steps if header is a case-insensitive match for one of the following headers:
    > [...]
    > User-Agent