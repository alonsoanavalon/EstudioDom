// crear input que como output agregue un elemento a una lista

// crear input y button

// crear template

// 


const $body = document.body
const $html = document.documentElement
const $templateCard = document.getElementById("template-card").content
const $fragmentCard = document.createDocumentFragment()

const $inputText = document.getElementById("add-name")


const datos = []

document.addEventListener("click", (e) => {

    if(e.target.matches("#btn-add")) {

        class Card {
            constructor(nombre,edad,img){
                this.nombre = nombre
                this.edad = edad
                this.img = img
            }

          
        }

        let cadenaValida = true;

        comprobarCadena = (cadena = undefined) => {

          

            if (cadena === undefined) return alert("Escriba una cadena válida")
            if (typeof cadena !== "string") return alert("No ha escrito una cadena")

            if (/^[0-9]$/ig.test(cadena)) {
                alert("No se aceptan números")
                cadenaValida = false;
                console.log(cadenaValida)
            } 
         
        }

        let imagenValida = false;

        comprobarImagen = (cadena = undefined) => {

            comprobarCadena(cadena)

           

            if (cadena == 'tech' || cadena == 'nature' || cadena == 'animals' || cadena == 'random') {

               imagenValida = true;

            } else {
                alert("No ha ingresado una imágen válida: tech-nature-random-animals")
            }
            



        }


       /*  while(datos.length < 3) { */

        

            let nombre = document.getElementById("add-name").value     
        
            comprobarCadena(nombre)

    
            let edad = document.getElementById("add-age").value
    
  
            let img = document.getElementById("add-img").value
    
            comprobarImagen(img)
    

       /*  } */

       console.log(cadenaValida + " " + imagenValida)

    
       if (cadenaValida === true && imagenValida === true) {
        $templateCard.querySelector("img").setAttribute("src", `https://placeimg.com/200/200/${img}`)
        $templateCard.querySelector("img").setAttribute("alt", img)
        $templateCard.querySelector("figcaption").textContent = img
        $templateCard.querySelector("h1").innerHTML = `Nombre :${nombre} Edad: ${edad}`

        let $clone = document.importNode($templateCard, true)

        $fragmentCard.appendChild($clone)

        $body.appendChild($fragmentCard)

        datos.push(new Card (nombre,edad,img))
        
  
    }

    console.log(datos)

    datos.forEach(n => console.log(n.img))

    


    

        /* datos.forEach(element => { */

        


        /* }) */


        // Acá si lo hago con forEach significa que debo tener un array de objetos creados a partir de una clase, si es que tengo eso quiere decir que cada appendChild a partir de fragmentCard estará hecho a partir de un array, por lo que repetirá los elementos creados en cada nueva inserción (el array se imprimiria primero con 1 elemento, luego 2 elementos, luego 3... no 1 , 1 , 1, por eso es mejor hacerlo sin array para añadir infinitos)


       

    





    }


})

document.addEventListener("click", (e) => {

    if(e.target.matches("#btn-print")){

        const $getImg = document.getElementById("get-img")

        let generoBuscado = $getImg.value

        let datosFiltrados = [];

      

        if(generoBuscado == 'nature') {
            let datosFiltrados = datos.filter(elemento => elemento.img == 'nature')
            datosFiltrados.forEach(e => {

            

                $templateCard.querySelector("h1").innerHTML = `Nombre:${e.nombre}`
                $templateCard.querySelector("img").setAttribute("src", innerHTML = `https://placeimg.com/200/200/${e.img}`)
                $templateCard.querySelector("img").setAttribute("alt", e.img)
                $templateCard.querySelector("figcaption").innerHTML = e.img
    
                let $clone = document.importNode($templateCard, true)
                $fragmentCard.appendChild($clone)
            })
    
            $body.appendChild($fragmentCard)
        }

        if (generoBuscado == 'tech') {
            let datosFiltrados = datos.filter(elemento => elemento.img == 'tech')
            datosFiltrados.forEach(e => {

            

                $templateCard.querySelector("h1").innerHTML = `Nombre:${e.nombre}`
                $templateCard.querySelector("img").setAttribute("src", innerHTML = `https://placeimg.com/200/200/${e.img}`)
                $templateCard.querySelector("img").setAttribute("alt", e.img)
                $templateCard.querySelector("figcaption").innerHTML = e.img
    
                let $clone = document.importNode($templateCard, true)
                $fragmentCard.appendChild($clone)
            })
    
            $body.appendChild($fragmentCard)
        }

        if (generoBuscado == 'random'){
            let datosFiltrados = datos.filter(elemento => elemento.img == 'random')
            datosFiltrados.forEach(e => {

            

                $templateCard.querySelector("h1").innerHTML = `Nombre:${e.nombre}`
                $templateCard.querySelector("img").setAttribute("src", innerHTML = `https://placeimg.com/200/200/${e.img}`)
                $templateCard.querySelector("img").setAttribute("alt", e.img)
                $templateCard.querySelector("figcaption").innerHTML = e.img
    
                let $clone = document.importNode($templateCard, true)
                $fragmentCard.appendChild($clone)
            })
    
            $body.appendChild($fragmentCard)
        }
        
        if (generoBuscado == 'animals'){
            let datosFiltrados = datos.filter(elemento => elemento.img == 'animals')
            datosFiltrados.forEach(e => {

            

                $templateCard.querySelector("h1").innerHTML = `Nombre:${e.nombre}`
                $templateCard.querySelector("img").setAttribute("src", innerHTML = `https://placeimg.com/200/200/${e.img}`)
                $templateCard.querySelector("img").setAttribute("alt", e.img)
                $templateCard.querySelector("figcaption").innerHTML = e.img
    
                let $clone = document.importNode($templateCard, true)
                $fragmentCard.appendChild($clone)
            })
    
            $body.appendChild($fragmentCard)
        }

        console.log(datosFiltrados)


        datosFiltrados.forEach(e => {

            

            $templateCard.querySelector("h1").innerHTML = `Nombre:${e.nombre}`
            $templateCard.querySelector("img").setAttribute("src", innerHTML = `https://placeimg.com/200/200/${e.img}`)
            $templateCard.querySelector("img").setAttribute("alt", e.img)
            $templateCard.querySelector("figcaption").innerHTML = e.img

            let $clone = document.importNode($templateCard, true)
            $fragmentCard.appendChild($clone)
        })

        $body.appendChild($fragmentCard)

    }

  


})





/* const imprimirGenero = (img) => {
    let titulo = document.createElement("h1")
    titulo.innerHTML = img
    
    let imagen = document.createElement("img")
    imagen.setAttribute("src", innerHTML = `https://placeimg.com/200/200/${img}`)


    let generosAceptados = ["nature", "random","tech","animals"]

            if (img === 'nature') {
                let datosNature = datos.filter(element => element.img == 'nature')

                console.log(datosNature)
            }
   
   
}

imprimirGenero("nature") */






