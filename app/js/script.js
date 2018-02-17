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
setTimeout(getBodyScrollTop(), 100);

function getBodyScrollTop()
{
return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}

function Show_text(){
	var text_1 = document.getElementById("block_1"),
			text_2 = document.getElementById("block_2"),
			text_3 = document.getElementById("block_3");
	text_1.style.opacity = 1;
	text_2.style.opacity = 1;
	text_3.style.opacity = 1;
}
function ControllValueScroll(){
	if(getBodyScrollTop() == 1000){
		Show_text();
	}else{
		ControllValueScroll();
	}
}

