/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-17 17:53:20
 * @version $Id$
 */
const map = new BMap.Map('myMap');                 
const point = new BMap.Point(120.074425, 30.269527);
map.centerAndZoom(point, 15);                        

// let opts = {offset: new BMap.Size(0, 0)};      
// map.addControl(new BMap.MapTypeControl(opts)); 
map.addControl(new BMap.NavigationControl());  
map.addControl(new BMap.ScaleControl());      
map.addControl(new BMap.OverviewMapControl()); 

map.setCurrentCity('杭州');                    
map.enableScrollWheelZoom(true); 

var local = new BMap.LocalSearch(map, {
        renderOptions: {
            map: map,
            autoViewport: true,
            panel: "results"
        }
    });
    local.searchNearby("酒店", "西溪湿地");

$("body").on("click", ".part1", function() {
        // $("#p1").toggleClass("active");
        $("#results").fadeIn();
        map.clearOverlays();
        var local = new BMap.LocalSearch(map, {
            renderOptions: {
                map: map,
                autoViewport: true,
                panel: "results"
            }
        });
        local.searchNearby("酒店", "西溪湿地");
    });

$(init) 
function init() {
	$("#shoudi").hide();
	$("#lvdi").hide();
	$("#fudi").hide();
	$("#boan").hide();
	$("#yanshui").hide();
	$("#shentan").hide();
	$("#hezhu").hide();
	$("#hongyuan").hide();
	$("#gaozhuang").hide();
	$("#meizhu").hide();
	$("#meishu").hide();
	$("#shuige").hide();
	$("#qiuxue").hide();
	$("#lianhua").hide();
	$("#baijia").hide();
	$("#xialong").hide();
	$("#jiangxiang").hide();
	$("#sanshen").hide();
	$("#shuixia").hide();
	$("#lihang").hide();
	$("#luan").hide();
	$("#shuihu").hide();
	$("#qushui").hide();
	$("#d").hide();
	$("#bowu").hide();
	$("#an").hide();
	$("#hongzhong").hide();

var point1 = new BMap.Point(120.061226,30.260658);
map.centerAndZoom(point1, 15); 
var marker1 = new BMap.Marker(point1);   
map.addOverlay(marker1);
var opts1 = document.getElementById('shoudi');
var infoWindow1 = new BMap.InfoWindow(opts1);    
marker1.addEventListener("click", function(){ 
	$("#shoudi").show();
    map.openInfoWindow(infoWindow1, point1); 
});

var point2 = new BMap.Point(120.094662,30.280722);
map.centerAndZoom(point2, 15); 
var marker2 = new BMap.Marker(point2);   
map.addOverlay(marker2);
var opts2 = document.getElementById('lvdi');
var infoWindow2 = new BMap.InfoWindow(opts2);    
marker2.addEventListener("click", function(){ 
	$("#lvdi").show();
    map.openInfoWindow(infoWindow2, point2); 
});

var point3 = new BMap.Point(120.079513,30.27834);
map.centerAndZoom(point3, 15); 
var marker3 = new BMap.Marker(point3);   
map.addOverlay(marker3);
var opts3 = document.getElementById('fudi');
var infoWindow3 = new BMap.InfoWindow(opts3);    
marker3.addEventListener("click", function(){ 
	$("#fudi").show();
    map.openInfoWindow(infoWindow3, point3); 
});

var point4 = new BMap.Point(120.068034,30.266279);
map.centerAndZoom(point4, 15); 
var marker4 = new BMap.Marker(point4);   
map.addOverlay(marker4);
var opts4 = document.getElementById('boan');
var infoWindow4 = new BMap.InfoWindow(opts4);    
marker4.addEventListener("click", function(){ 
	$("#boan").show();
    map.openInfoWindow(infoWindow4, point4); 
});

var point5 = new BMap.Point(120.06672,30.275675);
map.centerAndZoom(point5, 15); 
var marker5 = new BMap.Marker(point5);   
map.addOverlay(marker5);
var opts5 = document.getElementById('yanshui');
var infoWindow5 = new BMap.InfoWindow(opts5);    
marker5.addEventListener("click", function(){ 
	$("#yanshui").show();
    map.openInfoWindow(infoWindow5, point5); 
});

var point6 = new BMap.Point(120.073444,30.280485);
map.centerAndZoom(point6, 15); 
var marker6 = new BMap.Marker(point6);   
map.addOverlay(marker6);
var opts6 = document.getElementById('shentan');
var infoWindow6 = new BMap.InfoWindow(opts6);    
marker6.addEventListener("click", function(){ 
	$("#shentan").show();
    map.openInfoWindow(infoWindow6, point6); 
});

var point7 = new BMap.Point(120.079172,30.278725);
map.centerAndZoom(point7, 15); 
var marker7 = new BMap.Marker(point7);   
map.addOverlay(marker7);
var opts7 = document.getElementById('hezhu');
var infoWindow7 = new BMap.InfoWindow(opts7);    
marker7.addEventListener("click", function(){ 
	$("#hezhu").show();
    map.openInfoWindow(infoWindow7, point7); 
});

var point8 = new BMap.Point(120.056691,30.271212);
map.centerAndZoom(point8, 15); 
var marker8 = new BMap.Marker(point8);   
map.addOverlay(marker8);
var opts8 = document.getElementById('hongyuan');
var infoWindow8 = new BMap.InfoWindow(opts8);    
marker8.addEventListener("click", function(){ 
	$("#hongyuan").show();
    map.openInfoWindow(infoWindow8, point8); 
});

var point9 = new BMap.Point(120.083264,30.266398);
map.centerAndZoom(point9, 15); 
var marker9 = new BMap.Marker(point9);   
map.addOverlay(marker9);
var opts9 = document.getElementById('gaozhuang');
var infoWindow9 = new BMap.InfoWindow(opts9);    
marker9.addEventListener("click", function(){ 
	$("#gaozhuang").show();
    map.openInfoWindow(infoWindow9, point9); 
});

var point10 = new BMap.Point(120.071898,30.266019);
map.centerAndZoom(point10, 15); 
var marker10 = new BMap.Marker(point10);   
map.addOverlay(marker10);
var opts10 = document.getElementById('meizhu');
var infoWindow10 = new BMap.InfoWindow(opts10);    
marker10.addEventListener("click", function(){ 
	$("#meizhu").show();
    map.openInfoWindow(infoWindow10, point10); 
});

var point11 = new BMap.Point(120.074106,30.266215);
map.centerAndZoom(point11, 15); 
var marker11 = new BMap.Marker(point11);   
map.addOverlay(marker11);
var opts11 = document.getElementById('meishu');
var infoWindow11 = new BMap.InfoWindow(opts11);    
marker11.addEventListener("click", function(){ 
	$("#meishu").show();
    map.openInfoWindow(infoWindow11, point11); 
});

var point12 = new BMap.Point(120.077284,30.267157);
map.centerAndZoom(point12, 15); 
var marker12 = new BMap.Marker(point12);   
map.addOverlay(marker12);
var opts12 = document.getElementById('shuige');
var infoWindow12 = new BMap.InfoWindow(opts12);    
marker12.addEventListener("click", function(){ 
	$("#shuige").show();
    map.openInfoWindow(infoWindow12, point12); 
});

var point13 = new BMap.Point(120.070756,30.270175);
map.centerAndZoom(point13, 15); 
var marker13 = new BMap.Marker(point13);   
map.addOverlay(marker13);
var opts13 = document.getElementById('qiuxue');
var infoWindow13 = new BMap.InfoWindow(opts13);    
marker13.addEventListener("click", function(){ 
	$("#qiuxue").show();
    map.openInfoWindow(infoWindow13, point13); 
});

var point14 = new BMap.Point(120.087651,30.271009);
map.centerAndZoom(point14, 15); 
var marker14 = new BMap.Marker(point14);   
map.addOverlay(marker14);
var opts14 = document.getElementById('lianhua');
var infoWindow14 = new BMap.InfoWindow(opts14);    
marker14.addEventListener("click", function(){ 
	$("#lianhua").show();
    map.openInfoWindow(infoWindow14, point14); 
});

var point15 = new BMap.Point(120.080025,30.278105);
map.centerAndZoom(point15, 15); 
var marker15 = new BMap.Marker(point15);   
map.addOverlay(marker15);
var opts15 = document.getElementById('zhiwu');
var infoWindow15 = new BMap.InfoWindow(opts15);    
marker15.addEventListener("click", function(){ 
	$("#zhiwu").show();
    map.openInfoWindow(infoWindow15, point15); 
});

var point16 = new BMap.Point(120.066651,30.270254);
map.centerAndZoom(point16, 15); 
var marker16 = new BMap.Marker(point16);   
map.addOverlay(marker16);
var opts16 = document.getElementById('baijia');
var infoWindow16 = new BMap.InfoWindow(opts16);    
marker16.addEventListener("click", function(){ 
	$("#baijia").show();
    map.openInfoWindow(infoWindow16, point16); 
});

var point17 = new BMap.Point(120.073664,30.272596);
map.centerAndZoom(point17, 15); 
var marker17 = new BMap.Marker(point17);   
map.addOverlay(marker17);
var opts17 = document.getElementById('xialong');
var infoWindow17 = new BMap.InfoWindow(opts17);    
marker17.addEventListener("click", function(){ 
	$("#xialong").show();
    map.openInfoWindow(infoWindow17, point17); 
});

var point18 = new BMap.Point(120.077137,30.278185);
map.centerAndZoom(point18, 15); 
var marker18 = new BMap.Marker(point18);   
map.addOverlay(marker18);
var opts18 = document.getElementById('jiangxiang');
var infoWindow18 = new BMap.InfoWindow(opts18);    
marker18.addEventListener("click", function(){ 
	$("#jiangxiang").show();
    map.openInfoWindow(infoWindow18, point18); 
});

var point19 = new BMap.Point(120.077017,30.278464);
map.centerAndZoom(point19, 15); 
var marker19 = new BMap.Marker(point19);   
map.addOverlay(marker19);
var opts19 = document.getElementById('sanshen');
var infoWindow19 = new BMap.InfoWindow(opts19);    
marker19.addEventListener("click", function(){ 
	$("#sanshen").show();
    map.openInfoWindow(infoWindow19, point19); 
});

var point20 = new BMap.Point(120.083684,30.277017);
map.centerAndZoom(point20, 15); 
var marker20 = new BMap.Marker(point20);   
map.addOverlay(marker20);
var opts20 = document.getElementById('shuixia');
var infoWindow20 = new BMap.InfoWindow(opts20);    
marker20.addEventListener("click", function(){ 
	$("#shuixia").show();
    map.openInfoWindow(infoWindow20, point20); 
});

var point21 = new BMap.Point(120.077907,30.270191);
map.centerAndZoom(point21, 15); 
var marker21 = new BMap.Marker(point21);   
map.addOverlay(marker21);
var opts21 = document.getElementById('lihang');
var infoWindow21 = new BMap.InfoWindow(opts21);    
marker21.addEventListener("click", function(){ 
	$("#lihang").show();
    map.openInfoWindow(infoWindow21, point21); 
});

var point22 = new BMap.Point(120.078004,30.269735);
map.centerAndZoom(point22, 15); 
var marker22 = new BMap.Marker(point22);   
map.addOverlay(marker22);
var opts22 = document.getElementById('luan');
var infoWindow22 = new BMap.InfoWindow(opts22);    
marker22.addEventListener("click", function(){ 
	$("#luan").show();
    map.openInfoWindow(infoWindow22, point22); 
});

var point23 = new BMap.Point(120.077356,30.280428);
map.centerAndZoom(point23, 15); 
var marker23 = new BMap.Marker(point23);   
map.addOverlay(marker23);
var opts23 = document.getElementById('shuihu');
var infoWindow23 = new BMap.InfoWindow(opts23);    
marker23.addEventListener("click", function(){ 
	$("#shuihu").show();
    map.openInfoWindow(infoWindow23, point23); 
});

var point24 = new BMap.Point(120.078743,30.270122);
map.centerAndZoom(point24, 15); 
var marker24 = new BMap.Marker(point24);   
map.addOverlay(marker24);
var opts24 = document.getElementById('qushui');
var infoWindow24 = new BMap.InfoWindow(opts24);    
marker24.addEventListener("click", function(){ 
	$("#qushui").show();
    map.openInfoWindow(infoWindow24, point24); 
});

var point25 = new BMap.Point(120.077155,30.285418);
map.centerAndZoom(point25, 15); 
var marker25 = new BMap.Marker(point25);   
map.addOverlay(marker25);
var opts25 = document.getElementById('d');
var infoWindow25 = new BMap.InfoWindow(opts25);    
marker25.addEventListener("click", function(){ 
	$("#d").show();
    map.openInfoWindow(infoWindow25, point25); 
});

var point26 = new BMap.Point(120.095209,30.270393);
map.centerAndZoom(point26, 15); 
var marker26 = new BMap.Marker(point26);   
map.addOverlay(marker26);
var opts26 = document.getElementById('bowu');
var infoWindow26 = new BMap.InfoWindow(opts26);    
marker26.addEventListener("click", function(){ 
	$("#bowu").show();
    map.openInfoWindow(infoWindow26, point26); 
});

var point27 = new BMap.Point(120.068529,30.277513);
map.centerAndZoom(point27, 15); 
var marker27 = new BMap.Marker(point27);   
map.addOverlay(marker27);
var opts27 = document.getElementById('an');
var infoWindow27 = new BMap.InfoWindow(opts27);    
marker27.addEventListener("click", function(){ 
	$("#an").show();
    map.openInfoWindow(infoWindow27, point27); 
});

var point28 = new BMap.Point(120.077995,30.275356);
map.centerAndZoom(point28, 15); 
var marker28 = new BMap.Marker(point28);   
map.addOverlay(marker28);
var opts28 = document.getElementById('hongzhong');
var infoWindow28 = new BMap.InfoWindow(opts28);    
marker28.addEventListener("click", function(){ 
	$("#hongzhong").show();
    map.openInfoWindow(infoWindow28, point28); 
});
}
$("body").on("click", ".part2", function() {
        // $("#p1").toggleClass("active");
        $("#results").fadeIn();
        map.clearOverlays();
        $(init) 
function init() {
	$("#shoudi").hide();
	$("#lvdi").hide();
	$("#fudi").hide();
	$("#boan").hide();
	$("#yanshui").hide();
	$("#shentan").hide();
	$("#hezhu").hide();
	$("#hongyuan").hide();
	$("#gaozhuang").hide();
	$("#meizhu").hide();
	$("#meishu").hide();
	$("#shuige").hide();
	$("#qiuxue").hide();
	$("#lianhua").hide();
	$("#baijia").hide();
	$("#xialong").hide();
	$("#jiangxiang").hide();
	$("#sanshen").hide();
	$("#shuixia").hide();
	$("#lihang").hide();
	$("#luan").hide();
	$("#shuihu").hide();
	$("#qushui").hide();
	$("#d").hide();
	$("#bowu").hide();
	$("#an").hide();
	$("#hongzhong").hide();

var point1 = new BMap.Point(120.061226,30.260658);
map.centerAndZoom(point1, 15); 
var marker1 = new BMap.Marker(point1);   
map.addOverlay(marker1);
var opts1 = document.getElementById('shoudi');
var infoWindow1 = new BMap.InfoWindow(opts1);    
marker1.addEventListener("click", function(){ 
	$("#shoudi").show();
    map.openInfoWindow(infoWindow1, point1); 
});

var point2 = new BMap.Point(120.094662,30.280722);
map.centerAndZoom(point2, 15); 
var marker2 = new BMap.Marker(point2);   
map.addOverlay(marker2);
var opts2 = document.getElementById('lvdi');
var infoWindow2 = new BMap.InfoWindow(opts2);    
marker2.addEventListener("click", function(){ 
	$("#lvdi").show();
    map.openInfoWindow(infoWindow2, point2); 
});

var point3 = new BMap.Point(120.079513,30.27834);
map.centerAndZoom(point3, 15); 
var marker3 = new BMap.Marker(point3);   
map.addOverlay(marker3);
var opts3 = document.getElementById('fudi');
var infoWindow3 = new BMap.InfoWindow(opts3);    
marker3.addEventListener("click", function(){ 
	$("#fudi").show();
    map.openInfoWindow(infoWindow3, point3); 
});

var point4 = new BMap.Point(120.068034,30.266279);
map.centerAndZoom(point4, 15); 
var marker4 = new BMap.Marker(point4);   
map.addOverlay(marker4);
var opts4 = document.getElementById('boan');
var infoWindow4 = new BMap.InfoWindow(opts4);    
marker4.addEventListener("click", function(){ 
	$("#boan").show();
    map.openInfoWindow(infoWindow4, point4); 
});

var point5 = new BMap.Point(120.06672,30.275675);
map.centerAndZoom(point5, 15); 
var marker5 = new BMap.Marker(point5);   
map.addOverlay(marker5);
var opts5 = document.getElementById('yanshui');
var infoWindow5 = new BMap.InfoWindow(opts5);    
marker5.addEventListener("click", function(){ 
	$("#yanshui").show();
    map.openInfoWindow(infoWindow5, point5); 
});

var point6 = new BMap.Point(120.073444,30.280485);
map.centerAndZoom(point6, 15); 
var marker6 = new BMap.Marker(point6);   
map.addOverlay(marker6);
var opts6 = document.getElementById('shentan');
var infoWindow6 = new BMap.InfoWindow(opts6);    
marker6.addEventListener("click", function(){ 
	$("#shentan").show();
    map.openInfoWindow(infoWindow6, point6); 
});

var point7 = new BMap.Point(120.079172,30.278725);
map.centerAndZoom(point7, 15); 
var marker7 = new BMap.Marker(point7);   
map.addOverlay(marker7);
var opts7 = document.getElementById('hezhu');
var infoWindow7 = new BMap.InfoWindow(opts7);    
marker7.addEventListener("click", function(){ 
	$("#hezhu").show();
    map.openInfoWindow(infoWindow7, point7); 
});

var point8 = new BMap.Point(120.056691,30.271212);
map.centerAndZoom(point8, 15); 
var marker8 = new BMap.Marker(point8);   
map.addOverlay(marker8);
var opts8 = document.getElementById('hongyuan');
var infoWindow8 = new BMap.InfoWindow(opts8);    
marker8.addEventListener("click", function(){ 
	$("#hongyuan").show();
    map.openInfoWindow(infoWindow8, point8); 
});

var point9 = new BMap.Point(120.083264,30.266398);
map.centerAndZoom(point9, 15); 
var marker9 = new BMap.Marker(point9);   
map.addOverlay(marker9);
var opts9 = document.getElementById('gaozhuang');
var infoWindow9 = new BMap.InfoWindow(opts9);    
marker9.addEventListener("click", function(){ 
	$("#gaozhuang").show();
    map.openInfoWindow(infoWindow9, point9); 
});

var point10 = new BMap.Point(120.071898,30.266019);
map.centerAndZoom(point10, 15); 
var marker10 = new BMap.Marker(point10);   
map.addOverlay(marker10);
var opts10 = document.getElementById('meizhu');
var infoWindow10 = new BMap.InfoWindow(opts10);    
marker10.addEventListener("click", function(){ 
	$("#meizhu").show();
    map.openInfoWindow(infoWindow10, point10); 
});

var point11 = new BMap.Point(120.074106,30.266215);
map.centerAndZoom(point11, 15); 
var marker11 = new BMap.Marker(point11);   
map.addOverlay(marker11);
var opts11 = document.getElementById('meishu');
var infoWindow11 = new BMap.InfoWindow(opts11);    
marker11.addEventListener("click", function(){ 
	$("#meishu").show();
    map.openInfoWindow(infoWindow11, point11); 
});

var point12 = new BMap.Point(120.077284,30.267157);
map.centerAndZoom(point12, 15); 
var marker12 = new BMap.Marker(point12);   
map.addOverlay(marker12);
var opts12 = document.getElementById('shuige');
var infoWindow12 = new BMap.InfoWindow(opts12);    
marker12.addEventListener("click", function(){ 
	$("#shuige").show();
    map.openInfoWindow(infoWindow12, point12); 
});

var point13 = new BMap.Point(120.070756,30.270175);
map.centerAndZoom(point13, 15); 
var marker13 = new BMap.Marker(point13);   
map.addOverlay(marker13);
var opts13 = document.getElementById('qiuxue');
var infoWindow13 = new BMap.InfoWindow(opts13);    
marker13.addEventListener("click", function(){ 
	$("#qiuxue").show();
    map.openInfoWindow(infoWindow13, point13); 
});

var point14 = new BMap.Point(120.087651,30.271009);
map.centerAndZoom(point14, 15); 
var marker14 = new BMap.Marker(point14);   
map.addOverlay(marker14);
var opts14 = document.getElementById('lianhua');
var infoWindow14 = new BMap.InfoWindow(opts14);    
marker14.addEventListener("click", function(){ 
	$("#lianhua").show();
    map.openInfoWindow(infoWindow14, point14); 
});

var point15 = new BMap.Point(120.080025,30.278105);
map.centerAndZoom(point15, 15); 
var marker15 = new BMap.Marker(point15);   
map.addOverlay(marker15);
var opts15 = document.getElementById('zhiwu');
var infoWindow15 = new BMap.InfoWindow(opts15);    
marker15.addEventListener("click", function(){ 
	$("#zhiwu").show();
    map.openInfoWindow(infoWindow15, point15); 
});

var point16 = new BMap.Point(120.066651,30.270254);
map.centerAndZoom(point16, 15); 
var marker16 = new BMap.Marker(point16);   
map.addOverlay(marker16);
var opts16 = document.getElementById('baijia');
var infoWindow16 = new BMap.InfoWindow(opts16);    
marker16.addEventListener("click", function(){ 
	$("#baijia").show();
    map.openInfoWindow(infoWindow16, point16); 
});

var point17 = new BMap.Point(120.073664,30.272596);
map.centerAndZoom(point17, 15); 
var marker17 = new BMap.Marker(point17);   
map.addOverlay(marker17);
var opts17 = document.getElementById('xialong');
var infoWindow17 = new BMap.InfoWindow(opts17);    
marker17.addEventListener("click", function(){ 
	$("#xialong").show();
    map.openInfoWindow(infoWindow17, point17); 
});

var point18 = new BMap.Point(120.077137,30.278185);
map.centerAndZoom(point18, 15); 
var marker18 = new BMap.Marker(point18);   
map.addOverlay(marker18);
var opts18 = document.getElementById('jiangxiang');
var infoWindow18 = new BMap.InfoWindow(opts18);    
marker18.addEventListener("click", function(){ 
	$("#jiangxiang").show();
    map.openInfoWindow(infoWindow18, point18); 
});

var point19 = new BMap.Point(120.077017,30.278464);
map.centerAndZoom(point19, 15); 
var marker19 = new BMap.Marker(point19);   
map.addOverlay(marker19);
var opts19 = document.getElementById('sanshen');
var infoWindow19 = new BMap.InfoWindow(opts19);    
marker19.addEventListener("click", function(){ 
	$("#sanshen").show();
    map.openInfoWindow(infoWindow19, point19); 
});

var point20 = new BMap.Point(120.083684,30.277017);
map.centerAndZoom(point20, 15); 
var marker20 = new BMap.Marker(point20);   
map.addOverlay(marker20);
var opts20 = document.getElementById('shuixia');
var infoWindow20 = new BMap.InfoWindow(opts20);    
marker20.addEventListener("click", function(){ 
	$("#shuixia").show();
    map.openInfoWindow(infoWindow20, point20); 
});

var point21 = new BMap.Point(120.077907,30.270191);
map.centerAndZoom(point21, 15); 
var marker21 = new BMap.Marker(point21);   
map.addOverlay(marker21);
var opts21 = document.getElementById('lihang');
var infoWindow21 = new BMap.InfoWindow(opts21);    
marker21.addEventListener("click", function(){ 
	$("#lihang").show();
    map.openInfoWindow(infoWindow21, point21); 
});

var point22 = new BMap.Point(120.078004,30.269735);
map.centerAndZoom(point22, 15); 
var marker22 = new BMap.Marker(point22);   
map.addOverlay(marker22);
var opts22 = document.getElementById('luan');
var infoWindow22 = new BMap.InfoWindow(opts22);    
marker22.addEventListener("click", function(){ 
	$("#luan").show();
    map.openInfoWindow(infoWindow22, point22); 
});

var point23 = new BMap.Point(120.077356,30.280428);
map.centerAndZoom(point23, 15); 
var marker23 = new BMap.Marker(point23);   
map.addOverlay(marker23);
var opts23 = document.getElementById('shuihu');
var infoWindow23 = new BMap.InfoWindow(opts23);    
marker23.addEventListener("click", function(){ 
	$("#shuihu").show();
    map.openInfoWindow(infoWindow23, point23); 
});

var point24 = new BMap.Point(120.078743,30.270122);
map.centerAndZoom(point24, 15); 
var marker24 = new BMap.Marker(point24);   
map.addOverlay(marker24);
var opts24 = document.getElementById('qushui');
var infoWindow24 = new BMap.InfoWindow(opts24);    
marker24.addEventListener("click", function(){ 
	$("#qushui").show();
    map.openInfoWindow(infoWindow24, point24); 
});

var point25 = new BMap.Point(120.077155,30.285418);
map.centerAndZoom(point25, 15); 
var marker25 = new BMap.Marker(point25);   
map.addOverlay(marker25);
var opts25 = document.getElementById('d');
var infoWindow25 = new BMap.InfoWindow(opts25);    
marker25.addEventListener("click", function(){ 
	$("#d").show();
    map.openInfoWindow(infoWindow25, point25); 
});

var point26 = new BMap.Point(120.095209,30.270393);
map.centerAndZoom(point26, 15); 
var marker26 = new BMap.Marker(point26);   
map.addOverlay(marker26);
var opts26 = document.getElementById('bowu');
var infoWindow26 = new BMap.InfoWindow(opts26);    
marker26.addEventListener("click", function(){ 
	$("#bowu").show();
    map.openInfoWindow(infoWindow26, point26); 
});

var point27 = new BMap.Point(120.068529,30.277513);
map.centerAndZoom(point27, 15); 
var marker27 = new BMap.Marker(point27);   
map.addOverlay(marker27);
var opts27 = document.getElementById('an');
var infoWindow27 = new BMap.InfoWindow(opts27);    
marker27.addEventListener("click", function(){ 
	$("#an").show();
    map.openInfoWindow(infoWindow27, point27); 
});

var point28 = new BMap.Point(120.077995,30.275356);
map.centerAndZoom(point28, 15); 
var marker28 = new BMap.Marker(point28);   
map.addOverlay(marker28);
var opts28 = document.getElementById('hongzhong');
var infoWindow28 = new BMap.InfoWindow(opts28);    
marker28.addEventListener("click", function(){ 
	$("#hongzhong").show();
    map.openInfoWindow(infoWindow28, point28); 
});
}
    });

