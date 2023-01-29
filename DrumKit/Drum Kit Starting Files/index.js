// goes through the entire DOM to find all the drum class, then adds an event listener to each 




for (var i=0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (key){
        console.log("hi");
    })
}
