import vec3 from "./vec3"
import ray from "./ray"
import interval from "./interval"


var color = vec3 ;


class camera {
    constructor(aspect, width) {
        this.aspect = aspect ;
        this.image_width = width ;
        let image_height = Math.floor(width / aspect) ;
        this.image_height = (image_height < 1 ) ? 1 : image_height ;
        this.center = new vec3(0,0,0)
        this.sample_per_pixel = 100 ;
        this.max_depth = 10 ;

        this.vfov = 90 ;
        this.lookfrom = new vec3(0,0,0)
        this.lookat = new vec3(0,0,-1)
        this.vup = new vec3(0,1,0)

        this.defocus_angle = 5 ;
        this.focus_dist = 3.4 ;
    }

    initialize() {
        this.center = this.lookfrom ;
        // let focal_length = this.lookfrom.sub(this.lookat).length() ; 
        let theta = this.vfov * Math.PI / 180 ;  // degree to radian
        let h = Math.tan(theta / 2)
        // let viewport_height = 2 * h * focal_length ;
        let viewport_height = 2 * h * this.focus_dist ;
        let viewport_width = viewport_height * (this.image_width/this.image_height)

        // calculate u,v,w unit basis vectors for the camera coordinate frame
        let w = this.lookfrom.sub(this.lookat).unit()
        let u = this.vup.cross(w).unit() 
        let v = w.cross(u)
        
        // Calculate the vectors across the horizontal and down the vertical viewport edges
        let viewport_u = u.mulC(viewport_width)
        let viewport_v = v.minus().mulC(viewport_height)

       
       

        this.pixel_delta_u = viewport_u.divC(this.image_width)
        this.pixel_delta_v = viewport_v.divC(this.image_height)

        // Calculate the location of the upper left pixel
        let viewport_upper_left = this.center.sub(w.mulC(this.focus_dist)).sub(viewport_u.mulC(0.5)).sub(viewport_v.mulC(0.5))
        this.pixel00_loc = viewport_upper_left.add( this.pixel_delta_u.add(this.pixel_delta_v).mulC(0.5)) 

        let defocus_radius = this.focus_dist * Math.tan( (this.defocus_angle/2) * Math.PI/180) // radius of sample disk (circle)
        this.defocus_disk_u = u.mulC(defocus_radius)
        this.defocus_disk_v = v.mulC(defocus_radius)


        // sampling
        this.sample_scale = 1 / this.sample_per_pixel ;
    }
    
    render(world, toImage) {
        this.initialize() ;
        for (let j = 0 ; j < this.image_height; j++) {
            for (let i = 0; i < this.image_width; i++){
                let pixel_color = new color(0,0,0) ;
                for ( let k = 0 ; k < this.sample_per_pixel; k++) {
                    let r = this.get_ray(i,j) ;
                    pixel_color.addTo(this.ray_color(r, this.max_depth, world)) ;
                }
                toImage.set(new vec3(i,j), pixel_color.mulC(this.sample_scale))
            }
        }
    }

    // returns a random ray for the pixel (i,j)
    get_ray(i, j) {
       let offset = this.sample_square() ;
       let pixel_sample = this.pixel00_loc.add(this.pixel_delta_u.mulC(i + offset.x)).add(this.pixel_delta_v.mulC(j + offset.y))
       let ray_origin = this.defocus_angle <=0 ? this.center : this.defocus_disk_sample() ;
       let ray_direction = pixel_sample.sub(ray_origin)
       return new ray(ray_origin, ray_direction)
    }

    sample_square() {
        return new vec3(Math.random() - 0.5, Math.random() - 0.5, 0) ;
    }

    defocus_disk_sample() {
        let p = vec3.random_in_unit_disk() ;
        return this.center.add( this.defocus_disk_u.mulC(p.e[0]).add(this.defocus_disk_v.mulC(p.e[1]))) ;
    }

    ray_color(r, depth, world) {
        let rec ;
        if ( depth <= 0) return new color(0,0,0) ;

        if ( rec = world.hit(r, new interval(0.001, Infinity))) {
            // let direction = vec3.random_on_hemisphere(rec.normal) ;
            // let direction = rec.normal.add(vec3.random_in_unit_sphere().unit());
            // return rec.normal.add(new vec3(1,1,1)).mulC(0.5) ;
            let res = rec.material.scatter(r, rec);
            if ( res.valid ) {
                return res.attenuation.mul(this.ray_color(res.scattered, depth - 1, world))
            }
            return new color(0, 0, 0)
           // return this.ray_color(new ray(rec.p, direction), depth-1, world).mulC(0.5) ;
        }
    
        // background (skybox)
        let white = new color(1,1,1) ;
        let green = new color(0.5, 0.7, 1.0)
        let unit_direction = r.dir.unit()
        let a = 0.5*(unit_direction.y + 1)
        return white.mulC(1-a).add( green.mulC(a) ) 

//         return white ;
        
    }
}

export default camera 