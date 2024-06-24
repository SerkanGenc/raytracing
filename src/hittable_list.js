import interval from "./interval"

class hittable_list {
    constructor() {
        this.objects = [] ;
    }

    clear() {
        this.objects = [] ;
    }

    add(o) {
        this.objects.push(o) ;
    }

    hit(r, ray_int) {
        let closest_so_far = new interval(ray_int.min, ray_int.max) ;
        let temp_rec = false ;
        let rec  = false ;
        for( let o of this.objects) {
            if ( temp_rec = o.hit(r, closest_so_far)) {
                closest_so_far.max = temp_rec.t
                rec = temp_rec ;
            }
        }
        return rec ;
    }
}

export default hittable_list