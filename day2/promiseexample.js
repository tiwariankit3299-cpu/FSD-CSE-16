function register(){
    return new Promise((resolve,reject)=>{;
    setTimeout(()=>{
        console.log("register here")
        resolve();
    }, 5000);
    });
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("login here")
            reject("login failed");
        }, 10000);
    });
}
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Fetch data")
            resolve();
        }, 6000);
    });
}
function displayData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Display data")
            resolve();
        }, 8000);
    });
}
// register().then(login).then(getData).then(displayData).catch((err)=>{
//     console.log("Error",err)
// });
async function test(){
    try{
        await register();
        await login();
        await getData();
        await displayData();
    }
    catch(err){
        console.log("Error",err)
    }
}
test();
console.log("Call Another Application")