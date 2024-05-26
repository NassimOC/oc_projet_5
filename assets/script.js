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

let leftArrow = document.querySelector("#banner .arrow_left");
let rightArrow = document.querySelector("#banner .arrow_right");


rightArrow.addEventListener("click", () => {
	console.log("droite")
})

leftArrow.addEventListener("click", () => {
	console.log("gauche")
})