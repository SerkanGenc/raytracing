/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/vec3/index.js":
/*!************************************!*\
  !*** ./node_modules/vec3/index.js ***!
  \************************************/
/***/ ((module) => {

eval("const re = /\\((-?[.\\d]+), (-?[.\\d]+), (-?[.\\d]+)\\)/\n\nclass Vec3 {\n  constructor (x, y, z) {\n    this.x = x\n    this.y = y\n    this.z = z\n  }\n\n  isZero () {\n    return this.x === 0 && this.y === 0 && this.z === 0\n  }\n\n  at (id) {\n    return this.toArray()[id]\n  }\n\n  xz () {\n    return [this.x, this.z]\n  }\n\n  xy () {\n    return [this.x, this.y]\n  }\n\n  yz () {\n    return [this.y, this.z]\n  }\n\n  xzy () {\n    return new Vec3(this.x, this.z, this.y)\n  }\n\n  set (x, y, z) {\n    this.x = x\n    this.y = y\n    this.z = z\n    return this\n  }\n\n  update (other) {\n    this.x = other.x\n    this.y = other.y\n    this.z = other.z\n    return this\n  }\n\n  rounded () {\n    return new Vec3(Math.round(this.x), Math.round(this.y), Math.round(this.z))\n  }\n\n  round () {\n    this.x = Math.round(this.x)\n    this.y = Math.round(this.y)\n    this.z = Math.round(this.z)\n    return this\n  }\n\n  floored () {\n    return new Vec3(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z))\n  }\n\n  floor () {\n    this.x = Math.floor(this.x)\n    this.y = Math.floor(this.y)\n    this.z = Math.floor(this.z)\n    return this\n  }\n\n  offset (dx, dy, dz) {\n    return new Vec3(this.x + dx, this.y + dy, this.z + dz)\n  }\n\n  translate (dx, dy, dz) {\n    this.x += dx\n    this.y += dy\n    this.z += dz\n    return this\n  }\n\n  add (other) {\n    this.x += other.x\n    this.y += other.y\n    this.z += other.z\n    return this\n  }\n\n  subtract (other) {\n    this.x -= other.x\n    this.y -= other.y\n    this.z -= other.z\n    return this\n  }\n\n  multiply (other) {\n    this.x *= other.x\n    this.y *= other.y\n    this.z *= other.z\n    return this\n  }\n\n  divide (other) {\n    this.x /= other.x\n    this.y /= other.y\n    this.z /= other.z\n    return this\n  }\n\n  plus (other) {\n    return this.offset(other.x, other.y, other.z)\n  }\n\n  minus (other) {\n    return this.offset(-other.x, -other.y, -other.z)\n  }\n\n  scaled (scalar) {\n    return new Vec3(this.x * scalar, this.y * scalar, this.z * scalar)\n  }\n\n  abs () {\n    return new Vec3(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z))\n  }\n\n  volume () {\n    return this.x * this.y * this.z\n  }\n\n  modulus (other) {\n    return new Vec3(\n      euclideanMod(this.x, other.x),\n      euclideanMod(this.y, other.y),\n      euclideanMod(this.z, other.z))\n  }\n\n  distanceTo (other) {\n    const dx = other.x - this.x\n    const dy = other.y - this.y\n    const dz = other.z - this.z\n    return Math.sqrt(dx * dx + dy * dy + dz * dz)\n  }\n\n  distanceSquared (other) {\n    const dx = other.x - this.x\n    const dy = other.y - this.y\n    const dz = other.z - this.z\n    return dx * dx + dy * dy + dz * dz\n  }\n\n  equals (other, error = 0) {\n    return Math.abs(this.x - other.x) <= error &&\n      Math.abs(this.y - other.y) <= error &&\n      Math.abs(this.z - other.z) <= error\n  }\n\n  toString () {\n    return '(' + this.x + ', ' + this.y + ', ' + this.z + ')'\n  }\n\n  clone () {\n    return this.offset(0, 0, 0)\n  }\n\n  min (other) {\n    return new Vec3(Math.min(this.x, other.x), Math.min(this.y, other.y), Math.min(this.z, other.z))\n  }\n\n  max (other) {\n    return new Vec3(Math.max(this.x, other.x), Math.max(this.y, other.y), Math.max(this.z, other.z))\n  }\n\n  norm () {\n    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)\n  }\n\n  dot (other) {\n    return this.x * other.x + this.y * other.y + this.z * other.z\n  }\n\n  cross (other) {\n    return new Vec3(this.y * other.z - this.z * other.y, this.z * other.x - this.x * other.z, this.x * other.y - this.y * other.x)\n  }\n\n  unit () {\n    const norm = this.norm()\n    if (norm === 0) {\n      return this.clone()\n    } else {\n      return this.scaled(1 / norm)\n    }\n  }\n\n  normalize () {\n    const norm = this.norm()\n    if (norm !== 0) {\n      this.x /= norm\n      this.y /= norm\n      this.z /= norm\n    }\n    return this\n  }\n\n  scale (scalar) {\n    this.x *= scalar\n    this.y *= scalar\n    this.z *= scalar\n    return this\n  }\n\n  xyDistanceTo (other) {\n    const dx = other.x - this.x\n    const dy = other.y - this.y\n    return Math.sqrt(dx * dx + dy * dy)\n  }\n\n  xzDistanceTo (other) {\n    const dx = other.x - this.x\n    const dz = other.z - this.z\n    return Math.sqrt(dx * dx + dz * dz)\n  }\n\n  yzDistanceTo (other) {\n    const dy = other.y - this.y\n    const dz = other.z - this.z\n    return Math.sqrt(dy * dy + dz * dz)\n  }\n\n  innerProduct (other) {\n    return this.x * other.x + this.y * other.y + this.z * other.z\n  }\n\n  manhattanDistanceTo (other) {\n    return Math.abs(other.x - this.x) + Math.abs(other.y - this.y) + Math.abs(other.z - this.z)\n  }\n\n  toArray () {\n    return [this.x, this.y, this.z]\n  }\n}\n\nfunction v (x, y, z) {\n  if (x == null) {\n    return new Vec3(0, 0, 0)\n  } else if (Array.isArray(x)) {\n    return new Vec3(parseFloat(x[0]), parseFloat(x[1]), parseFloat(x[2]))\n  } else if (typeof x === 'object') {\n    return new Vec3(parseFloat(x.x), parseFloat(x.y), parseFloat(x.z))\n  } else if (typeof x === 'string' && y == null) {\n    const match = x.match(re)\n    if (match) {\n      return new Vec3(\n        parseFloat(match[1]),\n        parseFloat(match[2]),\n        parseFloat(match[3]))\n    } else {\n      throw new Error('vec3: cannot parse: ' + x)\n    }\n  } else {\n    return new Vec3(parseFloat(x), parseFloat(y), parseFloat(z))\n  }\n}\n\nfunction euclideanMod (numerator, denominator) {\n  const result = numerator % denominator\n  return result < 0 ? result + denominator : result\n}\n\nmodule.exports = v\nv.Vec3 = Vec3\n\n\n//# sourceURL=webpack://raytracing/./node_modules/vec3/index.js?");

/***/ }),

