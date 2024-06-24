import vec3 from "./vec3"

class hit_record {
    // p, normal, front_face, t, material
    set_face_normal(r, outward_normal) {
        this.front_face = r.dir.dot(outward_normal) < 0 ;
        this.normal = this.front_face ? outward_normal : outward_normal.minus() ; 
    }
}

export default hit_record