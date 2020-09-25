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