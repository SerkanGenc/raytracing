
import vec3 from "./vec3"
import ray from "./ray"

let color = vec3 ;


class lambertian {
    constructor(albedo) {
        this.albedo = albedo ; // diffuse coefficient
    }

    scatter(r_in, rec) {
        let scatter_direction = rec.normal.add(vec3.random_in_unit_sphere().unit());

        if (scatter_direction.near_zero()) {
            scatter_direction = rec.normal ;
        }

        let scattered = new ray(rec.p, scatter_direction) ;
        return { scattered, attenuation : this.albedo, valid: true} ;
    }

}

class metal {
    constructor(albedo, fuzz) {
        this.albedo = albedo ;
        this.fuzz = fuzz < 1 ? fuzz : 1 ;
    }

    scatter(r_in, rec) {
        let scatter_direction ;
        let  reflected = r_in.dir.reflect(rec.normal)
        reflected = reflected.unit().add( vec3.random_in_unit_sphere().unit().mulC(this.fuzz)) ;
        let scattered = new ray(rec.p, reflected)
        return { scattered, attenuation : this.albedo, valid : scattered.dir.dot(rec.normal) > 0 }
    }
}

class dielectric {
    constructor(index) {
        this.refraction_index = index ;
    }

    scatter(r_in, rec) {
        let ri = rec.front_face ? (1/this.refraction_index) : this.refraction_index ;
        let unit_direction = r_in.dir.unit()   

        let cos_theta = Math.min(unit_direction.minus().dot(rec.normal), 1)
        let sin_theta = Math.sqrt(1 - cos_theta * cos_theta) ;

        let cannot_refract = ri * sin_theta > 1 
        let direction ;

       if ( cannot_refract || this.reflectance(cos_theta, ri) > Math.random() ) {
            direction = unit_direction.reflect(rec.normal)
        } else {
            direction = unit_direction.refract(rec.normal, ri)
        }
        // direction = unit_direction.refract(rec.normal, ri)

        return { scattered : new ray(rec.p, direction), attenuation: new color(1,1,1), valid: true}
    }

    reflectance(cos, refraction_index) {
        // Schlick's approximation for reflectance
        let r0 = (1 - refraction_index) / ( 1 + refraction_index ) 
        r0 = r0 * r0 ;
        return r0 + (1 - r0) * Math.pow(1 - cos,5) ;
    }
}

export {lambertian, metal, dielectric}