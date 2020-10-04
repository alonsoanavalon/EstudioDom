const $cards = document.querySelector(".cards")
const $template = document.getElementById("template-card").content
const $fragment = document.createDocumentFragment()
const cardContent = [
    {title:"tecnologia",img:"https://placeimg.com/200/200/nature"},{title:"autos",img:"https://placeimg.com/200/200/tech"},
    {title:"nature",img:"https://placeimg.com/200/200/nature"},
    {title:"cualquiercosa",img:"https://placeimg.com/200/200/arch"},
]


console.log($template.querySelector("img"))

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img)
    $template.querySelector("img").setAttribute("alt", el.title)
    $template.querySelector("figcaption").textContent = el.title

    let $clone = document.importNode($template, true)
    $fragment.appendChild($clone)
})

$cards.appendChild($fragment)



const $newCard = document.createElement("figure")

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt = "Any">
<figcaption>Any</figcaption>
` 

$newCard.classList.add("card");

$cards.replaceChild($newCard,$cards.children[1])







const $template2 = document.getElementById("template-card2").content
const $fragment2 = document.createDocumentFragment()

console.log($template2)

const datos = [{src:"https://placeimg.com/200/200/any", alt:"any"},
{src:"https://placeimg.com/200/200/animals", alt:"animales"},
{src:"https://placeimg.com/200/200/tech", alt:"tecnología"}]

console.log($template2.firstElementChild.classList = "card")


datos.forEach(el => {
    $template2.querySelector("img").setAttribute("src", el.src)
    $template2.querySelector("img").setAttribute("alt", el.alt)
    $template2.querySelector("figcaption").textContent = el.alt

    let $clone = document.importNode($template2, true)
    $fragment2.appendChild($clone)

})

$cards.appendChild($fragment2)


const $template3 = document.getElementById("template-card3").content
const $fragment3 = document.createDocumentFragment()

const datitos = [
    {
        p:"Soy el primer parrafo",
        h1: "Soy el primer Título",
        img: "https://placeimg.com/200/200/any"
    },
    {
        p:"Soy el segundo parrafo",
        h1: "Soy el segundo titulo",
        img: "https://placeimg.com/200/200/any"
    },
    {
        p:"Soy el tercer parrafo",
        h1: "Soy el tercer Título",
        img: "https://placeimg.com/200/200/any"
    }
    
]

datitos.forEach(e => {

    $template3.querySelector("h1").textContent = e.h1
    $template3.querySelector("p").textContent = e.p
    $template3.querySelector("img").setAttribute("src",e.img)

    let $clone = document.importNode($template3, true)
    $fragment3.appendChild($clone)
})

$cards.appendChild($fragment3)

const $cloneCards = $cards.cloneNode(true)
const $body = document.body
$body.appendChild($cloneCards)