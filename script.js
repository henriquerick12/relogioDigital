let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function time(){
    // Pegando data
    let now = new Date();

    // Separand horarios
    let horas = now.getHours().toFixed();
    let minutos = now.getMinutes().toString().padStart(2, "0");
    let segundos = now.getSeconds().toString().padStart(2,"0");

    // Inserindo data no digital
    digitalElement.innerHTML = `${horas}:${minutos}:${segundos}`

    // Relogio analogico
    let sDeg = ((360 / 60) * segundos) - 90
    let mDeg = ((360 / 60) * minutos) - 90
    let hDeg = ((360 / 12) * minutos) - 90


    sElement.style.transform = `rotate(${sDeg}deg)`
    mElement.style.transform = `rotate(${mDeg}deg)`
    hElement.style.transform = `rotate(${hDeg}deg)`

}

setInterval(() => {
    time()
}, 1000);

time();
