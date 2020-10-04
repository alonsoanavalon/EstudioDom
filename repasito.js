const $cards = document.querySelector(".cards")

$cards.firstElementChild.firstElementChild.setAttribute("src","https://placeimg.com/200/200/animals")

$cards.firstElementChild.firstElementChild.setAttribute("src","https://placeimg.com/200/200/tech")

const $queEs = document.getElementById("que-es")

console.log($queEs)

$queEs.setAttribute("data-nombre","esLoqueEs")

console.log($queEs)

console.log($queEs.dataset)

const $html = document.documentElement

let colorRojo = getComputedStyle($html).getPropertyValue("--color-rojo")

console.log(colorRojo)

$queEs.style.setProperty("color",colorRojo)

$html.style.setProperty("--color-rojo","pink")

colorRojo = getComputedStyle($html).getPropertyValue("--color-rojo")

$queEs.style.setProperty("color",colorRojo)

$queEs.insertAdjacentHTML("beforeend", `Soy el nuevo texto`)

let colorVerde = "green"

$queEs.style.setProperty("color", "black")
$queEs.style.setProperty("color", colorVerde)







const $fragment = document.createDocumentFragment()
const $body = document.body
const $template = document.getElementById("template-card").content


const datos = [
    {
        src: "https://placeimg.com/200/200/tech",
        alt: "Tech"
    },
    {
        src:"https://placeimg.com/200/200/animals",
        alt:"Animals"
    },
    {
        src:"https://placeimg.com/200/200/nature",
        alt:"Nature"
    },

]


datos.forEach(element => {

    $template.querySelector("img").setAttribute("src",element.src)
    $template.querySelector("img").setAttribute("alt",element.alt)
    $template.querySelector("figcaption").innerHTML = element.alt

    let $clone = document.importNode($template, true)
    $fragment.appendChild($clone)

})

$body.appendChild($fragment)

let btn1 = document.getElementById("btn-1")



function saludar (name = "pedro") {
    alert("Hola "+ name)
    alert(name)
}

let name1 = "alonso"

let numeroSuerte = function () {
    let numero = prompt("Introduzca un número")
    let nombre = prompt("Introduzca su nombre")

    numero = parseFloat(numero)

    let numeroDeSuerte = Math.round(Math.random() * numero)

    $cards.firstElementChild.querySelector("figcaption").innerHTML = nombre

    return alert(`Hola ${nombre}, tu número de la suerte es ${numeroDeSuerte}`)

}

let crearTarjetas = function () {

    comprobarTexto = (text) => {
        if (text.length > 8) return console.error("Se aceptan textos menores a 8 caracteres")        
    }

    const $template2 = document.getElementById("template-card3").content
    const $fragment2 = document.createDocumentFragment()
    let textos = []


    let primerTexto = prompt("Escriba el nombre de la primera tarjeta")
    let segundoTexto = prompt("Escriba el nombre de la segunda tarjeta")
    let tercerTexto = prompt("Escriba el nombre de la tercera tarjeta")


    comprobarTexto(primerTexto)
    comprobarTexto(segundoTexto)
    comprobarTexto(tercerTexto)

    let imagenes = ["https://placeimg.com/200/200/random", "https://placeimg.com/200/200/random","https://placeimg.com/200/200/random"]

  
    textos.push(primerTexto,segundoTexto,tercerTexto)

    for (let i = 0; i <= 3; i++){

        $template2.querySelector("h1").textContent = textos[i]
        $template2.querySelector("p").textContent = textos[i]
        $template2.querySelector("img").setAttribute("src",imagenes[i])

        let $clone2 = document.importNode($template2, true)

        $fragment2.appendChild($clone2)

    }

    $body.appendChild($fragment2)

    let $cloneCard = $fragment2.cloneNode(true)


}

btn1.addEventListener("click", (e) => {

  /*   alert("Estas tocando el boton")
    saludar(name1)
    numeroSuerte() */
    crearTarjetas()

})