
var left = 0;

function sliderNext(){
	var polosa = document.getElementById('polosa');
	left = left - 400;
	if(left < -1200){
		left = 0;
	}
	polosa.style.left = left + 'px';
}


var a = 1;
function sliderPrev(){
	var polosa = document.getElementById('polosa');
	if(left == 0){
		left = -1600;
	}
	polosa.style.left = left + a*400 + 'px';
	a++;
}


/*Test functions*/

/*Функция возвращает на сколько прокручена страничка!*/
/*setTimeout(getBodyScrollTop(), 100);

function getBodyScrollTop()
{
return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}*/

window.onload=function(){
		Show_main_text();	/* ваш код */
		
}

		var target = $('#service_row');
		var targetPos = target.offset().top;
		var winHeight = $(window).height();
		var scrollToElem = targetPos - winHeight + 2500;
		$(window).scroll(function(){
  	var winScrollTop = $(this).scrollTop();
  	if(winScrollTop > (scrollToElem * 1)){
   	//сработает когда пользователь доскроллит к элементу с классом .elem
  	Show_services();
  }
});
function Show_main_text(){
	var captions = document.getElementById("main_text");
	captions.style.opacity = 1;

}

function Show_text(){
	var text_1 = document.getElementById("block_1"),
			text_2 = document.getElementById("block_2"),
			text_3 = document.getElementById("block_3");
	text_1.style.opacity = 1;
	text_2.style.opacity = 1;
	text_3.style.opacity = 1;
	text_1.style.marginTop = '0';
	text_2.style.marginTop = '0';
	text_3.style.marginTop = '0';
}
function Show_services(){
	var elem_1 = document.getElementById("animation_left"),
			elem_2 = document.getElementById("animation_right");
	elem_1.style.marginLeft = 0;
	elem_2.style.marginLeft = 0;		
}

/*function ControllValueScroll(){
	if(getBodyScrollTop() == 1000){
		Show_text();
	}else{
		ControllValueScroll();
	}
}*/
var target = $('#about');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight+350;
$(window).scroll(function(){
  var winScrollTop = $(this).scrollTop();
  if(winScrollTop > (scrollToElem * 1)){
   	//сработает когда пользователь доскроллит к элементу с классом .elem
  	Show_text();
  }
});
