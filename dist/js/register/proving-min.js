define(["../common/random-min","../common/cookieJar-min"],function(e,o){return{setCode:function(){let n=document.getElementById("code"),t="";for(var c=0;c<4;c++)t+=e.getCode();n.innerHTML=t,n.style.background=e.getColor(),o.setCookie("codeStr",t,1)},codeBtn:function(){let e=this;return document.querySelector("#code +a").onclick=function(){e.setCode()},this.codeStr}}});