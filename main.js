/* console.log()

const arbol = 'arbolito'

let numero = Math.round(Math.random()*100)

let arr = Array.from(document.getElementsByTagName("li"));

console.log(arr[2])

console.log(document.querySelector(".link-dom").getAttribute("href"))

let $linkDOM = document.querySelector(".link-dom")

$linkDOM.setAttribute("target","_blank") */



/* let $linkDOM = document.querySelector(".link-dom")


console.log($linkDOM.setAttribute("hrefa","key"))

console.log($linkDOM.removeAttribute("hrefa"))

console.log($linkDOM)

$linkDOM.setAttribute("data-key","zen")

console.log($linkDOM.dataset)

console.log($linkDOM.hasAttribute("data-key"))


$linkDOM.style.display = "block"
$linkDOM.style.color = "green"


let $html = document.documentElement

console.log($html)

let colorNegro = getComputedStyle($html).getPropertyValue("--dark-color")

$linkDOM.style.color = colorNegro

$html.style.setProperty("--dark-color","pink")

colorNegro = getComputedStyle($html).getPropertyValue("--dark-color")

$linkDOM.style.color = colorNegro */
/* 
let $card = document.querySelector(".card") */


/* let $card = document.querySelector(".card")
console.log($card.classList);

console.log($card.classList.contains("mama"))

const $whatIsDOM = document.getElementById("que-es")

let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`

$whatIsDOM.innerHTML = text */


const $linkDOM = document.querySelector('.link-dom')

$linkDOM.style.backgroundColor = "red"



/* console.log(getComputedStyle($linkDOM).setProperty("color","red")) */


console.log($linkDOM.classList.add("pepin"))

console.log($linkDOM.classList)

$linkDOM.classList.toggle("pepin")

console.log($linkDOM.classList)

console.log($linkDOM.classList.toggle("pepin"))

const $prueba = document.querySelector(".prueba")

console.log($prueba)

let texto = `
Esto debería aparecer escrito normal mientras que <b>Esto otro debería aparecer en negritas</b> y esto otro tambien <strong>jaja</strong>

`
$prueba.outerHTML = texto;

console.log($prueba)





const $figure = document.createElement("figure")
const $image = document.createElement("img")
const $figcaption = document.createElement("figcaption")
const $figcaptionText = document.createTextNode("Animals")
const $cards = document.querySelector('.cards')


$cards.appendChild($figure)
$figure.appendChild($image)
$figure.appendChild($figcaption)
$figcaption.appendChild($figcaptionText)
$figure.classList.add("card")

$image.setAttribute("src","https://placeimg.com/200/200/animals")
$image.setAttribute("alt","animals")

console.log($cards.firstElementChild)
$cards.firstElementChild.classList.add("color")



console.log($cards.firstElementChild)

const $ul = document.createElement("ul")

document.body.appendChild($ul)


const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"]

estaciones.forEach(el => {
	const $li = document.createElement("li")
	$li.textContent = el;
	$ul.appendChild($li);
});

const $ul2 = document.createElement("ul")

const $fragment = document.createDocumentFragment()

const numeros = [1,2,3,4]

numeros.forEach( n => {

    let $li = document.createElement("li")
    $li.textContent = n
    $fragment.appendChild($li)

})

$ul2.appendChild($fragment)
document.body.appendChild($ul2)