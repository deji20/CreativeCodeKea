let clicked = false;

window.onload = function(){
    console.log("hello world");
    const app = document.getElementById("app");
    const ctx = app.getContext("2d");

    let drawer = new shapes("green", ctx);
    draw(drawer);

    app.onmousedown = () => clicked = true;
    app.onmouseup = () => clicked = false;


    document.onkeypress = ({key}) => {
        if ("wasd".includes(key.toLowerCase()))
        {
            draw(drawer);
        };
    }
}

function draw(drawer){
    drawer.drawScore(10);
}

class shapes{

    constructor(color, context){
        this.color = color;
        this.ctx = context;
        this.height = context.canvas.height;
        this.width = context.canvas.width;

        this.score = 0;
    }

    drawCircle(e){
        if(clicked){
            ctx.beginPath();
            this.ctx.arc(e.clientX, e.clientY, 1, 0, 2 * Math.PI);
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }
    }

    drawLines(e){
        if(clicked){
            this.ctx.beginPath();
            this.ctx.moveTo(0,0)
            this.ctx.lineTo(e.clientX, e.clientY);
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }
    }

    drawTriangle(e){
        if(clicked){
            this.ctx.beginPath();
            this.ctx.strokeStyle = "green";
            this.ctx.fillStyle = "blue";
            this.ctx.moveTo(width/2, 10);
            this.ctx.lineTo(width/2 + 50, 60);
            this.ctx.lineTo(width/2 + 20, 60);
            this.ctx.lineWidth = 1;
            this.ctx.fill();
        }
    }

    drawText(score){
    }

    drawScore(points){
        this.clean();
        this.score += points;
        this.ctx.font = "20px Arial";
        this.ctx.fillText(`Score: ${this.score}`, this.width / 4, 50);
    }

    clean(){
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
}