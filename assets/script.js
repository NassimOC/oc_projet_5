const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// console.log(slides.length)

let bannerImg = document.querySelector(".banner-img");
let leftArrow = document.querySelector("#banner .arrow_left");
let rightArrow = document.querySelector("#banner .arrow_right");


let dots = document.querySelectorAll(".dot")
console.log(dots)
dots[0].classList.add("dot_selected")

let i = 0;

rightArrow.addEventListener("click", () => {
	dots[i].classList.remove("dot_selected")
	i = (i+1)
	bannerImg.src = `./assets/images/slideshow/${slides[i].image}`
	dots[i].classList.add("dot_selected")
})

leftArrow.addEventListener("click", () => {
	dots[i].classList.remove("dot_selected")
	i = (i-1)
	bannerImg.src = `./assets/images/slideshow/${slides[i].image}`
	dots[i].classList.add("dot_selected")
})