/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-23 15:19:16
 * @version $Id$
 */
$(document).ready(function() {
	$(".ui-head tr td:eq(0)").css("background-color","#fff265");
	$("#ui-content2").hide();
	$("#ui-content3").hide();
	$("#ui-content4").hide();
	$(".ui-head tr td:eq(0)").click(function(){
		$(".ui-head tr td:eq(0)").css("background-color","#fff265");
		$(".ui-head tr td:eq(1)").css("background-color","white");
		$(".ui-head tr td:eq(2)").css("background-color","white");
		$(".ui-head tr td:eq(3)").css("background-color","white");
		$("#ui-content1").show();
		$("#ui-content2").hide();
		$("#ui-content3").hide();
		$("#ui-content4").hide();
	});
	$(".ui-head tr td:eq(1)").click(function(){
		$(".ui-head tr td:eq(1)").css("background-color","#fff265");
		$(".ui-head tr td:eq(0)").css("background-color","white");
		$(".ui-head tr td:eq(2)").css("background-color","white");
		$(".ui-head tr td:eq(3)").css("background-color","white");
		$("#ui-content2").show();
		$("#ui-content1").hide();
		$("#ui-content3").hide();
		$("#ui-content4").hide();
	});
	$(".ui-head tr td:eq(2)").click(function(){
		$(".ui-head tr td:eq(2)").css("background-color","#fff265");
		$(".ui-head tr td:eq(1)").css("background-color","white");
		$(".ui-head tr td:eq(0)").css("background-color","white");
		$(".ui-head tr td:eq(3)").css("background-color","white");
		$("#ui-content3").show();
		$("#ui-content2").hide();
		$("#ui-content1").hide();
		$("#ui-content4").hide();
	});
	$(".ui-head tr td:eq(3)").click(function(){

		$(".ui-head tr td:eq(3)").css("background-color","#fff265");
		$(".ui-head tr td:eq(2)").css("background-color","white");
		$(".ui-head tr td:eq(1)").css("background-color","white");
		$(".ui-head tr td:eq(0)").css("background-color","white");
		$("#ui-content4").show();
		$("#ui-content2").hide();
		$("#ui-content1").hide();
		$("#ui-content3").hide();
	});
});
