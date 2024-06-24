import canvas from "./canvas"
import vec3 from "vec3" ;
import {interval_one} from "./interval"

class framebuffer {
    constructor(img) {
        this.img = img ;
        this.width = img.width ;
        this.height = img.height ;
    }

    linear_to_gamma(x) {
        if (x > 0) return Math.sqrt(x) ;
        return 0 ;
    }

    set(p, c) {
        let idx = this.width*4*p.y + p.x * 4 ;
        
        // to gamma 2 transformation
        let r = this.linear_to_gamma(c.x) ;
        let g = this.linear_to_gamma(c.y) ;
        let b = this.linear_to_gamma(c.z) ;

        this.img.data[idx] = Math.floor( interval_one.clamp(r) * 256);
        this.img.data[idx+1] = Math.floor(interval_one.clamp(g) * 256);
        this.img.data[idx+2] = Math.floor(interval_one.clamp(b) * 256);
        this.img.data[idx+3] = 255 ;
    }
}

export default framebuffer ;