/***/ "./src/camera.js":
/*!***********************!*\
  !*** ./src/camera.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec3 */ \"./src/vec3.js\");\n/* harmony import */ var _ray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ray */ \"./src/ray.js\");\n/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interval */ \"./src/interval.js\");\n\r\n\r\n\r\n\r\n\r\nvar color = _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"] ;\r\n\r\n\r\nclass camera {\r\n    constructor(aspect, width) {\r\n        this.aspect = aspect ;\r\n        this.image_width = width ;\r\n        let image_height = Math.floor(width / aspect) ;\r\n        this.image_height = (image_height < 1 ) ? 1 : image_height ;\r\n        this.center = new _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,0,0)\r\n        this.sample_per_pixel = 100 ;\r\n        this.max_depth = 10 ;\r\n\r\n        this.vfov = 90 ;\r\n        this.lookfrom = new _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,0,0)\r\n        this.lookat = new _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,0,-1)\r\n        this.vup = new _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,1,0)\r\n\r\n        this.defocus_angle = 5 ;\r\n        this.focus_dist = 3.4 ;\r\n    }\r\n\r\n    initialize() {\r\n        this.center = this.lookfrom ;\r\n        // let focal_length = this.lookfrom.sub(this.lookat).length() ; \r\n        let theta = this.vfov * Math.PI / 180 ;  // degree to radian\r\n        let h = Math.tan(theta / 2)\r\n        // let viewport_height = 2 * h * focal_length ;\r\n        let viewport_height = 2 * h * this.focus_dist ;\r\n        let viewport_width = viewport_height * (this.image_width/this.image_height)\r\n\r\n        // calculate u,v,w unit basis vectors for the camera coordinate frame\r\n        let w = this.lookfrom.sub(this.lookat).unit()\r\n        let u = this.vup.cross(w).unit() \r\n        let v = w.cross(u)\r\n        \r\n        // Calculate the vectors across the horizontal and down the vertical viewport edges\r\n        let viewport_u = u.mulC(viewport_width)\r\n        let viewport_v = v.minus().mulC(viewport_height)\r\n\r\n       \r\n       \r\n\r\n        this.pixel_delta_u = viewport_u.divC(this.image_width)\r\n        this.pixel_delta_v = viewport_v.divC(this.image_height)\r\n\r\n        // Calculate the location of the upper left pixel\r\n        let viewport_upper_left = this.center.sub(w.mulC(this.focus_dist)).sub(viewport_u.mulC(0.5)).sub(viewport_v.mulC(0.5))\r\n        this.pixel00_loc = viewport_upper_left.add( this.pixel_delta_u.add(this.pixel_delta_v).mulC(0.5)) \r\n\r\n        let defocus_radius = this.focus_dist * Math.tan( (this.defocus_angle/2) * Math.PI/180) // radius of sample disk (circle)\r\n        this.defocus_disk_u = u.mulC(defocus_radius)\r\n        this.defocus_disk_v = v.mulC(defocus_radius)\r\n\r\n\r\n        // sampling\r\n        this.sample_scale = 1 / this.sample_per_pixel ;\r\n    }\r\n    \r\n    render(world, toImage) {\r\n        this.initialize() ;\r\n        for (let j = 0 ; j < this.image_height; j++) {\r\n            for (let i = 0; i < this.image_width; i++){\r\n                let pixel_color = new color(0,0,0) ;\r\n                for ( let k = 0 ; k < this.sample_per_pixel; k++) {\r\n                    let r = this.get_ray(i,j) ;\r\n                    pixel_color.addTo(this.ray_color(r, this.max_depth, world)) ;\r\n                }\r\n                toImage.set(new _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](i,j), pixel_color.mulC(this.sample_scale))\r\n            }\r\n        }\r\n    }\r\n\r\n    // returns a random ray for the pixel (i,j)\r\n    get_ray(i, j) {\r\n       let offset = this.sample_square() ;\r\n       let pixel_sample = this.pixel00_loc.add(this.pixel_delta_u.mulC(i + offset.x)).add(this.pixel_delta_v.mulC(j + offset.y))\r\n       let ray_origin = this.defocus_angle <=0 ? this.center : this.defocus_disk_sample() ;\r\n       let ray_direction = pixel_sample.sub(ray_origin)\r\n       return new _ray__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ray_origin, ray_direction)\r\n    }\r\n\r\n    sample_square() {\r\n        return new _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Math.random() - 0.5, Math.random() - 0.5, 0) ;\r\n    }\r\n\r\n    defocus_disk_sample() {\r\n        let p = _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"].random_in_unit_disk() ;\r\n        return this.center.add( this.defocus_disk_u.mulC(p.e[0]).add(this.defocus_disk_v.mulC(p.e[1]))) ;\r\n    }\r\n\r\n    ray_color(r, depth, world) {\r\n        let rec ;\r\n        if ( depth <= 0) return new color(0,0,0) ;\r\n\r\n        if ( rec = world.hit(r, new _interval__WEBPACK_IMPORTED_MODULE_2__[\"default\"](0.001, Infinity))) {\r\n            // let direction = vec3.random_on_hemisphere(rec.normal) ;\r\n            // let direction = rec.normal.add(vec3.random_in_unit_sphere().unit());\r\n            // return rec.normal.add(new vec3(1,1,1)).mulC(0.5) ;\r\n            let res = rec.material.scatter(r, rec);\r\n            if ( res.valid ) {\r\n                return res.attenuation.mul(this.ray_color(res.scattered, depth - 1, world))\r\n            }\r\n            return new color(0, 0, 0)\r\n           // return this.ray_color(new ray(rec.p, direction), depth-1, world).mulC(0.5) ;\r\n        }\r\n    \r\n        // background (skybox)\r\n        let white = new color(1,1,1) ;\r\n        let green = new color(0.5, 0.7, 1.0)\r\n        let unit_direction = r.dir.unit()\r\n        let a = 0.5*(unit_direction.y + 1)\r\n        return white.mulC(1-a).add( green.mulC(a) ) \r\n\r\n//         return white ;\r\n        \r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (camera); \n\n//# sourceURL=webpack://raytracing/./src/camera.js?");

/***/ }),

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass canvas {\r\n    constructor(id) {\r\n        this.canvas = document.getElementById(id);\r\n        this.ctx = this.canvas.getContext(\"2d\") ;\r\n    }\r\n\r\n    createImage(w,h) {\r\n        return this.ctx.createImageData(w,h) ;\r\n    }\r\n\r\n    drawImage(src) {\r\n        this.ctx.putImageData(src.img,0,0) ;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (canvas);\n\n//# sourceURL=webpack://raytracing/./src/canvas.js?");

/***/ }),

