/* const $template = document.getElementById("template-card").content
const $cards = document.querySelector(".cards")
const $fragment = document.createDocumentFragment()
const datos = [
    {
        src:"https://placeimg.com/200/200/any",
        title:"any"
    },
    {
        src:"https://placeimg.com/200/200/animals",
        title:"animales"
    },
    {
        src:"https://placeimg.com/200/200/tech",
        title:"Tecnología"
    }
]

console.log($template.querySelector("img"))

datos.forEach(elemento => {
    $template.querySelector("img").setAttribute("src",elemento.src)
    $template.querySelector("img").setAttribute("alt",elemento.title)
    $template.querySelector("figcaption").textContent = elemento.title

    let $clone = document.importNode($template,true)
    $fragment.appendChild($clone)

})

$cards.appendChild($fragment)

 */

// 


const $cards = document.querySelector(".cards")
const $body = document.body
const $template = document.getElementById("template-card").content
const $fragment = document.createDocumentFragment()

const datos = [
    {
        img:"https://placeimg.com/200/200/any",
        text:"Any"
    },
    {
        img:"https://placeimg.com/200/200/animals",
        text:"Animaliiitos"
    },
    {
        img:"https://placeimg.com/200/200/tech",
        text:"tecnologiaa"
    }

]

datos.forEach(element => {

    $template.querySelector("img").setAttribute("src",element.img)
    $template.querySelector("img").setAttribute("alt",element.text)
    $template.querySelector("figcaption").textContent = element.text

    let $clone = document.importNode($template, true)
    $fragment.appendChild($clone)

})

$cards.appendChild($fragment)


let $nuevaTarjeta = document.createElement("img")

$nuevaTarjeta.setAttribute("src","https://placeimg.com/200/200/any")


console.log


$cards.insertAdjacentElement("beforebegin",$nuevaTarjeta)


const $cloneCards = $cards.cloneNode(true)

$body.insertAdjacentHTML("beforeend",$cloneCards)













/* 

const $imagen = document.createElement("img")
$imagen.setAttribute("src","https://placeimg.com/200/200/any")



$cards.insertAdjacentElement("beforeend",$imagen)

const $html = document.documentElement

const $eminem = getComputedStyle($html).getPropertyValue("--eminem")
 */
