console.log("Script is loaded")

const quoteList = [
  "Some doors only open from the inside. Breath is a way of accessing that door.",
  "What has to be taught first, is the breath.",
  "Remember the blue sky. It may at times be obscured by clouds, but it is always there.",
  "In the midst of movement and chaos, keep stillness inside of you.",
  "We can't control the sea, but we can learn how to surf the waves.",
  "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.",
  "To understand the immeasurable, the mind must be extraordinarily quiet, still."
];

const colors = [
  "#FADADD",
  "#FDFD96",
  "#AEC6CF",
  "#CBAACB",
  "#B5EAD7",
  "#FFDAC1",
  "#E2F0CB"];

const darkerColors = [ 
  "#C71585",
  "#B8860B",
  "#4682B4",
  "#6A0DAD",
  "#2E8B57",
  "#CD853F",
  "#556B2F"];

let wrapperDiv = document.getElementById("wrapper")
let quoteText = document.getElementById("quote-text")
let quoteButton = document.getElementById("quote-button")
let titleDiv = document.getElementById("quote-title")
let quoteSubtext = document.getElementById("quote-subtext")

quoteButton.addEventListener("click", function(){
  let randomIndex = Math.floor(Math.random() * quoteList.length)
  let randomQuote = quoteList[randomIndex]

  quoteText.textContent = randomQuote
  wrapperDiv.style.backgroundColor = (colors[randomIndex])
  titleDiv.style.color = (darkerColors[randomIndex])
  quoteSubtext.style.color = (darkerColors[randomIndex])
  quoteSubtext.style.backgroundColor = "white"
  quoteSubtext.style.borderRadius = "20px"
  quoteSubtext.style.paddingLeft = "5px"
})