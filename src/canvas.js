class canvas {
    constructor(id) {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext("2d") ;
    }

    createImage(w,h) {
        return this.ctx.createImageData(w,h) ;
    }

    drawImage(src) {
        this.ctx.putImageData(src.img,0,0) ;
    }
}

export default canvas ;