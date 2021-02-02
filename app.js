var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#translate-input");
var outputDiv = document.querySelector("#translate-output");

//construct API URL
var url = "https://api.funtranslations.com/translate/klingon.json";

function constructURL(input){
    return url + "?" + "text=" + input;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something wrong with server! try again after some time");
}

function clickHandler(){
    fetch(constructURL(inputTxt.value))
    .then(response => response.json())
    .then(json => {
        outputDiv.innerText = json.contents.translated;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);