$(init) 
function init() {
	var point1 = new BMap.Point(120.0557,30.280469);
	map.centerAndZoom(point1, 15); 
	var marker1 = new BMap.Marker(point1);  
	map.addOverlay(marker1);

	var point2 = new BMap.Point(120.054973,30.282106);
	map.centerAndZoom(point2, 15); 
	var marker2 = new BMap.Marker(point2);   
	map.addOverlay(marker2);

	var point3 = new BMap.Point(120.055889,30.282536);
	map.centerAndZoom(point3, 15); 
	var marker3 = new BMap.Marker(point3);   
	map.addOverlay(marker3);

	var point4 = new BMap.Point(120.055296,30.28167);
	map.centerAndZoom(point4, 15); 
	var marker4 = new BMap.Marker(point4);   
	map.addOverlay(marker4);

	var point5 = new BMap.Point(120.089333,30.280584);
	map.centerAndZoom(point5, 15); 
	var marker5 = new BMap.Marker(point5);   
	map.addOverlay(marker5);

	var point6 = new BMap.Point(120.084438,30.268007);
	map.centerAndZoom(point6, 15); 
	var marker6 = new BMap.Marker(point6);   
	map.addOverlay(marker6);

	var point7 = new BMap.Point(120.06145,30.283073);
	map.centerAndZoom(point7, 15); 
	var marker7 = new BMap.Marker(point7);   
	map.addOverlay(marker7);

	var point8 = new BMap.Point(120.068973,30.277563);
	map.centerAndZoom(point8, 15); 
	var marker8 = new BMap.Marker(point8);   
	map.addOverlay(marker8);

	var point9 = new BMap.Point(120.068924,30.276592);
	map.centerAndZoom(point9, 15); 
	var marker9 = new BMap.Marker(point9);   
	map.addOverlay(marker9);

	var point10 = new BMap.Point(120.0732,30.27582);
	map.centerAndZoom(point10, 15); 
	var marker10 = new BMap.Marker(point10);   
	map.addOverlay(marker10);
}

