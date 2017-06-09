/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-29 15:30:21
 * @version $Id$
 */
var first = document.getElementById("a1");
first.onclick = function changeColor() {
	document.getElementById("tbl").style.background="#ff0000";
};

var second = document.getElementById("b1");
second.onclick = function changeDate(){
	var today = new Date();
	var y = today.getFullYear();
	var m = today.getMonth() + 1;
	var d = today.getDate();
	second.innerHTML=y + "-" + m + "-" + d;
};

var third = document.getElementById("c1");
third.onclick = function insert(){
    var tbody = document.getElementById("tbody");
    var td = document.createElement("td");
    var td1 = document.createElement("td");
    var tr = document.createElement("tr");
    var tb = document.getElementById("tbl");
    tr.appendChild(td);
    tr.appendChild(td1);
    tbody.appendChild(tr);
    tb.appendChild(tbody);

};

var fourth = document.getElementById("d1");
fourth.onclick = function drop(){
	var tr2 = document.getElementById("tr2");
	tr2.parentNode.removeChild(tr2);
};

var fifth = document.getElementById("e1");
fifth.onclick = function showLocation(event){
    x = event.clientX;
    y = event.clientY;
    fifth.innerHTML="X:" + x + ",Y:" + y;
};

var sixth = document.getElementById("f1");
sixth.onclick = function newDoc(){
	window.open("https://www.taobao.com/");
};
