# nodejs-notes
NodeJS notes

https://www.runoob.com/nodejs/nodejs-tutorial.html


# router

[server.js](server/server.js)

```
                   url.parse(string).query
                                           |
           url.parse(string).pathname      |
                       |                   |
                       |                   |
                     ------ -------------------
http://localhost:8888/start?foo=bar&hello=world
                                ---       -----
                                 |          |
                                 |          |
              querystring.parse(queryString)["foo"]    |
                                            |
                         querystring.parse(queryString)["hello"]

```

# text/json和application/json区别

text	    表明文件是普通文本，理论上是人类可读
application	表明是某种二进制数据

[MIME 类型](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_Types)

<table>
  <thead>
    <tr>
      <th>类型</th>
      <th>描述</th>
      <th>典型示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>text</code></td>
      <td>表明文件是普通文本，理论上是人类可读</td>
      <td><code>text/plain</code>, <code>text/html</code>, <code>text/css, text/javascript</code></td>
    </tr>
    <tr>
      <td><code>image</code></td>
      <td>表明是某种图像。不包括视频，但是动态图（比如动态 gif）也使用 image 类型</td>
      <td><code>image/gif</code>, <code>image/png</code>, <code>image/jpeg</code>, <code>image/bmp</code>, <code>image/webp</code>, <code>image/x-icon</code>, <code>image/vnd.microsoft.icon</code></td>
    </tr>
    <tr>
      <td><code>audio</code></td>
      <td>表明是某种音频文件</td>
      <td><code>audio/midi</code>, <code>audio/mpeg, audio/webm, audio/ogg, audio/wav</code></td>
    </tr>
    <tr>
      <td><code>video</code></td>
      <td>表明是某种视频文件</td>
      <td><code>video/webm</code>, <code>video/ogg</code></td>
    </tr>
    <tr>
      <td><code>application</code></td>
      <td>表明是某种二进制数据</td>
      <td><code>application/octet-stream</code>, <code>application/pkcs12</code>, <code>application/vnd.mspowerpoint</code>, <code>application/xhtml+xml</code>, <code>application/xml</code>, <code>application/pdf</code></td>
    </tr>
  </tbody>
</table>