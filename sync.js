function register(){
    waitforseconds(5000);
    console.log("register here")
}
function login(){
    waitforseconds(10000);
    console.log("login here")
}
function getData(){
    waitforseconds(6000);
    console.log("Fetch data")
}
function displayData(){
waitforseconds(8000);
    console.log("display data ")
}
function waitforseconds(delay){
    const start=Date.now()+delay;
    while(Date.now()<start){
        
    }
}
register();
login();
getData();
displayData();
console.log("Call Another Application")