$("body").on("click", ".part3", function() {
        // $("#p1").toggleClass("active");
        $("#results").fadeIn();
        map.clearOverlays();
        $(init) 
function init() {
	var point1 = new BMap.Point(120.0557,30.280469);
	map.centerAndZoom(point1, 15); 
	var marker1 = new BMap.Marker(point1);  
	map.addOverlay(marker1);

	var point2 = new BMap.Point(120.054973,30.282106);
	map.centerAndZoom(point2, 15); 
	var marker2 = new BMap.Marker(point2);   
	map.addOverlay(marker2);

	var point3 = new BMap.Point(120.055889,30.282536);
	map.centerAndZoom(point3, 15); 
	var marker3 = new BMap.Marker(point3);   
	map.addOverlay(marker3);

	var point4 = new BMap.Point(120.055296,30.28167);
	map.centerAndZoom(point4, 15); 
	var marker4 = new BMap.Marker(point4);   
	map.addOverlay(marker4);

	var point5 = new BMap.Point(120.089333,30.280584);
	map.centerAndZoom(point5, 15); 
	var marker5 = new BMap.Marker(point5);   
	map.addOverlay(marker5);

	var point6 = new BMap.Point(120.084438,30.268007);
	map.centerAndZoom(point6, 15); 
	var marker6 = new BMap.Marker(point6);   
	map.addOverlay(marker6);

	var point7 = new BMap.Point(120.06145,30.283073);
	map.centerAndZoom(point7, 15); 
	var marker7 = new BMap.Marker(point7);   
	map.addOverlay(marker7);

	var point8 = new BMap.Point(120.068973,30.277563);
	map.centerAndZoom(point8, 15); 
	var marker8 = new BMap.Marker(point8);   
	map.addOverlay(marker8);

	var point9 = new BMap.Point(120.068924,30.276592);
	map.centerAndZoom(point9, 15); 
	var marker9 = new BMap.Marker(point9);   
	map.addOverlay(marker9);

	var point10 = new BMap.Point(120.0732,30.27582);
	map.centerAndZoom(point10, 15); 
	var marker10 = new BMap.Marker(point10);   
	map.addOverlay(marker10);
}
    });

