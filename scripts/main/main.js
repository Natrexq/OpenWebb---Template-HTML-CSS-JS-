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

    setTimeout(function () {
        location.href = "/web/webb.html";

    }, 1000);

 
    


}
function GoAb(){

    location.href = "#ab";

}
function GoWb(){
    
    location.href = "#body";
}