
//our js file for the events project 
console.log(" hello from Js ");


/*

    - what events are there ?
    - mouse (Click* , mouse*)
    - keybord (key* down , pressed , Up )
    - browser (resize , scroll )
    - form (submit )



    events need :
    1. an event type ..........("CLICK")
    2. an event target ........ ("BUTTON")
    3. a callback funcition  


    when all of these thing are combines ,
     they become an event listener 

*/



// the type of the event 
const eventType = 'click';

// the target of the event 

const myButton = document.querySelector('button');

// the callback - what do you want to do as a response?
const myCallback = function(event){

    console.log(" The button was clicked !! ",event);


}


// create an Event listener 
// When this event take place on this target 
// call this CALLBACK FUNCITION

myButton.addEventListener(eventType,myCallback);


//Type + target + callback + event Listener 

const darkBUTTON = document.querySelector("#dark");
const changeToDarkThem = function()
{

console.log("Night time !!")
document.querySelector("body").setAttribute("class",'dark' )

}

darkBUTTON.addEventListener("click",changeToDarkThem);



const lightButton = document.querySelector("#light");
const changeToLightThem = function()
{

    console.log(" day time !!")
    document.querySelector("body").setAttribute("class",'light' )
    

}

lightButton.addEventListener("click",changeToLightThem )




const postTweetButton = document.querySelector(".post");
const createTwwet = function(){
console.log("making tweet !!");


// get whatever is typed in the input 
// save it in varuble called content 

const input = document.querySelector("input");
const content = input.value ; 

//create new pragraph 
const newPargraph = document.createElement("p");
newPargraph.innerText = content;



// take the pargraph and put it at end of div.new-tweet 
const newTweetDiv = document.querySelector(".new-tweets");
newTweetDiv.appendChild(newPargraph);
input.value="";

}

postTweetButton.addEventListener('click', createTwwet)