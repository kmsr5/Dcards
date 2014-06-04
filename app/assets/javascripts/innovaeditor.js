/*** Editor Script Wrapper ***/
var oScripts=document.getElementsByTagName("script"); 
var sEditorPath;
for(var i=0;i<oScripts.length;i++)
  {
  var sSrc=oScripts[i].src.toLowerCase();
  //alert(sSrc.indexOf("../assets/javascripts/innovaeditor.js"));
  if(sSrc.indexOf("../assets/innovaeditor.js")!=-1) sEditorPath=oScripts[i].src.replace(/innovaeditor.js/,"");
}

document.write("<scr" + "ipt src='../assets/nlslightbox.js' type='text/javascript'></scr" + "ipt>");
document.write("<scr" + "ipt src='../assets/nlsanimation.js' type='text/javascript'></scr" + "ipt>");
document.write("<link href='../assets/nlslightbox.css' rel='stylesheet' type='text/css' />");
document.write("<scr" + "ipt src='../assets/dialog.js' type='text/javascript'></scr" + "ipt>");

document.write("<li"+"nk rel='stylesheet' href='../assets/istoolbar.css' type='text/css' />");
//document.write("<scr"+"ipt src='../assets/istoolbar.js'></scr"+"ipt>");

if(navigator.appName.indexOf('Microsoft')!=-1) {
  document.write("<scr"+"ipt src='../assets/editor.js'></scr"+"ipt>");
} else if(navigator.userAgent.indexOf('Safari')!=-1) {
  document.write("<scr"+"ipt src='../assets/editor-saf.js'></scr"+"ipt>");
} else {
  document.write("<scr"+"ipt src='../assets/editor-moz.js'></scr"+"ipt>");
}

/*
modelessDialogShow = function (a, b, c) { modalDialog(a, b, c) }; 
modalDialogShow = function (a, b, c) { modalDialog(a, b, c) }; 
try {
    $(document).ready(function () {
        modelessDialogShow = function (a, b, c) { modalDialog(a, b, c) };
        modalDialogShow = function (a, b, c) { modalDialog(a, b, c) };
    });
} catch (e) { }
*/