$(init) 
function init() {
	var point1 = new BMap.Point(120.059925,30.256785);
	map.centerAndZoom(point1, 15); 
	var marker1 = new BMap.Marker(point1);  
	map.addOverlay(marker1);

	var point2 = new BMap.Point(120.052997,30.272392);
	map.centerAndZoom(point2, 15); 
	var marker2 = new BMap.Marker(point2);   
	map.addOverlay(marker2);

	var point3 = new BMap.Point(120.059959,30.256646);
	map.centerAndZoom(point3, 15); 
	var marker3 = new BMap.Marker(point3);   
	map.addOverlay(marker3);

	var point4 = new BMap.Point(120.096709,30.271235);
	map.centerAndZoom(point4, 15); 
	var marker4 = new BMap.Marker(point4);   
	map.addOverlay(marker4);
}
$("body").on("click", ".part4", function() {
        // $("#p1").toggleClass("active");
        $("#results").fadeIn();
        map.clearOverlays();
        $(init) 
function init() {
	var point1 = new BMap.Point(120.059925,30.256785);
	map.centerAndZoom(point1, 15); 
	var marker1 = new BMap.Marker(point1);  
	map.addOverlay(marker1);

	var point2 = new BMap.Point(120.052997,30.272392);
	map.centerAndZoom(point2, 15); 
	var marker2 = new BMap.Marker(point2);   
	map.addOverlay(marker2);

	var point3 = new BMap.Point(120.059959,30.256646);
	map.centerAndZoom(point3, 15); 
	var marker3 = new BMap.Marker(point3);   
	map.addOverlay(marker3);

	var point4 = new BMap.Point(120.096709,30.271235);
	map.centerAndZoom(point4, 15); 
	var marker4 = new BMap.Marker(point4);   
	map.addOverlay(marker4);
}
    });


