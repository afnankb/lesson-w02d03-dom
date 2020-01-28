console.log('it work !');

// const heading = document.querySelector("h1");
// console.log(heading);



// // select pargraph 

// const pargraph = document.querySelector("p");
// console.log(pargraph)


// //select the img with class selector 
// const img = document.querySelector(".bill");
// console.log(img);


// //select the 1s and 2nd list item 
// const firstlistitem = document.querySelector("li");
// const secondlistitem = document.querySelector("#second");
// console.log(firstlistitem);
// console.log(secondlistitem);



//select all list item from ul 

// const allListItems = document.querySelectorAll("li");
// console.log(allListItems);
// console.log("starting loop..")
// for(let i=0 ; i<allListItems.length ; i++){

// const currentListItem = allListItems[i];

// console.log(currentListItem)


// }

// console.log ("Ending loop ...")


// get element of the attribute name 

// const img = document.querySelector("img");
// const src = img.getAttribute("src");
// const alt = img.getAttribute("alt");

// console.log(src , alt);



// // find the a tag and log out the herf attribute 
// const Atag = document.querySelector("a");
// const link = Atag.getAttribute("href");
// console.log(link);



//set attribute 

// const img = document.querySelector("img");
// const old = img.getAttribute("src");
// img.setAttribute("src","https://www.placecage.com/400/400");


// const Atag = document.querySelector("a");
// Atag.setAttribute("herf", "https://www.google.com.sa")


// //print a new href 
// const newlink = Atag.getAttribute("href");
// console.log(newlink)




// // Atag.setAttribute('target', '_blank'); 



// // find the h1 
// const heading = document.querySelector("h1");

// // print the current text of h1
// // inner text to renove the html <> :) 
// console.log(heading.innerText)

// // change h1 text to changed by Js 
// // for content is web page 
// heading.innerText = "changed by JS ";


// const input = document.querySelector("input");
// console.log(input.value);
// // writte in input 
// input.value = "AFnan";


// // this is only for form related data 
// // input , textarea , dropdown , checkbox



// //style 
// // don't doing this her only to know you can do this 
// heading.style.color = "hotpink";
// heading.style.fontSize = "120px";
// heading.style.background = "green";



// console.log("heading width  "+heading.style.width)



 
// creat element 
// 1. create the element and store it in JS varble 
// 2. change it (using things like .innertex , .style , .setAttr)
// 3. put it on the page 

const newHeading = document.createElement("h1");
newHeading.innerText= "Created by JS !!";
const targetDiv = document.querySelector(".diynamic");
targetDiv.append(newHeading);

const aTag = document.querySelector("a");
targetDiv.appendChild(aTag);

//make 

const newImage = document.createElement("img");

//change 

newImage.setAttribute("src", "https://www.placecage.com/300/300");

newImage.style.border = "4px dashed purple";

// add to page 

//document.body.appendChild(newImage);// her without quari selector 
// with quari selector
document.querySelector("body").appendChild(newImage);


