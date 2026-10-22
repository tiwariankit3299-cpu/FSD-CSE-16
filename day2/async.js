function register(){
setTimeout(()=>{
    console.log("register here")
},5000);
}
function login(){
    setTimeout(()=>{
        console.log("login here")
    },10000);
}
function getData(){
    setTimeout(()=>{
        console.log("Fetch Data")
    },6000);
    
}
function displayData(){
setTimeout(()=>{
    console.log("display data")
},8000);

}

register();
login();
getData();
displayData();
console.log("Call Another Application")