// JavaScript Document
var befretime = new Date().getTime();
window.onload = gettimeload;
function gettimeload()
{
var aftertime = new Date().getTime();
// Time calculating in seconds
time = (aftertime - befretime) / 1000
$("#lbltxt").text(time);

}
