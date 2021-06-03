


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

const hex = "0123456789DEEPAK".split("");

setInterval(() => {
  ctx.fillStyle = "rgba(0,0,0,.05)";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "rgba(0,255,255,1)";
  p.map((v, i) => {
    ctx.fillText(random(hex), i * 10, v);
    p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
  });
}, 1000 / 30);
