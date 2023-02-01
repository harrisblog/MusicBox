"use strict";
// 卖萌标题
var OriginTitile = document.title, titleTime
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    document.title = '(つェ⊂) 你可以笑一个吗？';
    clearTimeout(titleTime);
  } else {
    document.title = '(*´∇｀*) 因为我咖啡忘加糖了';
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});