/***/ "./src/framebuffer.js":
/*!****************************!*\
  !*** ./src/framebuffer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./src/canvas.js\");\n/* harmony import */ var vec3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vec3 */ \"./node_modules/vec3/wrapper.mjs\");\n/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interval */ \"./src/interval.js\");\n\r\n\r\n\r\n\r\nclass framebuffer {\r\n    constructor(img) {\r\n        this.img = img ;\r\n        this.width = img.width ;\r\n        this.height = img.height ;\r\n    }\r\n\r\n    linear_to_gamma(x) {\r\n        if (x > 0) return Math.sqrt(x) ;\r\n        return 0 ;\r\n    }\r\n\r\n    set(p, c) {\r\n        let idx = this.width*4*p.y + p.x * 4 ;\r\n        \r\n        // to gamma 2 transformation\r\n        let r = this.linear_to_gamma(c.x) ;\r\n        let g = this.linear_to_gamma(c.y) ;\r\n        let b = this.linear_to_gamma(c.z) ;\r\n\r\n        this.img.data[idx] = Math.floor( _interval__WEBPACK_IMPORTED_MODULE_2__.interval_one.clamp(r) * 256);\r\n        this.img.data[idx+1] = Math.floor(_interval__WEBPACK_IMPORTED_MODULE_2__.interval_one.clamp(g) * 256);\r\n        this.img.data[idx+2] = Math.floor(_interval__WEBPACK_IMPORTED_MODULE_2__.interval_one.clamp(b) * 256);\r\n        this.img.data[idx+3] = 255 ;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (framebuffer);\n\n//# sourceURL=webpack://raytracing/./src/framebuffer.js?");

