// import {medida1,medida2} from './script.js'
//Quilometros
function KmParaMetros(qnt){
    return qnt * 1000;
}
function kmParaCen(qnt){
    return qnt * 10000;
}
function kmParaMil(qnt){
    return qnt * 100000;
}
function kmParaKm(qnt){
    return qnt;
}

function quilometros(qnt,medida1,medida2){
    if(medida1 ==="Quilometros" && medida2 === "Metros"){
        console.log(medida1)
        const res = KmParaMetros(qnt)
       return res;
    }
    
    if(medida1 ==="Quilometros" && medida2 === "Centimetros"){
        console.log(medida1)
        const res = kmParaCen(qnt)
        return res;
    }
    
    if(medida1 ==="Quilometros" && medida2 === "Milimetros"){
        console.log(medida1)
        const res = kmParaMil(qnt)
        return res;
    }
    
    if(medida1 ==="Quilometros" && medida2 === "Quilometros"){
        console.log(medida1)
        const res = kmParaKm(qnt)
        return res;
    }
}
// metros
function metrosPkm(qnt){
    return qnt / 1000;
}
function metrosPCen(qnt){
    return qnt * 100;
}
function metrosPMil(qnt){
    return qnt * 1000;
}
function metrosPMetros(qnt){
    return qnt;
}

function metros(qnt,medida1,medida2){
    if(medida1 ==="Metros" && medida2 === "Quilometros"){
        console.log(medida1)
        const res = metrosPkm(qnt)
       return res;
    }
    
    if(medida1 ==="Metros" && medida2 === "Centimetros"){
        console.log(medida1)
        const res =metrosPCen(qnt)
        return res;
    }
    
    if(medida1 ==="Metros" && medida2 === "Milimetros"){
        console.log(medida1)
        const res = metrosPMil(qnt)
        return res;
    }
    
    if(medida1 ==="Metros"&& medida2 === "Metros"){
        console.log(medida1)
        const res = metrosPMetros(qnt)
        return res;
    }
}

// centimetros
function cenPkm(qnt){
    return qnt / 100000;
}
function cenPCen(qnt){
    return qnt;
}
function cenPMil(qnt){
    return qnt * 10;
}
function cenPMetros(qnt){
    return qnt/ 100;
}

function centimetros(qnt,medida1,medida2){
    if(medida1 ==="Centimetros" && medida2 === "Quilometros"){
        console.log(medida1)
        const res = cenPkm(qnt)
       return res;
    }
    
    if(medida1 ==="Centimetros" && medida2 === "Centimetros"){
        console.log(medida1)
        const res =cenPCen(qnt)
        return res;
    }
    
    if(medida1 ==="Centimetros" && medida2 === "Milimetros"){
        console.log(medida1)
        const res = cenPMil(qnt)
        return res;
    }
    
    if(medida1 ==="Centimetros"&& medida2 === "Metros"){
        console.log(medida1)
        const res = cenPMetros(qnt)
        return res;
    }
}


// milimetros
function milPkm(qnt){
    return qnt / 1000000;
}
function milPCen(qnt){
    return qnt/ 10;
}
function milPMil(qnt){
    return qnt ;
}
function milPMetros(qnt){
    return qnt/ 1000;
}

function milimetros(qnt,medida1,medida2){
    if(medida1 ==="Milimetros" && medida2 === "Quilometros"){
        console.log(medida1)
        const res = milPkm(qnt)
       return res;
    }
    
    if(medida1 ==="Milimetros" && medida2 === "Centimetros"){
        console.log(medida1)
        const res =milPCen(qnt)
        return res;
    }
    
    if(medida1 ==="Milimetros" && medida2 === "Milimetros"){
        console.log(medida1)
        const res = milPMil(qnt)
        return res;
    }
    
    if(medida1 ==="Milimetros"&& medida2 === "Metros"){
        console.log(medida1)
        const res = milPMetros(qnt)
        return res;
    }
}

export{
    quilometros, metros, centimetros, milimetros
}