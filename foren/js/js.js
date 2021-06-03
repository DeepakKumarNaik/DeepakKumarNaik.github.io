


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


function interactive() {
  'use strict';
  window.addEventListener('load', function () {
    var canvas = document.getElementById('canvas');

    if (!canvas || !canvas.getContext) {
      return false;
    }

    /********************
      Random Number
    ********************/

    function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /********************
      Var
    ********************/

    var ctx = canvas.getContext('2d');
    var X = canvas.width = window.innerWidth;
    var Y = canvas.height = window.innerHeight;
    var mouseX = null;
    var mouseY = null;
    var dist = 80;
    var lessThan = Math.sqrt(dist * dist + dist * dist);
    var mouseDist = 150;
    var shapeNum;
    var shapes = [];
    var ease = 0.3;
    var friction = 0.9;
    var lineWidth = 5;
    X > Y ? shapeNum = X / dist : shapeNum = Y / dist;

    if (X < 768) {
      lineWidth = 2;
      dist = 40;
      lessThan = Math.sqrt(dist * dist + dist * dist);
      mouseDist = 50;
      X > Y ? shapeNum = X / dist : shapeNum = Y / dist;
    }

    /********************
      Animation
    ********************/

    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(cb) {
        setTimeout(cb, 17);
      };

    /********************
      Shape
    ********************/
    
    function Shape(ctx, x, y, i) {
      this.ctx = ctx;
      this.init(x, y, i);
    }
    
    Shape.prototype.init = function(x, y, i) {
      this.x = x;
      this.y = y;
      this.xi = x;
      this.yi = y;
      this.i = i;
      this.r = 1;
      this.v = {
        x: 0,
        y: 0
      };
      this.c = rand(0, 360);
    };

    Shape.prototype.draw = function() {
      var ctx  = this.ctx;
      ctx.save();
      ctx.fillStyle = 'hsl(' + this.c + ', ' + '80%, 60%)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.restore();
    };

    Shape.prototype.mouseDist = function() {
      var x = mouseX - this.x;
      var y = mouseY - this.y;
      var d = x * x + y * y;
      var dist = Math.sqrt(d);
      if (dist < mouseDist) {
        this.v.x = +this.v.x;
        this.v.y = +this.v.y;
        var colAngle = Math.atan2(mouseY - this.y, mouseX - this.x);
        this.v.x = -Math.cos(colAngle) * 5;
        this.v.y = -Math.sin(colAngle) * 5;
        this.x += this.v.x;
        this.y += this.v.y;
      } else if (dist > mouseDist && dist < mouseDist + 10) {
        this.v.x = 0;
        this.v.y = 0;
      } else {
        this.v.x += (this.xi - this.x) * ease;
        this.v.y += (this.yi - this.y) * ease;
        this.v.x *= friction;
        this.v.y *= friction;
        this.x += this.v.x;
        this.y += this.v.y;
      }
    };

    Shape.prototype.drawLine = function(i) {
      var j = i;
      for (var i = 0; i < shapes.length; i++) {
        if (j !== i) {
          var x = this.x - shapes[i].x;
          var y = this.y - shapes[i].y;
          var d = x * x + y * y;
          var dist = Math.floor(Math.sqrt(d));
          if (dist <= lessThan) {
            ctx.save();
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = 'hsl(' + this.c + ', ' + '80%, 60%)';
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(shapes[i].x, shapes[i].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    Shape.prototype.render = function(i) {
      this.drawLine(i);
      if (mouseX !== null) this.mouseDist();
      this.draw();
    };
    
    for (var i = 0; i < shapeNum + 1; i++) {
      for (var j = 0; j < shapeNum + 1; j++) {
        if (j * dist - dist > Y) break;
        var s = new Shape(ctx, i * dist, j * dist, i, j);
        shapes.push(s);
      }
    }
   
    /********************
      Render
    ********************/
    
    function render() {
      ctx.clearRect(0, 0, X, Y);
      for (var i = 0; i < shapes.length; i++) {
        shapes[i].render(i);
      }
      requestAnimationFrame(render);
    }

    render();

    /********************
      Event
    ********************/
    
    function onResize() {
      X = canvas.width = window.innerWidth;
      Y = canvas.height = window.innerHeight;
      shapes = [];
      if (X < 768) {
        lineWidth = 2;
        dist = 40;
        lessThan = Math.sqrt(dist * dist + dist * dist);
        mouseDist = 50;
        X > Y ? shapeNum = X / dist : shapeNum = Y / dist;
      } else {
        lineWidth = 5;
        dist = 80;
        lessThan = Math.sqrt(dist * dist + dist * dist);
        mouseDist = 150;
        X > Y ? shapeNum = X / dist : shapeNum = Y / dist;
      }
      for (var i = 0; i < shapeNum + 1; i++) {
        for (var j = 0; j < shapeNum + 1; j++) {
          if (j * dist - dist > Y) break;
          var s = new Shape(ctx, i * dist, j * dist, i, j);
          shapes.push(s);
        }
      }
    }

    window.addEventListener('resize', function() {
      onResize();
    });

    window.addEventListener('mousemove', function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, false);

    canvas.addEventListener('touchmove', function(e) {
      var touch = e.targetTouches[0];
      mouseX = touch.pageX;
      mouseY = touch.pageY;
    });

  });
 
 
 
}




/*Flower*/




function flower() {
  'use strict';
  window.addEventListener('load', function() {
    var canvas = document.getElementById('canvas');

    if (!canvas || !canvas.getContext) {
      return false;
    }

    /********************
      Random Number
    ********************/

    function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /********************
      Var
    ********************/

    // canvas 
    var ctx = canvas.getContext('2d');
    var X = canvas.width = window.innerWidth;
    var Y = canvas.height = window.innerHeight;
    var mouseX = X / 2;
    var mouseY = Y / 2;

    /********************
      Animation
    ********************/

    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(cb) {
        setTimeout(cb, 17);
      };

    /********************
      flowers
    ********************/
    
    var maxRadius = 30;
    var flowerNumX = X / (maxRadius * 4) + 1;
    var flowerNumY = Y / (maxRadius * 4) + 1;
    var flowers = [];

    function Flower(ctx, x, y) {
      this.ctx = ctx;
      this.init(x, y);
    }
    Flower.prototype.init = function(x, y) {
      this.x = x;
      this.y = y;
      this.a = 0;
      this.rad = this.a * Math.PI / 180;
      this.dist = 0;
      this.r = maxRadius / 2;
      this.c = {
        r: rand(0, 255),
        g: rand(0, 255),
        b: rand(0, 255)
      };
      this.flg = false;
    };
    Flower.prototype.draw = function() {
      var ctx = this.ctx;
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = 'rgb(' + this.c.r + ', ' + this.c.g + ', ' + this.c.b + ')';
      ctx.globalAlpha = 0.5;
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rad);
      ctx.translate(-this.x, -this.y);
      for (var i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.arc(Math.cos(60 * Math.PI / 180 * i) * this.dist + this.x, Math.sin(60 * Math.PI / 180 * i) * this.dist + this.y, this.r, 0, Math.PI * 2, false);
        ctx.fill();
      }
      ctx.restore();
    }
    Flower.prototype.updateParams = function() {
      if (this.flg === false) {
        this.r += maxRadius * 0.01 * 0.25;
        this.dist += maxRadius * 0.005;
        this.a += maxRadius * 0.005;
      }
      if (this.flg === true) {
        this.r -= maxRadius * 0.01 * 0.25;
        this.dist -= maxRadius * 0.005;
        this.a -= maxRadius * 0.005;
      }
      if (this.dist < 0) {
        this.changeColor();
      }
      this.rad = this.a * Math.PI / 180;
    };
    Flower.prototype.changeColor = function() {
      this.c = {
        r: rand(0, 255),
        g: rand(0, 255),
        b: rand(0, 255)
      };
    };
    Flower.prototype.render = function() {
      this.updateParams();
      this.turning();
      this.draw();
    };
    Flower.prototype.turning = function() {
      if (this.dist > maxRadius) this.flg = true;
      if (this.dist < 0) this.flg = false; 
    };

    for (var i = 0; i < flowerNumX; i++) {
      for (var j = 0; j < flowerNumY; j++) {
        var flower = new Flower(ctx, maxRadius * 4 * i, maxRadius * 4 * j);
        flowers.push(flower);
      } 
    }

    /********************
      Render
    ********************/
    
    function render(){
      ctx.clearRect(0, 0, X, Y);
      for (var i = 0; i < flowers.length; i ++) {
        flowers[i].render();
      }
      requestAnimationFrame(render);
    }

    render();

    /********************
      Event
    ********************/
    
    // resize
    function onResize() {
      X = canvas.width = window.innerWidth;
      Y = canvas.height = window.innerHeight;
      mouseX = X / 2;
      mouseY = Y / 2;
      flowerNumX = X / (maxRadius * 4) + 1;
      flowerNumY = Y / (maxRadius * 4) + 1;
      flowers = [];
      for (var i = 0; i < flowerNumX; i++) {
        for (var j = 0; j < flowerNumY; j++) {
          var flower = new Flower(ctx, maxRadius * 4 * i, maxRadius * 4 * j);
          flowers.push(flower);
        } 
      }
    }
    window.addEventListener('resize', function() {
      onResize();
    });

  });
  
  
}

flower();
