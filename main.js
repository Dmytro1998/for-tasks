


class CountdownTimer {
 static main = document.querySelector('.main');
   

    constructor(time){
        this.time = time;
        this.timerId = Math.random();
        this.addToTheDOM();
        this.intervalid = "";

       
    }
    addToTheDOM(){
        
       
        let timers = document.createElement('div');
        timers.setAttribute('class', 'timer')
        
        timers.innerText = this.time
        timers.setAttribute('id', this.timerId);
        CountdownTimer.main.appendChild(timers);
       let stopBtn = document.createElement('button')
       stopBtn.setAttribute('class', 'stopButton');
       CountdownTimer.main.appendChild(stopBtn);
       stopBtn.textContent = "stop";
       stopBtn.addEventListener("click", ()=>this.stop())

       let startbtn = document.createElement('button');
       startbtn.setAttribute('class', 'startbtn');
       startbtn.textContent = "Start"
       CountdownTimer.main.appendChild(startbtn);
       startbtn.addEventListener('click', ()=>this.start())
   



    }
    decreaseValue(){
        
        
let numbers = document.getElementById(this.timerId);
        if (this.time >= 0) {
            numbers.innerText = +this.time--;
        }
        else {
           this.stop();
        }

    
   
     
     

    }
    stop(){
        clearInterval(this.intervalid);
 


        
    }
    start(){
        this.intervalid = setInterval(()=>{
            this.decreaseValue();
        },1000)
    }

}



let createNewTimer = document.getElementById('createNewTimer');
createNewTimer.addEventListener('click',function(){
    new CountdownTimer (Math.floor(Math.random()*50))
})












