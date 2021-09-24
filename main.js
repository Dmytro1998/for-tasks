


class CountdownTimer {
 static main = document.querySelector('.main');
   

    constructor(time){
        this.time = time;
       
    }
    addToTheDOM(){
        
       
        let timers = document.createElement('div');
        timers.setAttribute('class', 'timer')
        
        timers.innerText = this.time
        CountdownTimer.main.appendChild(timers);
       let stopBtn = document.createElement('button')
       stopBtn.setAttribute('class', 'stopButton');
       CountdownTimer.main.appendChild(stopBtn);
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
        let stop = document.querySelector(".stopButton");
        stop.innerHTML = "contine"
       stop.setAttribute()


        
    }





}


 let timer = new CountdownTimer(35);

let createNewTimer = document.getElementById('createNewTimer');
createNewTimer.addEventListener('click',timer.addToTheDOM)

// timer.addToTheDOM();

let timerstart = setInterval(function(){
timer.start()

},1000)









