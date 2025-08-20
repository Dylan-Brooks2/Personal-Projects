const memeArray = [
  "https://media.tenor.com/_zWYqfZdneIAAAAM/shocked-face-shocked-meme.gif",
  "https://i1.sndcdn.com/artworks-DW1YYdgHCvkmy0Hb-z69Rhw-t500x500.jpg",
  "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/spongebob_meme_64.png",
  "https://www.bu.edu/files/2024/12/Screenshot-2024-12-13-at-12.42.40%E2%80%AFPM.png"
];
const captionsArray = [
  "Girl anyways...",
  "Hehehe",
  "Hey best friend..",
  "Boom Shaka Laka"
]

let image = document.getElementById("random-meme")
let caption = document.getElementById("random-caption")
let button = document.getElementById("generator-button")

button.addEventListener("click", function(){
  let randomIndex1 = Math.floor(Math.random() * memeArray.length)
  let randomIndex2 = Math.floor(Math.random() * memeArray.length)

  image.style.width = "400px"
  image.style.length = "400px"
  image.src = memeArray[randomIndex1]
  caption.innerText = captionsArray[randomIndex2]
})