const tipoProblema = document.getElementById('tipoProblema');
const distanciaFields = document.getElementById('distanciaFields');
const tiempoFields = document.getElementById('tiempoFields');
const velocidadFields = document.getElementById('velocidadMRU'); // Nuevo campo
const btnCalcularDistanciaMRU = document.getElementById('btnCalcularDistancia')
const btnCalcularTiempoMRU = document.getElementById('btnCalcularTiempoMRU')
const btnCalcularVelocidaMRU = document.getElementById('btnCalcularVelocidadMRU')
const tipoRespuesta = document.getElementById('tipoRespuestaMRU')
const resultadoCalculado = document.getElementById('resultadoCalculoMRU')
const imgRespuestaMRU = document.getElementById('imgRespuestaMRU')
const spn_mensaje_respuesta = document.getElementById('mensaje-respuesta')
//PARA LO DE MRUV
const tipoProblemaMRUV = document.getElementById('tipoProblemaMRUV');
const formVelocidadInicial_snDis = document.getElementById('formVelocidadInicial_snDis')
const formVelocidadFinal_snDis = document.getElementById('formVelocidadFinal_snDis')
const formTiempo_snDis = document.getElementById('formTiempo_snDis')
const formAceleracion_snDis = document.getElementById('formAceleracion_snDis')
const tipoRespuestaMRUV = document.getElementById('tipoRespuestaMRUV')
const resultadoCalculadoMRUV = document.getElementById('resultadoCalculoMRUV')
const btCalcularTiempoSnDisMRUV = document.getElementById('btCalcularTiempoSnDisMRUV')
const btCalcularAceleracionSnDisMRUV = document.getElementById('btCalcularAceleracionSnDisMRUV')
const mensaje_respuestaMRUV = document.getElementById("mensaje-respuestaMRUV")
velocidadFields.style.display = 'none';
tipoProblema.addEventListener('change', () => {
   // label.textContent = ''
    if (tipoProblema.value === 'distancia') {
        distanciaFields.style.display = 'block';
        tiempoFields.style.display = 'none';
        velocidadFields.style.display = 'none'; // Ocultar campo de velocidad
    } else if (tipoProblema.value === 'tiempo') {
        distanciaFields.style.display = 'none';
        tiempoFields.style.display = 'block';
        velocidadFields.style.display = 'none'; // Ocultar campo de velocidad
    } else if (tipoProblema.value === 'velocidad') {
        distanciaFields.style.display = 'none';
        tiempoFields.style.display = 'none';
        velocidadFields.style.display = 'block'; // Mostrar campo de velocidad
    }
});

tipoProblemaMRUV.addEventListener('change',()=>{
   switch (tipoProblemaMRUV.value){
    case "velocidadInicial_snDis":
        formVelocidadInicial_snDis.style.display = 'block';
        formVelocidadFinal_snDis.style.display = 'none'
        formTiempo_snDis.style.display = 'none'
        formAceleracion_snDis.style.display = 'none'
        break
    case "velocidadFinal_snDis":
        formVelocidadInicial_snDis.style.display = 'none';
        formVelocidadFinal_snDis.style.display = 'block'
        formTiempo_snDis.style.display = 'none'
        formAceleracion_snDis.style.display = 'none'
        break
    case "tiempo_snDis":
        formVelocidadInicial_snDis.style.display = 'none';
        formVelocidadFinal_snDis.style.display = 'none'
        formTiempo_snDis.style.display = 'block'
        formAceleracion_snDis.style.display = 'none'
        break
    case "aceleracion_snDis":
        formVelocidadInicial_snDis.style.display = 'none';
        formVelocidadFinal_snDis.style.display = 'none'
        formTiempo_snDis.style.display = 'none'
        formAceleracion_snDis.style.display = 'block'
        break

   }
})

//calculando distrancia MRU
btnCalcularDistanciaMRU.addEventListener('click', () => {
    spn_mensaje_respuesta.style.display='none'
    const tiempo = document.getElementById('tiempoDistancia').value
    const velocidad = document.getElementById('velocidadDistancia').value
    tipoRespuesta.textContent = 'LA DISTANCIA ES:'
    resultadoCalculado.textContent = `${redondeo(velocidad * tiempo)}m`
    imgRespuestaMRU.src = './media/images/distanciaMRU.png'

});

//calculando tiempo MRU
btnCalcularTiempoMRU.addEventListener('click', () => {
    spn_mensaje_respuesta.style.display='none'
    const distancia = document.getElementById('distanciaTiempo').value
    const velocidad = document.getElementById('velocidadTiempo').value
    tipoRespuesta.textContent = 'EL TIEMPO ES:'
    resultadoCalculado.textContent = `${redondeo(distancia / velocidad)} s`
    imgRespuestaMRU.src = './media/images/tiempoMRU.png'
});

//calculando velocidad MRU
btnCalcularVelocidaMRU.addEventListener('click', () => {
    spn_mensaje_respuesta.style.display='none'
    const tiempo = document.getElementById('tiempoVelocidad').value
    const distancia = document.getElementById('distanciaVelocidad').value
    tipoRespuesta.textContent = 'LA VELOCIDAD ES:'
    resultadoCalculado.textContent = `${redondeo(distancia / tiempo)} m/s`
    imgRespuestaMRU.src='./media/images/velocidadMRU.png'

  
});

//funciones normales 
//calcular velocidad inicial mruv
function calcularVoMRUV(){
    const vf = document.getElementById('vo_velocidadFinal_snDis').value
    const a = document.getElementById('vo_aceleracion_snDis').value
    const t = document.getElementById('vo_tiempo_snDis').value
    mensaje_respuestaMRUV.style.display = 'none'
    respuesta('LA VELOCIDAD INICIAL ES: ',vf-(a*t), 'm/s' )
}

//funciones normales 
//calcular velocidad final mruv
function calcularVfMRUV(){
    mensaje_respuestaMRUV.style.display = 'none'
    const vo = document.getElementById('vf_velocidadInicial_snDis').value
    const a = document.getElementById('vf_aceleracion_snDis').value
    const t = document.getElementById('vf_tiempo_snDis').value
    respuesta('LA VELOCIDAD FINAL ES: ', vo+(a*t), 'm/s' )
}

//Calcular tiempo
btCalcularTiempoSnDisMRUV.addEventListener('click', ()=>{
    mensaje_respuestaMRUV.style.display = 'none'
    const vo = document.getElementById('t_velocidadInicial_snDis').value
    const a = document.getElementById('t_aceleracion_snDis').value
    const vf = document.getElementById('t_velocidadFinal_snDis').value
    console.log(vo,a,vf);
    respuesta('EL TIEMPO ES: ', (vf-vo)/a, 's' )
}) 


btCalcularAceleracionSnDisMRUV.addEventListener('click',()=>{
    mensaje_respuestaMRUV.style.display = 'none'
    const vo = document.getElementById('a_velocidadInicial_snDis').value
    const t = document.getElementById('a_tiepo_snDis').value
    const vf = document.getElementById('a_velocidadFinal_snDis').value
    respuesta('LA ACELERACION ES: ', (vf-vo)/t, 'm/s2' )
})

//funciones flecha 

function redondeo(valor) {
    const residuo = valor - (Math.round(valor))
    if (residuo === 0) {
        return valor
    }
    else {
        return valor.toFixed(2)
    }
}


function respuesta(mensaje, respuesta,tipoMedida){
    tipoRespuestaMRUV.textContent = mensaje
    resultadoCalculadoMRUV.textContent = `${redondeo(respuesta)} ${tipoMedida}`
}




