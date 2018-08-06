window.addEventListener("load", init);
   

function init(){

    document.querySelector("#search").addEventListener("click" , doAjax);
}


function printImage(url){

    var div = document.querySelector("#result");
    var img = document.createElement("img");
    img.src = url;
    img.className = "size";
    div.appendChild(img);
}


function doAjax(){

    var searchValue = document.querySelector("#searchtxt").value;

    var url = "http://api.giphy.com/v1/gifs/search?q="+searchValue+"&api_key=Me6eEnEN4pB6q8k1aScKY6IMqYwqMBFo&limit=5";

    var pr = fetch(url);

    //we can write anything which will perform some other task, while we get the response from the server, to keep our CPU busy.
    //for example
    console.log("do something else");
    for(var  i =0; i <= 10; i++){
        console.log("i am doing something else");
    }

    pr.then(response=>{
        response.json().then(object=>{
            console.log("valid json", object);
            document.querySelector("#result").innerHTML = "";
            for(let currentObject of object.data){
                // console.log("images are" , currentObject.images.original.url);

                printImage(currentObject.images.original.url);
            }
        }).catch(err=>{
            console.log("invalid JSON", err);
        }).catch(err =>{
            console.log("Invalid Response" , err);
        })

    })
}


// function printImage(url){

//     var div = document.querySelector("#result");
//     var img = document.createElement("img");
//     img.src = url;
//     img.className = "size";
//     div.appendChild(img);
// }