$(init) 
function init() {
	var point1 = new BMap.Point(120.077005,30.270662);
	map.centerAndZoom(point1, 15); 
	var marker1 = new BMap.Marker(point1);  
	map.addOverlay(marker1);

	var point2 = new BMap.Point(120.080207,30.270202);
	map.centerAndZoom(point2, 15); 
	var marker2 = new BMap.Marker(point2);   
	map.addOverlay(marker2);

	var point3 = new BMap.Point(120.066997,30.26037);
	map.centerAndZoom(point3, 15); 
	var marker3 = new BMap.Marker(point3);   
	map.addOverlay(marker3);  

	var point4 = new BMap.Point(120.066315,30.261126);
	map.centerAndZoom(point4, 15); 
	var marker4 = new BMap.Marker(point4);   
	map.addOverlay(marker4);

	var point5 = new BMap.Point(120.060871,30.258303);
	map.centerAndZoom(point5, 15); 
	var marker5 = new BMap.Marker(point5);   
	map.addOverlay(marker5);

	var point6 = new BMap.Point(120.060098,30.255738);
	map.centerAndZoom(point6, 15); 
	var marker6 = new BMap.Marker(point6);   
	map.addOverlay(marker6);

	var point7 = new BMap.Point(120.060871,30.258335);
	map.centerAndZoom(point7, 15); 
	var marker7 = new BMap.Marker(point7);   
	map.addOverlay(marker7);

	var point8 = new BMap.Point(120.050828,30.25566);
	map.centerAndZoom(point8, 15); 
	var marker8 = new BMap.Marker(point8);   
	map.addOverlay(marker8);

	var point9 = new BMap.Point(120.050801,30.263404);
	map.centerAndZoom(point9, 15); 
	var marker9 = new BMap.Marker(point9);   
	map.addOverlay(marker9);

	var point10 = new BMap.Point(120.057044,30.279342);
	map.centerAndZoom(point10, 15); 
	var marker10 = new BMap.Marker(point10);   
	map.addOverlay(marker10);

	var point11 = new BMap.Point(120.054241,30.281494);
	map.centerAndZoom(point11, 15); 
	var marker11 = new BMap.Marker(point11);   
	map.addOverlay(marker11);

	var point12 = new BMap.Point(120.058877,30.282305);
	map.centerAndZoom(point12, 15); 
	var marker12 = new BMap.Marker(point12);   
	map.addOverlay(marker12);

	var point13 = new BMap.Point(120.05611,30.283272);
	map.centerAndZoom(point13, 15); 
	var marker13 = new BMap.Marker(point13);   
	map.addOverlay(marker13);

	var point14 = new BMap.Point(120.076187,30.280012);
	map.centerAndZoom(point14, 15); 
	var marker14 = new BMap.Marker(point14);   
	map.addOverlay(marker14);

	var point15 = new BMap.Point(120.077193,30.281244);
	map.centerAndZoom(point15, 15); 
	var marker15 = new BMap.Marker(point15);   
	map.addOverlay(marker15);

	var point16 = new BMap.Point(120.050806,30.263403);
	map.centerAndZoom(point16, 15); 
	var marker16 = new BMap.Marker(point16);   
	map.addOverlay(marker16);

	var point17 = new BMap.Point(120.079151,30.278469);
	map.centerAndZoom(point17, 15); 
	var marker17 = new BMap.Marker(point17);   
	map.addOverlay(marker17);

    var point18 = new BMap.Point(120.096471,30.274523);
	map.centerAndZoom(point18, 15); 
	var marker18 = new BMap.Marker(point18);   
	map.addOverlay(marker18);

	var point19 = new BMap.Point(120.096471,30.272745);
	map.centerAndZoom(point19, 15); 
	var marker19 = new BMap.Marker(point19);   
	map.addOverlay(marker19);

	var point20 = new BMap.Point(120.09365,30.270531);
	map.centerAndZoom(point20, 15); 
	var marker20 = new BMap.Marker(point20);   
	map.addOverlay(marker20);

	var point21 = new BMap.Point(120.083167,30.268698);
	map.centerAndZoom(point21, 15); 
	var marker21 = new BMap.Marker(point21);   
	map.addOverlay(marker21);

	var point22 = new BMap.Point(120.078388,30.276972);
	map.centerAndZoom(point22, 15); 
	var marker22 = new BMap.Marker(point22);   
	map.addOverlay(marker22);

	var point23 = new BMap.Point(120.079125,30.278469);
	map.centerAndZoom(point23, 15); 
	var marker23 = new BMap.Marker(point23);   
	map.addOverlay(marker23);

	var point24 = new BMap.Point(120.064029,30.263575);
	map.centerAndZoom(point24, 15); 
	var marker24 = new BMap.Marker(point24);   
	map.addOverlay(marker24);

	var point25 = new BMap.Point(120.065125,30.263076);
	map.centerAndZoom(point25, 15); 
	var marker25 = new BMap.Marker(point25);   
	map.addOverlay(marker25);

	var point26 = new BMap.Point(120.078864,30.2802);
	map.centerAndZoom(point26, 15); 
	var marker26 = new BMap.Marker(point26);   
	map.addOverlay(marker26);
	
}
$("body").on("click", ".part5", function() {
        // $("#p1").toggleClass("active");
        $("#results").fadeIn();
        map.clearOverlays();
$(init) 
function init() {
	var point1 = new BMap.Point(120.077005,30.270662);
	map.centerAndZoom(point1, 15); 
	var marker1 = new BMap.Marker(point1);  
	map.addOverlay(marker1);

	var point2 = new BMap.Point(120.080207,30.270202);
	map.centerAndZoom(point2, 15); 
	var marker2 = new BMap.Marker(point2);   
	map.addOverlay(marker2);

	var point3 = new BMap.Point(120.066997,30.26037);
	map.centerAndZoom(point3, 15); 
	var marker3 = new BMap.Marker(point3);   
	map.addOverlay(marker3);  

	var point4 = new BMap.Point(120.066315,30.261126);
	map.centerAndZoom(point4, 15); 
	var marker4 = new BMap.Marker(point4);   
	map.addOverlay(marker4);

	var point5 = new BMap.Point(120.060871,30.258303);
	map.centerAndZoom(point5, 15); 
	var marker5 = new BMap.Marker(point5);   
	map.addOverlay(marker5);

	var point6 = new BMap.Point(120.060098,30.255738);
	map.centerAndZoom(point6, 15); 
	var marker6 = new BMap.Marker(point6);   
	map.addOverlay(marker6);

	var point7 = new BMap.Point(120.060871,30.258335);
	map.centerAndZoom(point7, 15); 
	var marker7 = new BMap.Marker(point7);   
	map.addOverlay(marker7);

	var point8 = new BMap.Point(120.050828,30.25566);
	map.centerAndZoom(point8, 15); 
	var marker8 = new BMap.Marker(point8);   
	map.addOverlay(marker8);

	var point9 = new BMap.Point(120.050801,30.263404);
	map.centerAndZoom(point9, 15); 
	var marker9 = new BMap.Marker(point9);   
	map.addOverlay(marker9);

	var point10 = new BMap.Point(120.057044,30.279342);
	map.centerAndZoom(point10, 15); 
	var marker10 = new BMap.Marker(point10);   
	map.addOverlay(marker10);

	var point11 = new BMap.Point(120.054241,30.281494);
	map.centerAndZoom(point11, 15); 
	var marker11 = new BMap.Marker(point11);   
	map.addOverlay(marker11);

	var point12 = new BMap.Point(120.058877,30.282305);
	map.centerAndZoom(point12, 15); 
	var marker12 = new BMap.Marker(point12);   
	map.addOverlay(marker12);

	var point13 = new BMap.Point(120.05611,30.283272);
	map.centerAndZoom(point13, 15); 
	var marker13 = new BMap.Marker(point13);   
	map.addOverlay(marker13);

	var point14 = new BMap.Point(120.076187,30.280012);
	map.centerAndZoom(point14, 15); 
	var marker14 = new BMap.Marker(point14);   
	map.addOverlay(marker14);

	var point15 = new BMap.Point(120.077193,30.281244);
	map.centerAndZoom(point15, 15); 
	var marker15 = new BMap.Marker(point15);   
	map.addOverlay(marker15);

	var point16 = new BMap.Point(120.050806,30.263403);
	map.centerAndZoom(point16, 15); 
	var marker16 = new BMap.Marker(point16);   
	map.addOverlay(marker16);

	var point17 = new BMap.Point(120.079151,30.278469);
	map.centerAndZoom(point17, 15); 
	var marker17 = new BMap.Marker(point17);   
	map.addOverlay(marker17);

    var point18 = new BMap.Point(120.096471,30.274523);
	map.centerAndZoom(point18, 15); 
	var marker18 = new BMap.Marker(point18);   
	map.addOverlay(marker18);

	var point19 = new BMap.Point(120.096471,30.272745);
	map.centerAndZoom(point19, 15); 
	var marker19 = new BMap.Marker(point19);   
	map.addOverlay(marker19);

	var point20 = new BMap.Point(120.09365,30.270531);
	map.centerAndZoom(point20, 15); 
	var marker20 = new BMap.Marker(point20);   
	map.addOverlay(marker20);

	var point21 = new BMap.Point(120.083167,30.268698);
	map.centerAndZoom(point21, 15); 
	var marker21 = new BMap.Marker(point21);   
	map.addOverlay(marker21);

	var point22 = new BMap.Point(120.078388,30.276972);
	map.centerAndZoom(point22, 15); 
	var marker22 = new BMap.Marker(point22);   
	map.addOverlay(marker22);

	var point23 = new BMap.Point(120.079125,30.278469);
	map.centerAndZoom(point23, 15); 
	var marker23 = new BMap.Marker(point23);   
	map.addOverlay(marker23);

	var point24 = new BMap.Point(120.064029,30.263575);
	map.centerAndZoom(point24, 15); 
	var marker24 = new BMap.Marker(point24);   
	map.addOverlay(marker24);

	var point25 = new BMap.Point(120.065125,30.263076);
	map.centerAndZoom(point25, 15); 
	var marker25 = new BMap.Marker(point25);   
	map.addOverlay(marker25);

	var point26 = new BMap.Point(120.078864,30.2802);
	map.centerAndZoom(point26, 15); 
	var marker26 = new BMap.Marker(point26);   
	map.addOverlay(marker26);
}
    });

