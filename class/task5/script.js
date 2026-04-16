document.getElementById("load-btn").addEventListener("click", () => {
    document.getElementById("status").innerText = "Loading...";
    let promise = new Promise((resolve, reject) => {
        if(Math.random() > 0.9){
            setTimeout(() => {
                resolve("Data Loaded");
            }, 2000);
        }else{
            setTimeout(() => {
                reject("Data Not Loaded");
            }, 2000);
        }
    }); 
    promise.then((data) => {
        document.getElementById("status").innerText = data;
    });
    promise.catch((error) => {
        document.getElementById("status").innerText = error;
    });
    promise.finally(() => {
        document.getElementById("status").innerText = "Loading Completed";
    });
});
//define promise ui: promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
//promise states: pending, fulfilled, rejected
//promise methods: then, catch, finally
//promise chain: 