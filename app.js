const carousel = document.querySelector(".carousel");

let sliders = [];

let currentSlide = 0;

function createSlide() {
    if (currentSlide >= movies.length) {
        currentSlide = 0;
    }


    // console.log(currentSlide);


    //creating DOM elements 
    let slide = document.createElement("div");
    let slideDetails = document.createElement("div");
    let title = document.createElement("h1");
    let data = document.createElement("div");
    let movieDetails = document.createElement("p");
    let type = document.createElement("span");
    let year = document.createElement("span");
    let period = document.createElement("i");
    let image = document.createElement("img");


    //attaching all elements
    type.appendChild(document.createTextNode(movies[currentSlide].type));
    year.appendChild(document.createTextNode(movies[currentSlide].year));
    data.appendChild(type);
    data.appendChild(period);
    data.appendChild(year);
    title.appendChild(document.createTextNode(movies[currentSlide].name));
    movieDetails.appendChild(document.createTextNode(movies[currentSlide].detail));
    slideDetails.appendChild(title);
    slideDetails.appendChild(data);
    slideDetails.appendChild(movieDetails);
    slide.appendChild(slideDetails);
    slide.appendChild(image);
    carousel.appendChild(slide);

    image.src = movies[currentSlide].image;
    currentSlide++;

    //classnames
    slide.className = "slider";
    slideDetails.className = "slide-details";
    title.className = "movie-title";
    data.className = "movie-data";
    period.className = "fa-solid fa-circle data-first";
    movieDetails.className = "movie-details";



    sliders.push(slide);

         //adding a slide effect by adding margin left to the first slide, was increasing the length of array Everytime it was called

        // let shift=(-100*(sliders.length-2));
        // let shift2=(-14*(sliders.length-2));
        // console.log(shift,shift2);
        // if(sliders.length){
        //      sliders[0].style.marginLeft= "calc("+shift+"% + "+shift2+"px)";
    // console.log(sliders[0].style.marginLeft);
        // };
}

//i<=length, one duplicate item needed to make smooth transition
for (let i = 0; i <=movies.length ; i++) {
    createSlide();
};



















//----------------------Trying out different logics to start the array again and not increase sliders length-------------

// let index=1;
// setInterval(function(){
//     if(index>=sliders.length){
//         index=1;
//     }
//     let move=-101.8*index;
//     sliders[0].style.marginLeft= move+"%";
//     index++;
// },1000);


// sliders[1].style.marginLeft="-187.5%";

// setInterval(function(){
//  createSlide();
// },3000);



// if (currentSlide <= movies.length){
//     for (let i = 0; i < movies.length; i++) {
//         createSlide();
//     }

//     setInterval(function () {
//         i=1;
//         if(i>movies.length){
//             i=1;
//         }
//         moveSlide(i);
//         i++;
//     }, 2000);
// }




// for (let i = 0; i < movies.length; i++) {
//     createSlide();
// }
// for(let i=1;i<sliders.length;i++){
//     moveSlide(i);
// }

// function moveSlide(i) {
//     //adding a slide effect
//     let shift = (-100 * (i - 2));
//     let shift2 = (-14 * (i - 2));
//     // console.log(shift,shift2);
//     if (sliders.length) {
//         sliders[0].style.marginLeft = "calc(" + shift + "% + " + shift2 + "px)";
//         // console.log(sliders[0].style.marginLeft);
//     };
// }




// let index=0;
//  setInterval(function () {
//   moveSlide(index);
//  }, 2000);

// const moveSlide = (index)=>{
//     this.setInterval(() => {
//         let shift = (-100 * (sliders[index] - 2));
//     let shift2 = (-14 * (sliders[index] - 2));
//     // console.log(shift,shift2);
//     if (sliders.length) {
//         sliders[0].style.marginLeft = "calc(" + shift + "% + " + shift2 + "px)";}
  
//         index++;
//       }, 2000);
//     };

//     moveSlide(3);


