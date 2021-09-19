console.log("License : Copyright (C) - All Rights Reserved | Unauthorized copying of this file, via any medium is strictly prohibited | "+
" Proprietary and Confidential ");

var xyz=0;

function text_to_speech(){

if(window.SpeechSynthesisUtterance||window.webkitSpeechRecognition||window.SpeechRecognition){

	var data=document.getElementById("body").innerText;
	 var speaker_img=document.getElementById("speaker_img");
	 speaker_img.innerHTML="&#128266;";
	 
	 var synth = window.speechSynthesis;
	 	 
	 var speech_x=new SpeechSynthesisUtterance(data);
	 if(xyz==0){
		synth.speak(speech_x);
		xyz=1;
	 }
	 else{

		synth.cancel();
		xyz=0;
			 speaker_img.innerHTML="&#128264;";
	 }
	 
	}
	
	/////////////////////////////////
	
	
	else{
	alert("Your Browser Not Support JS Speech Synthesis");
		
	}
	
}

/*/////////////////////////////////////////*************************////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
	var profile_emoji=document.getElementById("image_emoji");
	var profile_image=document.getElementById("image_img");
	profile_emoji.style.display="none";
function smile(){
		
		if(profile_emoji.style.display=="none"){
	profile_image.style.display="none";
	profile_emoji.style.display="inline";
	setTimeout(auto_smile,1000);
		}
		
		else if(profile_emoji.style.display=="inline"){
			profile_image.style.display="inline";
	profile_emoji.style.display="none";
		}
	
}


function auto_smile(){
	profile_image.style.display="inline";
	profile_emoji.style.display="none";
	
}