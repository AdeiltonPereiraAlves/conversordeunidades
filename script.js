import{quilometros, metros, centimetros, milimetros} from './funcoes.js';


const converter = document.querySelector('#converter')
const qntInput = document.querySelector('#qnt')
const medida1Input= document.querySelector('#medida1')
const medida2Input = document.querySelector('#medida2')
const resultado = document.querySelector('#resultado')


converter.addEventListener('click',(e) => {
    e.preventDefault()
    const qnt =  parseFloat(qntInput.value);
    qntInput.value = ''
    const medida1 = medida1Input.value;
    console.log(medida1)
    const medida2 = medida2Input.value;
    console.log(medida2)
    if(medida1 === "Quilometros"){
        const res = quilometros(qnt,medida1, medida2)
        console.log(res)
    
        resultado.innerText = res;

    }
    if(medida1 === "Metros"){
        const res = metros(qnt,medida1, medida2)
        console.log(res)
    
        resultado.innerText = res;
    }
    if(medida1 === "Centimetros"){
        const res = centimetros(qnt,medida1, medida2)
        console.log(res)
    
        resultado.innerText = res;
    }
    if(medida1 === "Milimetros"){
        const res = milimetros(qnt,medida1, medida2)
        console.log(res)
    
        resultado.innerText = res;
    }
    
  
    
    
    
    
})