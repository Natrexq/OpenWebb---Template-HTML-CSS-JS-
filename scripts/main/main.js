var status;






function Load(status){
    
    status = false;

    if(status == true){

        const body = document.getElementById('body').style;
    
        body.animationName = "load";
        body.animationDuration = "1000ms";
    
    }
    else{

    }




}
function Go(){

    const webbgo = document.getElementById('webb');
    const webbgost = webbgo.style;

    
    
        setTimeout(function () {

            location.href = "/webb.html"        
        }, 2000);    


}