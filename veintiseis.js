const $html = document.documentElement
const $body = document.body
const $fragment = document.createDocumentFragment()
const $template = document.getElementById("template-card3").content
const $cards = document.querySelector(".cards")
const $parrafo = document.getElementById("que-es")

let varColorRojo = getComputedStyle($html).getPropertyValue("--color-rojo")


$parrafo.style.setProperty("color", varColorRojo)


/* $html.style.setProperty("--color-rojo","green")

varColorRojo = getComputedStyle($html).getPropertyValue("--color-rojo")

$parrafo.style.color = varColorRojo

$parrafo.classList.add("card","titulo") */



console.log($parrafo.className)

console.log($cards.firstElementChild)
console.log($cards.lastElementChild)
console.log($cards.children[1])
console.log($cards.nextElementSibling)
console.log($cards.previousElementSibling)
console.log($cards.closest("section"))
console.log($cards.parentElement)

const texto = `
<b>Soy Un nuevo parrafo </b>
`

$parrafo.insertAdjacentHTML("beforeend",texto)

const datos = [
    {
        titulo:"Soy el primer titulo",
        parrafo: "Soy el primer parrafo",
        src: "https://placeimg.com/200/200/any",
        alt: "Cualquiera"
    },
    {
        
        titulo:"Soy el segundo titulo",
        parrafo: "Soy el segundo parrafo",
        src: "https://placeimg.com/200/200/animals",
        alt: "Animaliños"
    },
    {
        
        titulo:"Soy el tercer titulo",
        parrafo: "Soy el tercer parrafo",
        src: "https://placeimg.com/200/200/tech",
        alt: "Tecnologiko"
    },
    {
        
        titulo:"Soy el cuarto titulo",
        parrafo: "Soy el cuarto parrafo",
        src: "https://placeimg.com/200/200/nature",
        alt: "Naturaleziña"
    }

]


datos.forEach(element => {

    $template.querySelector("h1").textContent = element.titulo
    $template.querySelector("p").textContent = element.parrafo
    $template.querySelector("img").setAttribute("src",element.src)
    $template.querySelector("img").setAttribute("alt",element.alt)

    let $clone = document.importNode($template,true)
    $fragment.appendChild($clone)
    
})



let $wrapper = document.createElement("div")

$body.insertAdjacentElement("beforeend",$wrapper)

$wrapper.appendChild($fragment)

let $wrapperClone = $wrapper.cloneNode(true)

$wrapper.appendChild($wrapperClone)



let $cardsClone = $cards.cloneNode(true)

$body.insertAdjacentElement("beforebegin", $cardsClone)

