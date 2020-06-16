var img=["1.jpg","2.jpg","3.jpg"];
var para=document.getElementsByClassName('pa');
var i;
for(i=0;i<img.length;i++)
	para[i].style.backgroundImage="url("+img[i]+")";

window.addEventListener("scroll",function(){
	if(window.scrollY>545){
		document.getElementsByTagName("nav")[0].classList.add('fix');
	}
	else
		document.getElementsByTagName("nav")[0].classList.remove('fix');
		
});

