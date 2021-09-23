


let main = document.querySelector('.main')
class CountdownTimer {
 static main = document.querySelector('.main');
   

    constructor(time){
        this.time = time;
       
    }
    addToTheDOM(){
       
        let timers = document.createElement('div');
        timers.setAttribute('class', 'timer')
        
        timers.innerText = this.time
        main.appendChild(timers);
       let stopBtn = document.createElement('button')
       stopBtn.setAttribute('class', 'stopButton');
       main.appendChild(stopBtn);
       stopBtn.textContent = "stop";
       stopBtn.addEventListener("click", timer.stop)

    }
    start(){
        let numbers = document.querySelector(".timer")
      
        if(numbers.innerHTML > 0 ){
            numbers.innerHTML = +this.time--;
           
        }else{
            numbers.innerHTML === 0;

        }
   
     
     

    }stop(){
        clearInterval(timerstart)
        
    }





}









let timer = new CountdownTimer(5);

// let createBtn = document.querySelector(".createNewTimer");
// createBtn.addEventListener('click', timer.addToTheDOM())

timer.addToTheDOM();



let timerstart = setInterval(function(){
timer.start()

},1000)