$(init) 
function init() {
	var point1 = new BMap.Point(120.067784,30.260734);
	map.centerAndZoom(point1, 15); 
	var marker1 = new BMap.Marker(point1);  
	map.addOverlay(marker1);

	var point2 = new BMap.Point(120.096538,30.271192);
	map.centerAndZoom(point2, 15); 
	var marker2 = new BMap.Marker(point2);   
	map.addOverlay(marker2);

	var point3 = new BMap.Point(120.051972,30.270364);
	map.centerAndZoom(point3, 15); 
	var marker3 = new BMap.Marker(point3);   
	map.addOverlay(marker3);

	var point4 = new BMap.Point(120.076227,30.285839);
	map.centerAndZoom(point4, 15); 
	var marker4 = new BMap.Marker(point4);   
	map.addOverlay(marker4);

	var point5 = new BMap.Point(120.075179,30.278416);
	map.centerAndZoom(point5, 15); 
	var marker5 = new BMap.Marker(point5);   
	map.addOverlay(marker5);
}

$("body").on("click", ".part6", function() {
        // $("#p1").toggleClass("active");
        $("#results").fadeIn();
        map.clearOverlays();
        $(init) 
function init() {
	var point1 = new BMap.Point(120.067784,30.260734);
	map.centerAndZoom(point1, 15); 
	var marker1 = new BMap.Marker(point1);  
	map.addOverlay(marker1);

	var point2 = new BMap.Point(120.096538,30.271192);
	map.centerAndZoom(point2, 15); 
	var marker2 = new BMap.Marker(point2);   
	map.addOverlay(marker2);

	var point3 = new BMap.Point(120.051972,30.270364);
	map.centerAndZoom(point3, 15); 
	var marker3 = new BMap.Marker(point3);   
	map.addOverlay(marker3);

	var point4 = new BMap.Point(120.076227,30.285839);
	map.centerAndZoom(point4, 15); 
	var marker4 = new BMap.Marker(point4);   
	map.addOverlay(marker4);

	var point5 = new BMap.Point(120.075179,30.278416);
	map.centerAndZoom(point5, 15); 
	var marker5 = new BMap.Marker(point5);   
	map.addOverlay(marker5);
}
    });

