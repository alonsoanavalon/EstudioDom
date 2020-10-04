const $body = document.body
const $html = document.documentElement

//Elementos suma
let $numSuma1 = document.getElementById("input1-div1").value
let $numSuma2 = document.getElementById("input2-div1").value
const $btnSuma = document.getElementById("btn1-div1")
const $resultSuma = document.getElementById("result1-div1")


document.addEventListener("click" , (e) => {

    if (e.target.matches("#btn1-div1")){
        

        $numSuma1 = document.getElementById("input1-div1").value
        $numSuma2 = document.getElementById("input2-div1").value
        let esString = ""

        if ($numSuma1.length == 0 || $numSuma2.length == 0){
            return false;
        }

       

       

        let newArray = $numSuma1.split("")

        let nuevoArray = newArray.map(n => parseFloat(n))

        let newArray2 = $numSuma2.split("")
    
        let nuevoArray2 = newArray2.map(n => parseFloat(n))

        let tremendoArray = [...nuevoArray,...nuevoArray2]

        console.log("tremendo array " + tremendoArray)

  /*       console.log(nuevoArray) */

        setTimeout(() => {

           let contador = 0;

           for (n of tremendoArray){
               if (isNaN(n)) contador++
           
           }

           if (contador>0){
            console.log("contador es mayor a 0")
            alert("Solo escriba numeros")
            } else {
                $resultSuma.innerHTML = parseFloat($numSuma1) + parseFloat($numSuma2)
            }

        },100)
       
        
        

    }

   


})



document.addEventListener("click", (e) => {
    if (e.target.matches("#btn1-div2")){

        let $numPrimo = document.getElementById("input1-div2").value

        const $resultPrimo = document.getElementById("result1-div2")

        $numeroPrimo = $numPrimo.split("")

        $numeroPrimoMap = $numeroPrimo.map(n => parseFloat(n))

        setTimeout(() => {

            console.log($numeroPrimoMap)

        },10)


        

    


        setTimeout(() => {

            let esPrimo = false;

            let contador = 0;
 
            for (n of $numeroPrimoMap){
                if (isNaN(n)) contador++
            
            }
 
            if (contador>0){
             console.log("contador es mayor a 0")
             alert("Solo escriba numeros")
             } else {

                if ($numPrimo == 2) esPrimo = true;
                 
                 for (let i = 2; i< $numPrimo;i++){
                     if ($numPrimo % i === 0) {
                         esPrimo = true;
                     } 
            
                 }
             }

             if (esPrimo) {
                 $resultPrimo.innerHTML = "El numero no es primo"
             } else {
                $resultPrimo.innerHTML = "El numero es primo"
             }
 
         },100)
    }
})

