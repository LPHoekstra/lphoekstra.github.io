import { slides } from "./slides.js"

// listening click on arrow
const arrows = document.querySelectorAll("#banner .arrow") 
arrows.forEach(arrow => {
	arrow.addEventListener("click", () => slideChangeOnArrow(arrow))
})

// creating dot div according to number of slides
const dots = document.querySelector(".dots")
slides.forEach((slide, index) => {
	const dot = document.createElement("div")
	dot.classList.add("dot")
	dot.id = `dot-${index}`
	dots.appendChild(dot)
})

// initiate dot and currentSlideNumber
let currentSlideNumber = 0
const dotElements = document.querySelectorAll(".dot")
dotElements[currentSlideNumber].classList.add("dot_selected") // set the first selected dot

// click on a dot to change to the corresponding slide
dotElements.forEach(dotElement => {
	dotElement.addEventListener("click", () => {
		currentSlideNumber = dotElement.id.split("-")[1] // currentSlideNumber set to the id number of the dot
		changeSlide()
	})
})

// function to handle slide change when arrow is clicked
function slideChangeOnArrow(element) {
	const slidesCount = slides.length - 1 // subtracted 1 because .length return one higher than the highest index
	if (element.classList.contains("arrow_right")) {
		currentSlideNumber++
		if (currentSlideNumber > slidesCount) {
			currentSlideNumber = 0
		}
	} else {
		currentSlideNumber--
		if (currentSlideNumber < 0) {
			currentSlideNumber = slidesCount
		}
	}
	changeSlide()
}

// function to update the slide and dot selection
function changeSlide() {
	let currentSlide = document.querySelector(".banner-img")
	let currentContentSlide = document.querySelector("#banner > p")
	let previousDot = document.querySelector(".dot_selected")
	console.log(currentSlideNumber)
	
	// Update slide image and tagLine
	currentSlide.src = "./assets/images/slideshow/" + slides[currentSlideNumber]["image"]
	currentContentSlide.innerHTML = slides[currentSlideNumber]["tagLine"]

	// Update dot selection
	previousDot.classList.remove("dot_selected")
	dotElements[currentSlideNumber].classList.add("dot_selected")
}
