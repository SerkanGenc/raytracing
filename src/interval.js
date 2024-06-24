
class interval {
   constructor(min, max) {
    this.min = min 
    this.max = max
   }

   size() {
     return max - mix ;
   }

   contains(x) {
     return this.min <= x && x <= this.max ;
   }

   surrounds(x) {
     return this.min < x && x < this.max ;
   }

   clamp(x) {
    if ( x < this.min) return this.min ;
    if ( x > this.max) return this.max ;
    return x ;
   }
}

export const empty = new interval(Infinity, -Infinity) ;
export const universe = new interval(-Infinity, Infinity) ;
export const interval_one = new interval(0, 0.999) ;
export default interval ;
