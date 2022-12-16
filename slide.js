export default class Slide{
    constructor(slide,wrapper){
        this.slide = document.querySelector(slide)
        this.wrapper = document.querySelector(wrapper);
    }
}

onStart(event){
    event.preventDefault();
    console.log(this);
}

onmouseover(event) {
    
}


addSlideEvents(){
    this.wrapper.addEventListener('mousedown',this onStart);

}
 
bindEvents() {
    this.onStart = this.onStart.bind(this);
}

init(){
    this.bindEvents();
    this.addSlideEvents();
    this.slideConfig();
    return this;
}








// lideConfig(){
//     this.slideArray = [...this.slideArray.childzem].map((Element) => {
//         const position = element.offsetLeft;
//         return{
//             position,
//             element
//         }
//     });
// }

// slidePosition(slide) {
//     const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
//     return -(slide.offsetLeft - margin) ;
// }

// onselectstart(event){
//     event.preventDefault();
//     this.dispatchEvent.startX
//     this.wrapper.addEventListener('mousemove',this.onMove);
// }

// onended(event){
//     this.wrapper.removeEventListener('mousemove',this.onMove);
// }

// init(){
//     this.bindEvents();
//     this.addSlideEvents();
//     this.slideConfig();
//     return this;
// }

// changeSlide(index){
//     this.move
// }