export default class Slide{
    constructor(slide,wrapper){
        this.slide = document.querySelector(slide)
        this.wrapper = document.querySelector(wrapper);
        this.dist = {finalPosition:0, startX:0, movement:0}
    }
    
    onStart(event){
        event.preventDefault();
        this.dist.startX= event.clientX;
        
        this.wrapper.addEventListener('mousemove', this.onMove);
    }

    onMove(event){
        console.log(this.dist.startX - event.clientX)
    }
    
    onEnd(event){  
        console.log("entrou");
        this.wrapper.removeEventListener('mausemove', this.onMove);
        
    }
    
    addSlideEvents(){
        this.wrapper.addEventListener('mousedown', this.onStart);
        this.wrapper.addEventListener('mouseup', this.onEnd);
        
    }
 
    bindEvents() {
        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onEnd = this.onEnd.bind(this);
    }

    init(){
        this.bindEvents();
        this.addSlideEvents();
        this.slideConfig();
        return this;
    }



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