/***/ }),

/***/ "./src/hit_record.js":
/*!***************************!*\
  !*** ./src/hit_record.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec3 */ \"./src/vec3.js\");\n\r\n\r\nclass hit_record {\r\n    // p, normal, front_face, t, material\r\n    set_face_normal(r, outward_normal) {\r\n        this.front_face = r.dir.dot(outward_normal) < 0 ;\r\n        this.normal = this.front_face ? outward_normal : outward_normal.minus() ; \r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hit_record);\n\n//# sourceURL=webpack://raytracing/./src/hit_record.js?");

/***/ }),

/***/ "./src/hittable_list.js":
/*!******************************!*\
  !*** ./src/hittable_list.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval */ \"./src/interval.js\");\n\r\n\r\nclass hittable_list {\r\n    constructor() {\r\n        this.objects = [] ;\r\n    }\r\n\r\n    clear() {\r\n        this.objects = [] ;\r\n    }\r\n\r\n    add(o) {\r\n        this.objects.push(o) ;\r\n    }\r\n\r\n    hit(r, ray_int) {\r\n        let closest_so_far = new _interval__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ray_int.min, ray_int.max) ;\r\n        let temp_rec = false ;\r\n        let rec  = false ;\r\n        for( let o of this.objects) {\r\n            if ( temp_rec = o.hit(r, closest_so_far)) {\r\n                closest_so_far.max = temp_rec.t\r\n                rec = temp_rec ;\r\n            }\r\n        }\r\n        return rec ;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hittable_list);\n\n//# sourceURL=webpack://raytracing/./src/hittable_list.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec3 */ \"./src/vec3.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ \"./src/canvas.js\");\n/* harmony import */ var _framebuffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./framebuffer */ \"./src/framebuffer.js\");\n/* harmony import */ var _sphere__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sphere */ \"./src/sphere.js\");\n/* harmony import */ var _hittable_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hittable_list */ \"./src/hittable_list.js\");\n/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./camera */ \"./src/camera.js\");\n/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material */ \"./src/material.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet color = _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"] \r\n\r\n\r\nlet cam = new _camera__WEBPACK_IMPORTED_MODULE_5__[\"default\"](16/9, 800) ;\r\ncam.sample_per_pixel = 20 \r\ncam.max_depth = 20\r\n\r\ncam.lookfrom = new _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](13, 2, 3)\r\ncam.lookat = new _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 0)\r\ncam.vup = new _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,1,0)\r\ncam.vfov = 20 ;\r\n\r\ncam.defocus_angle = 0.6 ;\r\ncam.focus_dist = 10\r\n\r\nlet rtCanvas = new _canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"canvas\") ;\r\nlet rawImg = rtCanvas.createImage(cam.image_width, cam.image_height) ;\r\nconst img = new _framebuffer__WEBPACK_IMPORTED_MODULE_2__[\"default\"](rawImg) ;\r\n\r\n// SCENE\r\n\r\nlet world = new _hittable_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"]() ;\r\n// World Objects\r\nlet ground_material = new _material__WEBPACK_IMPORTED_MODULE_6__.lambertian(new color(0.5, 0.5, 0.5))\r\nworld.add(new _sphere__WEBPACK_IMPORTED_MODULE_3__[\"default\"](new _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, -1000, 0), 1000, ground_material)) \r\n\r\nfor (let a = -11; a < 11; a++) {\r\n    for (let b = -11; b < 11 ; b++) {\r\n        let choose_mat = Math.random()\r\n        let center = new _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](a + 0.9 * Math.random(), 0.2 , b + 0.9 * Math.random())\r\n        if ((center.sub(new _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4, 0.2, 0)).length() > 0.9)){\r\n            let sphere_material;\r\n            if (choose_mat < 0.8){\r\n                // diffuse\r\n                let albedo = _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"].random(0, 1).mul(_vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"].random(0,1))\r\n                sphere_material = new _material__WEBPACK_IMPORTED_MODULE_6__.lambertian(albedo)\r\n            } else if ( choose_mat < 0.95) {\r\n                // metal\r\n                let albedo = _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"].random(0.5, 1)\r\n                let fuzz = Math.random() * 0.5 ;\r\n                sphere_material = new _material__WEBPACK_IMPORTED_MODULE_6__.metal(albedo, fuzz)\r\n            } else {\r\n                // glass\r\n                sphere_material = new _material__WEBPACK_IMPORTED_MODULE_6__.dielectric(1.5)\r\n                \r\n            }\r\n            world.add(new _sphere__WEBPACK_IMPORTED_MODULE_3__[\"default\"](center, 0.2, sphere_material))\r\n        }\r\n    }\r\n}\r\n\r\nlet material1 = new _material__WEBPACK_IMPORTED_MODULE_6__.dielectric(1.5)\r\nworld.add(new _sphere__WEBPACK_IMPORTED_MODULE_3__[\"default\"](new _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 1, 0), 1, material1))\r\n\r\nlet material2 = new _material__WEBPACK_IMPORTED_MODULE_6__.lambertian(new color(0.4, 0.2, 0.1))\r\nworld.add(new _sphere__WEBPACK_IMPORTED_MODULE_3__[\"default\"](new _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-4, 1, 0), 1, material2))\r\n\r\nlet material3 = new _material__WEBPACK_IMPORTED_MODULE_6__.metal(new color(0.7, 0.6, 0.5), 0)\r\nworld.add(new _sphere__WEBPACK_IMPORTED_MODULE_3__[\"default\"](new _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4, 1, 0), 1, material3))\r\n\r\n\r\n\r\n\r\n\r\ncam.render(world, img) ;  \r\n\r\nrtCanvas.drawImage(img) ;\r\n\r\n\n\n//# sourceURL=webpack://raytracing/./src/index.js?");

