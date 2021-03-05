//loader
function Loader() {
	
	//for loader
	
	 document.getElementById("start").style.display = "none";
	 document.getElementById("loading").style.display = "block";
	  document.getElementById("loading_div_img_1").style.display = "block";
	   document.getElementById("loading_div_img_2").style.display = "none";
	    document.getElementById("loading_div_img_3").style.display = "none";

	  
	
  //for img1 to img3
 setTimeout(img2,4000);
 setTimeout(img3,8000);
  
  //for loader
    setTimeout(showPage,10000);
}

function img2(){
	 document.getElementById("start").style.display = "none";
	 document.getElementById("loading").style.display = "block";
	  document.getElementById("loading_div_img_1").style.display = "none";
	   document.getElementById("loading_div_img_2").style.display = "block";
	    document.getElementById("loading_div_img_3").style.display = "none";
	
}

function img3(){
	 document.getElementById("start").style.display = "none";
	 document.getElementById("loading").style.display = "block";
	  document.getElementById("loading_div_img_1").style.display = "none";
	   document.getElementById("loading_div_img_2").style.display = "none";
	    document.getElementById("loading_div_img_3").style.display = "block";
	
}

function showPage() {
  document.getElementById("start").style.display = "block";
	 document.getElementById("loading").style.display = "none";
	  document.getElementById("loading_div_img_1").style.display = "none";
	   document.getElementById("loading_div_img_2").style.display = "none";
	    document.getElementById("loading_div_img_3").style.display = "none";

}


/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

//nav bar



function OpenNav() {
    document.getElementById("header_right").style.marginTop = "0vh";
	 document.getElementById("header_left_table_menu_c1").style.display = "none";
	  document.getElementById("header_left_table_menu_c2").style.display = "block";
}
function CloseNav() {
    document.getElementById("header_right").style.marginTop = "100vh";
	 document.getElementById("header_left_table_menu_c1").style.display = "block";
	  document.getElementById("header_left_table_menu_c2").style.display = "none";
}

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/



//for show certificate

setTimeout(show_img_1,1000);

function show_img_1() {
document.getElementById("body_show_img_1").style.display="block";
document.getElementById("body_show_img_2").style.display="none";
document.getElementById("body_show_img_3").style.display="none";
document.getElementById("body_show_img_4").style.display="none";
document.getElementById("body_show_img_5").style.display="none";
document.getElementById("body_show_img_6").style.display="none";

setTimeout(show_img_2,1000);
}

function show_img_2(){
	
	
document.getElementById("body_show_img_1").style.display="none";
document.getElementById("body_show_img_2").style.display="block";
document.getElementById("body_show_img_3").style.display="none";
document.getElementById("body_show_img_4").style.display="none";
document.getElementById("body_show_img_5").style.display="none";
document.getElementById("body_show_img_6").style.display="none";

	setTimeout(show_img_3,1000);
}


function show_img_3(){
	
	
document.getElementById("body_show_img_1").style.display="none";
document.getElementById("body_show_img_2").style.display="none";
document.getElementById("body_show_img_3").style.display="block";
document.getElementById("body_show_img_4").style.display="none";
document.getElementById("body_show_img_5").style.display="none";
document.getElementById("body_show_img_6").style.display="none";

	setTimeout(show_img_4,1000);
}



function show_img_4(){
	
	
document.getElementById("body_show_img_1").style.display="none";
document.getElementById("body_show_img_2").style.display="none";
document.getElementById("body_show_img_3").style.display="none";
document.getElementById("body_show_img_4").style.display="block";
document.getElementById("body_show_img_5").style.display="none";
document.getElementById("body_show_img_6").style.display="none";

	setTimeout(show_img_5,1000);
}


function show_img_5(){
	
	
document.getElementById("body_show_img_1").style.display="none";
document.getElementById("body_show_img_2").style.display="none";
document.getElementById("body_show_img_3").style.display="none";
document.getElementById("body_show_img_4").style.display="none";
document.getElementById("body_show_img_5").style.display="block";
document.getElementById("body_show_img_6").style.display="none";

	setTimeout(show_img_6,1000);
}



function show_img_6(){
	
	
document.getElementById("body_show_img_1").style.display="none";
document.getElementById("body_show_img_2").style.display="none";
document.getElementById("body_show_img_3").style.display="none";
document.getElementById("body_show_img_4").style.display="none";
document.getElementById("body_show_img_5").style.display="none";
document.getElementById("body_show_img_6").style.display="block";

	setTimeout(show_img_1,1000);
}


var width=document.documentElement.clientWidth;

for(var i=1;i<=6;i++){
	
	document.getElementById("body_show_img_"+i).style.height=(width/4)+"px";
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
