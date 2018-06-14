let score = 1;

let datHole = document.getElementsByClassName('hole')

setInterval(() => {
  const arrHole = Array.from(datHole)

  const currHole = Math.round(Math.random() * (datHole.length - 1))
  datHole[currHole].classList.toggle('mole')
}, 300)

document.getElementById("whack-a-mole").addEventListener("click", (event)=> {
	if (event.target.matches(".mole")){
		event.target.classList.remove("mole")
		score++
	}
	document.getElementById("score").textContent = score
})
