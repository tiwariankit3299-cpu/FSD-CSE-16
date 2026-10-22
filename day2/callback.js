function register(cb){
setTimeout(()=>{
    console.log("register here")
    cb();
},5000);
}
function login(cb){
    setTimeout(()=>{
        console.log("login here")
        cb();
    },10000);
}
function getData(cb){
    setTimeout(()=>{
        console.log("Fetch Data")
        cb();
    },6000);
    
}
function displayData(cb){
setTimeout(()=>{
    console.log("display data")
    cb();
},8000);

}
//callback Hell
register(()=>{;
login(()=>{;
getData(()=>{;
displayData();
});
});
});

console.log("Call Another Application")