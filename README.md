# AndKey
JavaScript键盘快捷键绑定，快捷键组合绑定插件

使用：
<pre><code>
$(document).AndKey({
  bindKey:"ctrl+A",
  model:"once",//once loop
  interval:50,
  context:this,
  callBack:function(){
    console.log("this is AndKey!")
  }
})
</pre></code>
