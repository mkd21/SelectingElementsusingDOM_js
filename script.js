document.getElementsByTagName("p");  // will return html collection of all the p tags present 

let allP = document.getElementsByClassName("para");  // will return html collection of all the tags with the given class
// console.log(allP);


let uniqueHeader = document.getElementById("uniqueH4");   // will return the single element with the given id
// console.log(uniqueHeader);




                            // NOW LET'S SEE THE QUERY SELECTOR 


let imageTag = document.querySelector(".css_images");  // will return the first element with the give class name
// console.log(imageTag);


let uniqueElement = document.querySelector("#specialDiv");  // will return the first element with the give class name
// console.log(uniqueElement);


                             // NOW LET'S SEE QUERY SELECTOR ALL  




let allElements = document.querySelectorAll(".css_images"); // it will return a node list consisting all elements with given class
// console.log(allElements);


// what if we do it with id  agar queryselectorAll ko id de de tb kya hoga?

let checkingForId = document.querySelectorAll("#specialDiv");   // elements having the id will be returned in the form of nodelist. 
// although it is not a good practice to make more than one element of same ID. 

// but yes it will return all the element having the same ID

// console.log(checkingForId);


            // EVERTHING THAT IS A VALID SELECTOR IN CSS CAN BE PASSED INSIDE THE QUERYSELECTOR 

// NOW LET'S SEE WITH ATRIBUTES 


let attributes = document.querySelector('[target = "_blank"]');   // first element with the given attribute will be returned
// console.log(attributes);


let attributeAll = document.querySelectorAll("[alt = 'imageTag']");
// console.log(attributeAll);


            // TAG NAME KE liye BHI WE CAN USE QUERY SELECTOR -->  IT IS VERY DYNAMIC 


let para = document.querySelector("p");       // first p tag will be selected
// console.log(para); 

let Allpara = document.querySelectorAll("p");    // all the p tags will be selected
// console.log(Allpara);


// nested query selector 

let ul = document.querySelector("ul li");   // first li inside the first UL encountered will be selected
// console.log(ul);


                    // ek particular section me searching krna hai toh wo bhi possible hai 
// what happening here is :

// first we r getting the ul inside the whole document and then inside that ul we r finding the desired tag 
let ul1 = document.querySelector("ul").querySelectorAll("li");
console.log(ul1);



let ULall = document.querySelectorAll("ul li");   // all the UL inside the document will be selected and inside it all the LI tags will be selected
// console.log(ULall);





            // lets try ot update the DOM using querySelector 



let changeImage = document.querySelector(".css_images");
// changeImage.src = "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg";


// change every image 

let imageStack = [
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80",

    "https://static.vecteezy.com/system/resources/previews/025/284/015/non_2x/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg",

    "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?cs=srgb&dl=pexels-pixabay-257700.jpg&fm=jpg",

    "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cml2ZXJ8ZW58MHx8MHx8fDA%3D",

    "https://wallpapers.com/images/hd/beautiful-mountain-pictures-wfvd4x42htesrnyp.jpg"

]


let changeAllImage = document.querySelectorAll(".css_images");
// console.log(changeAllImage);

// changeAllImage[0].src = imageStack[0];
// changeAllImage[1].src = imageStack[1];
// changeAllImage[2].src = imageStack[2];
// changeAllImage[3].src = imageStack[3];
// changeAllImage[4].src = imageStack[4];



changeAllImage.forEach( (values , index) =>{
    values.src = imageStack[index];
})