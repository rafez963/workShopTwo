// declaramos las funcion para obtener los datos del usuario: 

function datosUsuario(){
    let nivelEnergia = Number(prompt("¿Cual es tu nivel de energia hoy? : "))
    let clime =  prompt("¿Como esta el clima hoy? ('soleado' - 'lluvioso' : )")
    let trabajo = prompt("Tines trabajo para el dia de hoy: ('si' o 'no') : ")
    let tienesTrabajo = trabajo.toLowerCase() === 'si' 

    return {nivelEnergia, clime, tienesTrabajo}
}

let solicitarDatos =  datosUsuario()
//funcion para determinar si es viable o no salir a correr o quedar a trabajar

function decision(solicitarDatos){
    if(!solicitarDatos.nivelEnergia || solicitarDatos.nivelEnergia === 0){
        console.log("EL usuario esta cansado, toma el dia libre")
    }else if(solicitarDatos.clime){
        console.log(`el clima esta ${solicitarDatos.clime} para salir hoy a correr`)
    }else if(solicitarDatos.trabajo){
        console.log(`¿El usuario tiene trabajo? ${solicitarDatos.tienesTrabajo} , ya sabes lo que tienes que hacer. Dale con toda`)
    }else{
        console.log("Al parecer nos quedaremos relajados")
    }
}

decision(solicitarDatos);