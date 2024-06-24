class vec3 {
    constructor(x=0, y=0, z=0) {
       this.e = [x, y , z] ;
    }

    get x() { return this.e[0] }
    get y() { return this.e[1] }
    get z() { return this.e[2] }

    minus() { return new vec3(-this.e[0], -this.e[1], -this.e[2])}
    at(idx) { return this.e[idx]} ;
    set(idx, val) { this.e[idx] = val; return this ; }
    addTo(v) { 
        this.e[0] += v.e[0] ;
        this.e[1] += v.e[1] ;
        this.e[2] += v.e[2] ;
        return this ;
    }
    mulTo(t) {
        this.e[0] *= t;
        this.e[1] *= t ;
        this.e[2] *= t ;
        return this ;
    }
    divTo(t) {
        return this.mulTo(1/t) ;
    }
    length() { return Math.sqrt(this.length_squared())}
    length_squared() { return this.e[0] ** 2 + this.e[1] ** 2 + this.e[2] ** 2}

    add(v) {
        return new vec3(this.e[0] + v.e[0], this.e[1] + v.e[1], this.e[2] + v.e[2])
    }
    sub(v) {
        return new vec3(this.e[0] - v.e[0], this.e[1] - v.e[1], this.e[2] - v.e[2])
    }
    mul(v) {
        return new vec3(this.e[0] * v.e[0], this.e[1] * v.e[1], this.e[2] * v.e[2])
    }

    mulC(t) {
        return new vec3(this.e[0] * t, this.e[1] * t, this.e[2] * t) ;
    }
    
    divC(t) {
        return new vec3(this.e[0] / t, this.e[1] / t, this.e[2] / t) ;
    }

    dot(v) {
        return this.e[0] * v.e[0] + this.e[1] * v.e[1] +this.e[2] * v.e[2] ;
    }

    cross(v) {
        return new vec3(
            this.e[1] * v.e[2] - this.e[2] * v.e[1],
            this.e[2] * v.e[0] - this.e[0] * v.e[2],
            this.e[0] * v.e[1] - this.e[1] * v.e[0]

        ) ;
    }

    unit(){
        return this.divC(this.length()) ;
    }

    static random(min, max) {
        function rnd(min, max) {
            return min + Math.random() * (max-min) ;
        }
        return new vec3(rnd(min, max), rnd(min,max), rnd(min, max))
    }

    static random_in_unit_sphere() {
        while (true) {
            let p = vec3.random(-1, 1) ;
            if ( p.length_squared() < 1) return p ;
        }
    }

    static random_in_unit_disk(){
        while (true) {
            let p = this.random(-1,1) ;
            p.e[2] = 0 ;
            if ( p.length_squared() < 1) return p ;
        }
    }

    static random_on_hemisphere(normal) {
      let on_unit_sphere = vec3.random_in_unit_sphere().unit() ;
      if ( on_unit_sphere.dot(normal) > 0) {
        return on_unit_sphere ; 
      } 
      return on_unit_sphere.minus() ;
    }   

    near_zero() {
        let s = 1e-8 ;
        return (Math.abs(this.e[0]) < s) && (Math.abs(this.e[1]) < s) && (Math.abs(this.e[2]) < s) ;
    }

    // reflection around Normal
    reflect(n) {
        return this.sub(n.mulC(2 * this.dot(n))) ; 
    }

    refract(n, etai_over_etat) {
        let cos_theta = Math.min(this.minus().dot(n), 1) ;
        let r_out_perp = this.add(n.mulC(cos_theta)).mulC(etai_over_etat) ;
        let r_out_parallel = n.mulC(-Math.sqrt(Math.abs(1 - r_out_perp.length_squared())))
        return r_out_parallel.add(r_out_perp) ;
    }
    
}

export default vec3 ;