/***/ }),

/***/ "./src/interval.js":
/*!*************************!*\
  !*** ./src/interval.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   empty: () => (/* binding */ empty),\n/* harmony export */   interval_one: () => (/* binding */ interval_one),\n/* harmony export */   universe: () => (/* binding */ universe)\n/* harmony export */ });\n\r\nclass interval {\r\n   constructor(min, max) {\r\n    this.min = min \r\n    this.max = max\r\n   }\r\n\r\n   size() {\r\n     return max - mix ;\r\n   }\r\n\r\n   contains(x) {\r\n     return this.min <= x && x <= this.max ;\r\n   }\r\n\r\n   surrounds(x) {\r\n     return this.min < x && x < this.max ;\r\n   }\r\n\r\n   clamp(x) {\r\n    if ( x < this.min) return this.min ;\r\n    if ( x > this.max) return this.max ;\r\n    return x ;\r\n   }\r\n}\r\n\r\nconst empty = new interval(Infinity, -Infinity) ;\r\nconst universe = new interval(-Infinity, Infinity) ;\r\nconst interval_one = new interval(0, 0.999) ;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interval);\r\n\n\n//# sourceURL=webpack://raytracing/./src/interval.js?");

/***/ }),

/***/ "./src/material.js":
/*!*************************!*\
  !*** ./src/material.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dielectric: () => (/* binding */ dielectric),\n/* harmony export */   lambertian: () => (/* binding */ lambertian),\n/* harmony export */   metal: () => (/* binding */ metal)\n/* harmony export */ });\n/* harmony import */ var _vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec3 */ \"./src/vec3.js\");\n/* harmony import */ var _ray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ray */ \"./src/ray.js\");\n\r\n\r\n\r\n\r\nlet color = _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"] ;\r\n\r\n\r\nclass lambertian {\r\n    constructor(albedo) {\r\n        this.albedo = albedo ; // diffuse coefficient\r\n    }\r\n\r\n    scatter(r_in, rec) {\r\n        let scatter_direction = rec.normal.add(_vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"].random_in_unit_sphere().unit());\r\n\r\n        if (scatter_direction.near_zero()) {\r\n            scatter_direction = rec.normal ;\r\n        }\r\n\r\n        let scattered = new _ray__WEBPACK_IMPORTED_MODULE_1__[\"default\"](rec.p, scatter_direction) ;\r\n        return { scattered, attenuation : this.albedo, valid: true} ;\r\n    }\r\n\r\n}\r\n\r\nclass metal {\r\n    constructor(albedo, fuzz) {\r\n        this.albedo = albedo ;\r\n        this.fuzz = fuzz < 1 ? fuzz : 1 ;\r\n    }\r\n\r\n    scatter(r_in, rec) {\r\n        let scatter_direction ;\r\n        let  reflected = r_in.dir.reflect(rec.normal)\r\n        reflected = reflected.unit().add( _vec3__WEBPACK_IMPORTED_MODULE_0__[\"default\"].random_in_unit_sphere().unit().mulC(this.fuzz)) ;\r\n        let scattered = new _ray__WEBPACK_IMPORTED_MODULE_1__[\"default\"](rec.p, reflected)\r\n        return { scattered, attenuation : this.albedo, valid : scattered.dir.dot(rec.normal) > 0 }\r\n    }\r\n}\r\n\r\nclass dielectric {\r\n    constructor(index) {\r\n        this.refraction_index = index ;\r\n    }\r\n\r\n    scatter(r_in, rec) {\r\n        let ri = rec.front_face ? (1/this.refraction_index) : this.refraction_index ;\r\n        let unit_direction = r_in.dir.unit()   \r\n\r\n        let cos_theta = Math.min(unit_direction.minus().dot(rec.normal), 1)\r\n        let sin_theta = Math.sqrt(1 - cos_theta * cos_theta) ;\r\n\r\n        let cannot_refract = ri * sin_theta > 1 \r\n        let direction ;\r\n\r\n       if ( cannot_refract || this.reflectance(cos_theta, ri) > Math.random() ) {\r\n            direction = unit_direction.reflect(rec.normal)\r\n        } else {\r\n            direction = unit_direction.refract(rec.normal, ri)\r\n        }\r\n        // direction = unit_direction.refract(rec.normal, ri)\r\n\r\n        return { scattered : new _ray__WEBPACK_IMPORTED_MODULE_1__[\"default\"](rec.p, direction), attenuation: new color(1,1,1), valid: true}\r\n    }\r\n\r\n    reflectance(cos, refraction_index) {\r\n        // Schlick's approximation for reflectance\r\n        let r0 = (1 - refraction_index) / ( 1 + refraction_index ) \r\n        r0 = r0 * r0 ;\r\n        return r0 + (1 - r0) * Math.pow(1 - cos,5) ;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://raytracing/./src/material.js?");

/***/ }),

