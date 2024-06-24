import vec3 from "./vec3"
import ray from "./ray"
import hit_record from "./hit_record"

class sphere {
    constructor(center, radius, material) {
        this.center = center ;
        this.radius = radius ;
        this.material = material ;
    }

    hit(r, range, rec) {
        let oc = this.center.sub(r.origin)
        let a = r.dir.length_squared() ;
        let h = r.dir.dot(oc) 
        let c = oc.length_squared() - this.radius * this.radius
        let discriminant = h*h - a*c ;

        if (discriminant < 0) return false ; // no hit
        let sqrtd = Math.sqrt(discriminant) ;
        
        // find the nearest root 
        let root = (h - sqrtd)/a ;  // t1
        if (root <= range.min || root >= range.max) {
            root = (h + sqrtd) / a ;  // t2
            if (root <= range.min || root >= range.max) {
             return false ; // hit but out of range
            }
        }

        rec = new hit_record() ;
        rec.t = root
        rec.p = r.at(root)
        let outward_normal = rec.p.sub(this.center).divC(this.radius)
        rec.set_face_normal(r, outward_normal) ;
        rec.material = this.material ;
        return rec ;
    
    }
}

export default sphere ;