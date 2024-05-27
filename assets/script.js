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
let bannerText = document.getElementById("banner-text")
let bannerImg = document.querySelector(".banner-img");
let leftArrow = document.querySelector("#banner .arrow_left");
let rightArrow = document.querySelector("#banner .arrow_right");
let dots = document.querySelectorAll(".dot")

let i = 0

dots[0].classList.add("dot_selected")

leftArrow.addEventListener("click", () => {
	i -= 1

	if (i === -1) {
		dots[i+1].classList.remove("dot_selected")
		i = 3
		bannerImg.src = `./assets/images/slideshow/${slides[i].image}`
		dots[i].classList.add("dot_selected")
		bannerText.innerHTML = `<p>${slides[i].tagLine}</p>`
	}
	else {
		dots[i+1].classList.remove("dot_selected")
		bannerImg.src = `./assets/images/slideshow/${slides[i].image}`
		dots[i].classList.add("dot_selected")
		bannerText.innerHTML = `<p>${slides[i].tagLine}</p>`
	}
})

rightArrow.addEventListener("click", () => {
	i += 1

	if (i === 4) {
		dots[i-1].classList.remove("dot_selected")
		i = 0
		bannerImg.src = `./assets/images/slideshow/${slides[i].image}`
		dots[i].classList.add("dot_selected")
		bannerText.innerHTML = `<p>${slides[i].tagLine}</p>`
	}
	else {
		dots[i-1].classList.remove("dot_selected")
		bannerImg.src = `./assets/images/slideshow/${slides[i].image}`
		dots[i].classList.add("dot_selected")
		bannerText.innerHTML = `<p>${slides[i].tagLine}</p>`
	}
})