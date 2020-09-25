let $queEs = document.querySelector("#que-es")

$queEs.setAttribute("name","whatIS")

console.log($queEs)

$queEs.setAttribute("data-llave","zen")

console.log($queEs)

console.log($queEs.dataset)

console.log($queEs.getAttribute("data-llave"))
console.log($queEs.removeAttribute("data-llave"))
console.log($queEs.hasAttribute("name"))



let $html = document.documentElement
let $body = document.body

let varColorRojo = getComputedStyle($html).getPropertyValue("--color-rojo")

console.log(varColorRojo)


$queEs.style.backgroundColor = varColorRojo

$queEs.classList.add("titulo")
$queEs.classList.toggle("titulo")


console.log($queEs)
let textito = "hola soy un textito"
$queEs.textContent = "<b>Alonso</b>"
console.log($queEs)


$queEs.style.backgroundColor = "white"

const $cards = document.querySelector(".cards")

console.log($cards.children[2])
console.log($cards.lastElementChild)
console.log($cards.firstElementChild)
console.log($cards.previousElementSibling)
console.log($cards.nextElementSibling)
console.log($cards.closest("body"))


// crear elementos


const $figure = document.createElement("figure")
const $figcaption = document.createElement("figcaption")
const $image = document.createElement("img")
const $figcaptionText = document.createTextNode("Animalitos") 



$cards.appendChild($figure)
$figure.appendChild($image)
$figure.appendChild($figcaption)
$figcaption.appendChild($figcaptionText)
$figure.classList.add("card")

$image.setAttribute("src","https://placeimg.com/200/200/nature")



const $div = document.createElement("div")
const $paragraph = document.createElement("p")
const $paragraphText = document.createTextNode("Este es el texto dentro del parrafo")
const $titulo = document.createElement("h1")
const $tituloTexto = document.createTextNode("Hola soy el título")

$titulo.appendChild($tituloTexto)
$div.appendChild($titulo)
$div.appendChild($paragraph)
$paragraph.appendChild($paragraphText)
$titulo.classList.add("titulo")
$body.appendChild($div)

const $div2 = document.createElement("div")

$div2.innerHTML = `
<img src= "https://placeimg.com/200/200/nature" alt = "nature">
<ul>
    <li>1</li>
</ul>
`

$body.appendChild($div2)

// agregando elementos con forEach

const $ul = document.createElement("ul")
const lista = [1,2,3,4,5]

lista.forEach(n => {
    let $li = document.createElement("li")
    $li.textContent = n
    $ul.appendChild($li)
})

$body.appendChild($ul)

// agregando forEach con innerHTML

const $ul2 = document.createElement("ul")
const paises =["chile","argentina","panama","peru","brasil"]

paises.forEach(n => {
    ($ul2.innerHTML += `<li>${n}</li>`)
})

$body.appendChild($ul2)

// agregando con fragmentos

const $ul3 = document.createElement("ul")
const $fragment = document.createDocumentFragment()

const numeros = [1,2,3,4,5,6,7,8,9,0]

numeros.forEach(n => {
    let $li = document.createElement("li")
    $li.textContent = n
    $fragment.appendChild($li)
})

$ul3.appendChild($fragment)
$body.appendChild($ul3)