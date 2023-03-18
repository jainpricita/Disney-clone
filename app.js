const carousel= document.querySelector(".carousel");

let sliders=[];

let currentSlide=0;

function createSlide(){
    if(currentSlide>=movies.length){
        currentSlide=0;
    }
   

// console.log(currentSlide);


    //creating DOM elements 
    let slide=document.createElement("div");
    let slideDetails=document.createElement("div");
    let title=document.createElement("h1");
    let data=document.createElement("div");
    let movieDetails=document.createElement("p");
    let type=document.createElement("span");
    let year=document.createElement("span");
    let period=document.createElement("i");
    let image=document.createElement("img");


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

    image.src=movies[currentSlide].image;
    currentSlide++;

    //classnames
    slide.className="slider";
    slideDetails.className="slide-details";
    title.className="movie-title";
    data.className="movie-data";
    period.className="fa-solid fa-circle data-first";
    movieDetails.className="movie-details";


    
     sliders.push(slide);
    

    //adding a slide effect
    let shift=(-100*(sliders.length-2));
    let shift2=(-14*(sliders.length-2));
    // console.log(shift,shift2);
    if(sliders.length){
         sliders[0].style.marginLeft= "calc("+shift+"% + "+shift2+"px)";
// console.log(sliders[0].style.marginLeft);
    };
    
}

for(let i=0;i<3;i++){
    createSlide();
}

// setInterval(function(){
//     createSlide();
// },2000);
