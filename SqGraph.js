class SqGraph{
    constructor (h, w, bgcolor){
        this.width = w;
        this.height = h;

        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        document.body.appendChild(this.canvas)

        this.c = this.canvas.getContext("2d");
        this.c.fillStyle = bgcolor;
        this.c.fillRect(0, 0, w, h)

        this.drawRect = (x, y, width, height, type) =>{
            if(type.toUpperCase() == "FILL"){
                this.c.fillRect(x, y, width, height);
            }if(type.toUpperCase() == "STROKE"){
                this.c.strokeRect(x, y, width, height);
            }else{
                this.c.strokeRect(x, y, width, height);
                this.c.fillRect(x, y, width, height);
            }
        }
        this.drawCircle = (x,y,size,type)=>{
            this.c.beginPath();
            this.c.arc(x,y,size,0,2*Math.PI);
            var i = type.toUpperCase();
            if(i == "STROKE"){
                this.c.stroke();
            }if(i == "FILL"){
                this.c.fill();
            }else{
                this.c.stroke();
                this.c.fill();
            }
        }
        this.drawImg = (img, x, y)=>{
            this.c.drawImage(img, x, y)
        }
        this.drawText = (text, x, y, type) =>{
            if(type.toUpperCase() == "FILL"){
                this.c.fillText(text, x, y);
            }if(type.toUpperCase() == "STROKE"){
                this.c.strokeText(text, x, y);
            }else{
                this.c.strokeText(text, x, y);
                this.c.fillText(text, x, y);
            }
        }


        this.update = (callback, ms) =>{
            setInterval(callback, ms)
        }
    }
}