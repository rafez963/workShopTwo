let presupuesto = Number(prompt("Ingresar tu presupuestos : "))
let costosEstimados = Number(prompt("Ingrese el costo estimado: "))
const diferencia = presupuesto - costosEstimados
const umbral = Number(prompt("INgrese el umbral estimado: "))

function


function logicaDecision(diferencia, umbral){
    if( diferencia > umbral){
        console.log("Puede considerar llevar mas articulos")
        
        if(confirm('lo quieres llevar - do you want to ')){
            
        }
        else{
            console.log("Es importante ahorrar - FELIZ VIAJE")
        }
        
    
    }else{
        console.log("El presupuesto no es sufficiente para llevar mas articulos")
    }
}

logicaDecision()