$(init) 
function init() {
    var point1 = new BMap.Point(120.059618,30.255627);
	map.centerAndZoom(point1, 15); 
	var marker1 = new BMap.Marker(point1);  
	map.addOverlay(marker1);

	var point2 = new BMap.Point(120.067333,30.275844);
	map.centerAndZoom(point2, 15); 
	var marker2 = new BMap.Marker(point2);   
	map.addOverlay(marker2);

	var point3 = new BMap.Point(120.073812,30.278572);
	map.centerAndZoom(point3, 15); 
	var marker3 = new BMap.Marker(point3);   
	map.addOverlay(marker3);  

	var point4 = new BMap.Point(120.077629,30.280647);
	map.centerAndZoom(point4, 15); 
	var marker4 = new BMap.Marker(point4);   
	map.addOverlay(marker4);

	var point5 = new BMap.Point(120.075706,30.278462);
	map.centerAndZoom(point5, 15); 
	var marker5 = new BMap.Marker(point5);   
	map.addOverlay(marker5);

	var point6 = new BMap.Point(120.080954,30.274072);
	map.centerAndZoom(point6, 15); 
	var marker6 = new BMap.Marker(point6);   
	map.addOverlay(marker6);
}

$("body").on("click", ".part7", function() {
        // $("#p1").toggleClass("active");
        $("#results").fadeIn();
        map.clearOverlays();
        $(init) 
function init() {
	var point1 = new BMap.Point(120.059618,30.255627);
	map.centerAndZoom(point1, 15); 
	var marker1 = new BMap.Marker(point1);  
	map.addOverlay(marker1);

	var point2 = new BMap.Point(120.067333,30.275844);
	map.centerAndZoom(point2, 15); 
	var marker2 = new BMap.Marker(point2);   
	map.addOverlay(marker2);

	var point3 = new BMap.Point(120.073812,30.278572);
	map.centerAndZoom(point3, 15); 
	var marker3 = new BMap.Marker(point3);   
	map.addOverlay(marker3);  

	var point4 = new BMap.Point(120.077629,30.280647);
	map.centerAndZoom(point4, 15); 
	var marker4 = new BMap.Marker(point4);   
	map.addOverlay(marker4);

	var point5 = new BMap.Point(120.075706,30.278462);
	map.centerAndZoom(point5, 15); 
	var marker5 = new BMap.Marker(point5);   
	map.addOverlay(marker5);

	var point6 = new BMap.Point(120.080954,30.274072);
	map.centerAndZoom(point6, 15); 
	var marker6 = new BMap.Marker(point6);   
	map.addOverlay(marker6);
}
    });

$(init) 
function init() {
    var point1 = new BMap.Point(120.060796,30.272292);
	map.centerAndZoom(point1, 15); 
	var marker1 = new BMap.Marker(point1);  
	map.addOverlay(marker1);

	var point2 = new BMap.Point(120.052063,30.260913);
	map.centerAndZoom(point2, 15); 
	var marker2 = new BMap.Marker(point2);   
	map.addOverlay(marker2);

	var point3 = new BMap.Point(120.095245,30.270939);
	map.centerAndZoom(point3, 15); 
	var marker3 = new BMap.Marker(point3);   
	map.addOverlay(marker3);  

	var point4 = new BMap.Point(120.094346,30.270557);
	map.centerAndZoom(point4, 15); 
	var marker4 = new BMap.Marker(point4);   
	map.addOverlay(marker4);

	var point5 = new BMap.Point(120.083418,30.26832);
	map.centerAndZoom(point5, 15); 
	var marker5 = new BMap.Marker(point5);   
	map.addOverlay(marker5);
}

$("body").on("click", ".part8", function() {
        // $("#p1").toggleClass("active");
        $("#results").fadeIn();
        map.clearOverlays();
        $(init) 
function init() {
	var point1 = new BMap.Point(120.060796,30.272292);
	map.centerAndZoom(point1, 15); 
	var marker1 = new BMap.Marker(point1);  
	map.addOverlay(marker1);

	var point2 = new BMap.Point(120.052063,30.260913);
	map.centerAndZoom(point2, 15); 
	var marker2 = new BMap.Marker(point2);   
	map.addOverlay(marker2);

	var point3 = new BMap.Point(120.095245,30.270939);
	map.centerAndZoom(point3, 15); 
	var marker3 = new BMap.Marker(point3);   
	map.addOverlay(marker3);  

	var point4 = new BMap.Point(120.094346,30.270557);
	map.centerAndZoom(point4, 15); 
	var marker4 = new BMap.Marker(point4);   
	map.addOverlay(marker4);

	var point5 = new BMap.Point(120.083418,30.26832);
	map.centerAndZoom(point5, 15); 
	var marker5 = new BMap.Marker(point5);   
	map.addOverlay(marker5);
}
    });

