import vec3 from "./vec3" ;
import canvas from "./canvas" ;
import framebuffer from "./framebuffer" ;
import sphere from "./sphere"
import hittable_list from "./hittable_list"
import camera from "./camera"
import * as material from "./material"
let color = vec3 


let cam = new camera(4/3, 600) ;
cam.lookfrom = new vec3(-2, 2, 1)
cam.lookat = new vec3(0, 0, -1)
cam.vup = new vec3(0,1,0)
cam.vfov = 25 ;

let rtCanvas = new canvas("canvas") ;
let rawImg = rtCanvas.createImage(cam.image_width, cam.image_height) ;
const img = new framebuffer(rawImg) ;

// World Objects
let material_ground = new material.lambertian(new color(0.8, 0.8, 0.0))
let material_center = new material.lambertian(new color(0.1, 0.2, 0.5))
let material_left = new material.dielectric(1.5)
let material_bubble = new material.dielectric(1.0 / 1.5)
let material_right = new material.metal(new color(0.8, 0.8, 0.8), 0.1)


let world = new hittable_list() ;
world.add( new sphere(new vec3(0,-100.5,-1), 100, material_ground))
world.add( new sphere(new vec3(0,0,-1.2), 0.5, material_center))
world.add( new sphere(new vec3(  -1, 0,-1), 0.5, material_left))
world.add( new sphere(new vec3(  -1, 0,-1), 0.4, material_bubble))
world.add( new sphere(new vec3(  1, 0,-1), 0.5, material_right)) 


cam.render(world, img) ;  

rtCanvas.drawImage(img) ;

