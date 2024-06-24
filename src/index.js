import vec3 from "./vec3" ;
import canvas from "./canvas" ;
import framebuffer from "./framebuffer" ;
import sphere from "./sphere"
import hittable_list from "./hittable_list"
import camera from "./camera"
import * as material from "./material"
let color = vec3 


let cam = new camera(16/9, 800) ;
cam.sample_per_pixel = 20 
cam.max_depth = 20

cam.lookfrom = new vec3(13, 2, 3)
cam.lookat = new vec3(0, 0, 0)
cam.vup = new vec3(0,1,0)
cam.vfov = 20 ;

cam.defocus_angle = 0.6 ;
cam.focus_dist = 10

let rtCanvas = new canvas("canvas") ;
let rawImg = rtCanvas.createImage(cam.image_width, cam.image_height) ;
const img = new framebuffer(rawImg) ;

// SCENE

let world = new hittable_list() ;
// World Objects
let ground_material = new material.lambertian(new color(0.5, 0.5, 0.5))
world.add(new sphere(new vec3(0, -1000, 0), 1000, ground_material)) 

for (let a = -11; a < 11; a++) {
    for (let b = -11; b < 11 ; b++) {
        let choose_mat = Math.random()
        let center = new vec3(a + 0.9 * Math.random(), 0.2 , b + 0.9 * Math.random())
        if ((center.sub(new vec3(4, 0.2, 0)).length() > 0.9)){
            let sphere_material;
            if (choose_mat < 0.8){
                // diffuse
                let albedo = vec3.random(0, 1).mul(vec3.random(0,1))
                sphere_material = new material.lambertian(albedo)
            } else if ( choose_mat < 0.95) {
                // metal
                let albedo = vec3.random(0.5, 1)
                let fuzz = Math.random() * 0.5 ;
                sphere_material = new material.metal(albedo, fuzz)
            } else {
                // glass
                sphere_material = new material.dielectric(1.5)
                
            }
            world.add(new sphere(center, 0.2, sphere_material))
        }
    }
}

let material1 = new material.dielectric(1.5)
world.add(new sphere(new vec3(0, 1, 0), 1, material1))

let material2 = new material.lambertian(new color(0.4, 0.2, 0.1))
world.add(new sphere(new vec3(-4, 1, 0), 1, material2))

let material3 = new material.metal(new color(0.7, 0.6, 0.5), 0)
world.add(new sphere(new vec3(4, 1, 0), 1, material3))





cam.render(world, img) ;  

rtCanvas.drawImage(img) ;