/***/ "./src/ray.js":
/*!********************!*\
  !*** ./src/ray.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec3 */ \"./src/vec3.js\");\n\r\n\r\nclass ray {\r\n    constructor( origin, dir) {\r\n        this.origin = origin ;\r\n        this.dir = dir ;\r\n    }\r\n\r\n    at(t) { return this.origin.add(this.dir.mulC(t)) }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ray);\n\n//# sourceURL=webpack://raytracing/./src/ray.js?");

/***/ }),

/***/ "./src/sphere.js":
/*!***********************!*\
  !*** ./src/sphere.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec3 */ \"./src/vec3.js\");\n/* harmony import */ var _ray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ray */ \"./src/ray.js\");\n/* harmony import */ var _hit_record__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hit_record */ \"./src/hit_record.js\");\n\r\n\r\n\r\n\r\nclass sphere {\r\n    constructor(center, radius, material) {\r\n        this.center = center ;\r\n        this.radius = radius ;\r\n        this.material = material ;\r\n    }\r\n\r\n    hit(r, range, rec) {\r\n        let oc = this.center.sub(r.origin)\r\n        let a = r.dir.length_squared() ;\r\n        let h = r.dir.dot(oc) \r\n        let c = oc.length_squared() - this.radius * this.radius\r\n        let discriminant = h*h - a*c ;\r\n\r\n        if (discriminant < 0) return false ; // no hit\r\n        let sqrtd = Math.sqrt(discriminant) ;\r\n        \r\n        // find the nearest root \r\n        let root = (h - sqrtd)/a ;  // t1\r\n        if (root <= range.min || root >= range.max) {\r\n            root = (h + sqrtd) / a ;  // t2\r\n            if (root <= range.min || root >= range.max) {\r\n             return false ; // hit but out of range\r\n            }\r\n        }\r\n\r\n        rec = new _hit_record__WEBPACK_IMPORTED_MODULE_2__[\"default\"]() ;\r\n        rec.t = root\r\n        rec.p = r.at(root)\r\n        let outward_normal = rec.p.sub(this.center).divC(this.radius)\r\n        rec.set_face_normal(r, outward_normal) ;\r\n        rec.material = this.material ;\r\n        return rec ;\r\n    \r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sphere);\n\n//# sourceURL=webpack://raytracing/./src/sphere.js?");

