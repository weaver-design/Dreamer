//共享JS



function IEVersion() 
  { 
   var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串 
   var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE浏览器 
   var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器 
   function alert1(){

  alert("您的IE版本太低，请升级浏览器!");
}
if(isIE) 
   { 
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);"); 
      reIE.test(userAgent); 
      var fIEVersion = parseFloat(RegExp["$1"]); 
      if(fIEVersion == 7) 
      { alert1();
        return "IE7";} 
      else if(fIEVersion == 8) 
      { alert1();
      return "IE8";} 
      else if(fIEVersion == 9) 
      { 
      return "IE9";} 
      else if(fIEVersion == 10) 
      { return "IE10";} 
      else if(fIEVersion == 11) 
      { return "IE11";} 
      else 
      { return "0"}//IE版本过低 
   } 
else if(isEdge) 
{ 
  return "Edge"; 
} 
   else 
   { 
     return "-1";//非IE 
   } 
} 

IEVersion();