$(init) 
function init() {
    var point1 = new BMap.Point(120.06773,30.261516);
	map.centerAndZoom(point1, 15); 
	var marker1 = new BMap.Marker(point1);  
	map.addOverlay(marker1);

	var point2 = new BMap.Point(120.06349,30.263341);
	map.centerAndZoom(point2, 15); 
	var marker2 = new BMap.Marker(point2);   
	map.addOverlay(marker2);

	var point3 = new BMap.Point(120.055316,30.26972);
	map.centerAndZoom(point3, 15); 
	var marker3 = new BMap.Marker(point3);   
	map.addOverlay(marker3);  

	var point4 = new BMap.Point(120.061442,30.268223);
	map.centerAndZoom(point4, 15); 
	var marker4 = new BMap.Marker(point4);   
	map.addOverlay(marker4);

	var point5 = new BMap.Point(120.057166,30.273463);
	map.centerAndZoom(point5, 15); 
	var marker5 = new BMap.Marker(point5);   
	map.addOverlay(marker5);

	var point6 = new BMap.Point(120.073677,30.279747);
	map.centerAndZoom(point6, 15); 
	var marker6 = new BMap.Marker(point6);   
	map.addOverlay(marker6);

	var point7 = new BMap.Point(120.075366,30.285532);
	map.centerAndZoom(point7, 15); 
	var marker7 = new BMap.Marker(point7);   
	map.addOverlay(marker7);

	var point8 = new BMap.Point(120.094859,30.281572);
	map.centerAndZoom(point8, 15); 
	var marker8 = new BMap.Marker(point8);   
	map.addOverlay(marker8);

	var point9 = new BMap.Point(120.096386,30.277283);
	map.centerAndZoom(point9, 15); 
	var marker9 = new BMap.Marker(point9);   
	map.addOverlay(marker9);

	var point10 = new BMap.Point(120.083648,30.267833);
	map.centerAndZoom(point10, 15); 
	var marker10 = new BMap.Marker(point10);   
	map.addOverlay(marker10);

	var point11 = new BMap.Point(120.077468,30.265852);
	map.centerAndZoom(point11, 15); 
	var marker11 = new BMap.Marker(point11);   
	map.addOverlay(marker11);

	var point12 = new BMap.Point(120.070641,30.270188);
	map.centerAndZoom(point12, 15); 
	var marker12 = new BMap.Marker(point12);   
	map.addOverlay(marker12);

	var point13 = new BMap.Point(120.059071,30.255886);
	map.centerAndZoom(point13, 15); 
	var marker13 = new BMap.Marker(point13);   
	map.addOverlay(marker13);

	var point14 = new BMap.Point(120.066544,30.2757);
	map.centerAndZoom(point14, 15); 
	var marker14 = new BMap.Marker(point14);   
	map.addOverlay(marker14);

	var point15 = new BMap.Point(120.07383,30.276168);
	map.centerAndZoom(point15, 15); 
	var marker15 = new BMap.Marker(point15);   
	map.addOverlay(marker15);

	var point16 = new BMap.Point(120.056214,30.283057);
	map.centerAndZoom(point16, 15); 
	var marker16 = new BMap.Marker(point16);   
	map.addOverlay(marker16);

	var point17 = new BMap.Point(120.074719,30.27779);
	map.centerAndZoom(point17, 15); 
	var marker17 = new BMap.Marker(point17);   
	map.addOverlay(marker17);
}

$("body").on("click", ".part9", function() {
        // $("#p1").toggleClass("active");
        $("#results").fadeIn();
        map.clearOverlays();
        $(init) 
function init() {
    var point1 = new BMap.Point(120.06773,30.261516);
	map.centerAndZoom(point1, 15); 
	var marker1 = new BMap.Marker(point1);  
	map.addOverlay(marker1);

	var point2 = new BMap.Point(120.06349,30.263341);
	map.centerAndZoom(point2, 15); 
	var marker2 = new BMap.Marker(point2);   
	map.addOverlay(marker2);

	var point3 = new BMap.Point(120.055316,30.26972);
	map.centerAndZoom(point3, 15); 
	var marker3 = new BMap.Marker(point3);   
	map.addOverlay(marker3);  

	var point4 = new BMap.Point(120.061442,30.268223);
	map.centerAndZoom(point4, 15); 
	var marker4 = new BMap.Marker(point4);   
	map.addOverlay(marker4);

	var point5 = new BMap.Point(120.057166,30.273463);
	map.centerAndZoom(point5, 15); 
	var marker5 = new BMap.Marker(point5);   
	map.addOverlay(marker5);

	var point6 = new BMap.Point(120.073677,30.279747);
	map.centerAndZoom(point6, 15); 
	var marker6 = new BMap.Marker(point6);   
	map.addOverlay(marker6);

	var point7 = new BMap.Point(120.075366,30.285532);
	map.centerAndZoom(point7, 15); 
	var marker7 = new BMap.Marker(point7);   
	map.addOverlay(marker7);

	var point8 = new BMap.Point(120.094859,30.281572);
	map.centerAndZoom(point8, 15); 
	var marker8 = new BMap.Marker(point8);   
	map.addOverlay(marker8);

	var point9 = new BMap.Point(120.096386,30.277283);
	map.centerAndZoom(point9, 15); 
	var marker9 = new BMap.Marker(point9);   
	map.addOverlay(marker9);

	var point10 = new BMap.Point(120.083648,30.267833);
	map.centerAndZoom(point10, 15); 
	var marker10 = new BMap.Marker(point10);   
	map.addOverlay(marker10);

	var point11 = new BMap.Point(120.077468,30.265852);
	map.centerAndZoom(point11, 15); 
	var marker11 = new BMap.Marker(point11);   
	map.addOverlay(marker11);

	var point12 = new BMap.Point(120.070641,30.270188);
	map.centerAndZoom(point12, 15); 
	var marker12 = new BMap.Marker(point12);   
	map.addOverlay(marker12);

	var point13 = new BMap.Point(120.059071,30.255886);
	map.centerAndZoom(point13, 15); 
	var marker13 = new BMap.Marker(point13);   
	map.addOverlay(marker13);

	var point14 = new BMap.Point(120.066544,30.2757);
	map.centerAndZoom(point14, 15); 
	var marker14 = new BMap.Marker(point14);   
	map.addOverlay(marker14);

	var point15 = new BMap.Point(120.07383,30.276168);
	map.centerAndZoom(point15, 15); 
	var marker15 = new BMap.Marker(point15);   
	map.addOverlay(marker15);

	var point16 = new BMap.Point(120.056214,30.283057);
	map.centerAndZoom(point16, 15); 
	var marker16 = new BMap.Marker(point16);   
	map.addOverlay(marker16);

	var point17 = new BMap.Point(120.074719,30.27779);
	map.centerAndZoom(point17, 15); 
	var marker17 = new BMap.Marker(point17);   
	map.addOverlay(marker17);
}
    });

$(init) 
function init() {

}