/***/ }),

/***/ "./src/vec3.js":
/*!*********************!*\
  !*** ./src/vec3.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass vec3 {\r\n    constructor(x=0, y=0, z=0) {\r\n       this.e = [x, y , z] ;\r\n    }\r\n\r\n    get x() { return this.e[0] }\r\n    get y() { return this.e[1] }\r\n    get z() { return this.e[2] }\r\n\r\n    minus() { return new vec3(-this.e[0], -this.e[1], -this.e[2])}\r\n    at(idx) { return this.e[idx]} ;\r\n    set(idx, val) { this.e[idx] = val; return this ; }\r\n    addTo(v) { \r\n        this.e[0] += v.e[0] ;\r\n        this.e[1] += v.e[1] ;\r\n        this.e[2] += v.e[2] ;\r\n        return this ;\r\n    }\r\n    mulTo(t) {\r\n        this.e[0] *= t;\r\n        this.e[1] *= t ;\r\n        this.e[2] *= t ;\r\n        return this ;\r\n    }\r\n    divTo(t) {\r\n        return this.mulTo(1/t) ;\r\n    }\r\n    length() { return Math.sqrt(this.length_squared())}\r\n    length_squared() { return this.e[0] ** 2 + this.e[1] ** 2 + this.e[2] ** 2}\r\n\r\n    add(v) {\r\n        return new vec3(this.e[0] + v.e[0], this.e[1] + v.e[1], this.e[2] + v.e[2])\r\n    }\r\n    sub(v) {\r\n        return new vec3(this.e[0] - v.e[0], this.e[1] - v.e[1], this.e[2] - v.e[2])\r\n    }\r\n    mul(v) {\r\n        return new vec3(this.e[0] * v.e[0], this.e[1] * v.e[1], this.e[2] * v.e[2])\r\n    }\r\n\r\n    mulC(t) {\r\n        return new vec3(this.e[0] * t, this.e[1] * t, this.e[2] * t) ;\r\n    }\r\n    \r\n    divC(t) {\r\n        return new vec3(this.e[0] / t, this.e[1] / t, this.e[2] / t) ;\r\n    }\r\n\r\n    dot(v) {\r\n        return this.e[0] * v.e[0] + this.e[1] * v.e[1] +this.e[2] * v.e[2] ;\r\n    }\r\n\r\n    cross(v) {\r\n        return new vec3(\r\n            this.e[1] * v.e[2] - this.e[2] * v.e[1],\r\n            this.e[2] * v.e[0] - this.e[0] * v.e[2],\r\n            this.e[0] * v.e[1] - this.e[1] * v.e[0]\r\n\r\n        ) ;\r\n    }\r\n\r\n    unit(){\r\n        return this.divC(this.length()) ;\r\n    }\r\n\r\n    static random(min, max) {\r\n        function rnd(min, max) {\r\n            return min + Math.random() * (max-min) ;\r\n        }\r\n        return new vec3(rnd(min, max), rnd(min,max), rnd(min, max))\r\n    }\r\n\r\n    static random_in_unit_sphere() {\r\n        while (true) {\r\n            let p = vec3.random(-1, 1) ;\r\n            if ( p.length_squared() < 1) return p ;\r\n        }\r\n    }\r\n\r\n    static random_in_unit_disk(){\r\n        while (true) {\r\n            let p = this.random(-1,1) ;\r\n            p.e[2] = 0 ;\r\n            if ( p.length_squared() < 1) return p ;\r\n        }\r\n    }\r\n\r\n    static random_on_hemisphere(normal) {\r\n      let on_unit_sphere = vec3.random_in_unit_sphere().unit() ;\r\n      if ( on_unit_sphere.dot(normal) > 0) {\r\n        return on_unit_sphere ; \r\n      } \r\n      return on_unit_sphere.minus() ;\r\n    }   \r\n\r\n    near_zero() {\r\n        let s = 1e-8 ;\r\n        return (Math.abs(this.e[0]) < s) && (Math.abs(this.e[1]) < s) && (Math.abs(this.e[2]) < s) ;\r\n    }\r\n\r\n    // reflection around Normal\r\n    reflect(n) {\r\n        return this.sub(n.mulC(2 * this.dot(n))) ; \r\n    }\r\n\r\n    refract(n, etai_over_etat) {\r\n        let cos_theta = Math.min(this.minus().dot(n), 1) ;\r\n        let r_out_perp = this.add(n.mulC(cos_theta)).mulC(etai_over_etat) ;\r\n        let r_out_parallel = n.mulC(-Math.sqrt(Math.abs(1 - r_out_perp.length_squared())))\r\n        return r_out_parallel.add(r_out_perp) ;\r\n    }\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vec3);\n\n//# sourceURL=webpack://raytracing/./src/vec3.js?");

/***/ }),

/***/ "./node_modules/vec3/wrapper.mjs":
/*!***************************************!*\
  !*** ./node_modules/vec3/wrapper.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Vec3: () => (/* binding */ Vec3),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./node_modules/vec3/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_js__WEBPACK_IMPORTED_MODULE_0__);\nconst Vec3 = _index_js__WEBPACK_IMPORTED_MODULE_0__.Vec3\n\n\n//# sourceURL=webpack://raytracing/./node_modules/vec3/wrapper.mjs?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;