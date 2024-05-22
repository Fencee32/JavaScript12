const emberek = ['Kata', 'Sára', 'Peti', 'Sanyi']
const container = document.querySelector('#container')
for (const ember of emberek) {
  console.log(ember)

  let div = document.createElement('div')
  div.innerText = ember
  container.appendChild(div)
}
