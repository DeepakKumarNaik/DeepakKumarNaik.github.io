
var theme_color=document.getElementById('theme-color');
    var x_t_c=0;
	var y_t_c=0;
	var z_t_c=0;
function change_theme_color(){
	if(x_t_c>255){
		x_t_c=0;
	}
	if(y_t_c>255){
		y_t_c=0;
	}
	if(z_t_c>255){
		z_t_c=0;
	}

	x_t_c=x_t_c+5;
	y_t_c=y_t_c+2;
	z_t_c=z_t_c+1;
	
theme_color.setAttribute("content","rgba("+x_t_c+","+y_t_c+","+z_t_c+",1)");

}

setInterval(change_theme_color, 100);







/*Animation BG*/

const s = window.screen;
const w = (q.width = s.width);
const h = (q.height = s.height);
const ctx = q.getContext("2d");

const p = Array(Math.floor(w / 10) + 1).fill(0);

const random = (items) => items[Math.floor(Math.random() * items.length)];

const hex = "000DEEPAK00KUMAR00NAIK000".split("");
var bg_r=0;
var bg_g=255;
var bg_b=255;
setInterval(() => {
  ctx.fillStyle = "rgba(0,0,0,.05)";
  
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "rgba("+bg_r+","+bg_g+","+bg_b+",1)";
  bg_r=bg_r+0;
    bg_g=bg_g+255;
	  bg_b=bg_b+255;
	  if(bg_r>255){
		  bg_r=0;
	  }
	  if(bg_g>255){
		 bg_g=255; 
	  }
	 if(bg_b>255){
		 bg_b=0;
	 }
  p.map((v, i) => {
    ctx.fillText(random(hex), i * 10, v);
    p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
  });
}, 1000 / 30);
