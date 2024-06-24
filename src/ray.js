import vec3 from "./vec3"

class ray {
    constructor( origin, dir) {
        this.origin = origin ;
        this.dir = dir ;
    }

    at(t) { return this.origin.add(this.dir.mulC(t)) }
}

export default ray ;