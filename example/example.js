var SGraph = new SqGraph(800, 1500, "#363636");
var scl = 100;
var pts = 0;
const key = "sqgraphtest"
var hscore = JSON.parse(localStorage.getItem(key))
var random = {x:Math.floor(Math.random() * SGraph.width), y:Math.floor(Math.random() * SGraph.height)}



SGraph.update(()=>{
    window.addEventListener('mousemove', (e)=>{
        SGraph.c.fillStyle = "#363636";
        SGraph.drawRect(0, 0, SGraph.width, SGraph.height, "fill");
        SGraph.c.strokeStyle = "white";
        SGraph.c.font = "30px Arial";
        SGraph.drawText(`High Score: ${hscore}, Points: ${pts}, Corrdinates: {x: ${e.x}, y: ${e.y}}, Destinations: {x: ${random.x}, y: ${random.y}}`, 50, 50, "stroke")
        SGraph.drawText(``, 400, 50, "stroke")
        SGraph.c.fillStyle = "white";
        SGraph.drawCircle(e.x, e.y, scl, "fill");

        if(e.x == random.x && e.y == random.y){
            pts++;
            random.x = Math.floor(Math.random() * SGraph.width)
            random.y = Math.floor(Math.random() * SGraph.height)

            if(pts > hscore){
                localStorage.setItem(key, JSON.stringify(pts))
                hscore = JSON.parse(localStorage.getItem(key))
            }else{

            }
        }else{}
    })
}, 50)