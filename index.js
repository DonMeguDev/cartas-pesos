//Elementos Nico
const puntajeNico = document.getElementById('puntajeNico');
const botonMenosNico = document.getElementById('botonMenosNico');
const botonMasNico = document.getElementById('botonMasNico');
const totalNico = document.getElementById('totalNico');
const dolaresNico = document.getElementById('dolaresNico');
const botonAgregarNico = document.getElementById('botonAgregarNico');

//Elementos Fran
const puntajeFran = document.getElementById('puntajeFran');
const botonMenosFran = document.getElementById('botonMenosFran');
const botonMasFran = document.getElementById('botonMasFran');
const totalFran = document.getElementById('totalFran');
const dolaresFran = document.getElementById('dolaresFran');
const botonAgregarFran = document.getElementById('botonAgregarFran');


let pNico = 0;
let pFran = 0;
let dNico = 0;
let dFran = 0;

botonMenosNico.addEventListener('click', () => {
    if(pNico > 0){
        pNico--;
    }
    puntajeNico.innerHTML = pNico;
});

botonMasNico.addEventListener('click', () => {
    pNico++;
    puntajeNico.innerHTML = pNico;
});

botonMenosFran.addEventListener('click', () => {
    if(pFran > 0){
        pFran--;
    }
    puntajeFran.innerHTML = pFran;
});

botonMasFran.addEventListener('click', () => {
    pFran++;
    puntajeFran.innerHTML = pFran;
});

botonAgregarNico.addEventListener('click', () => {
    if(dolaresNico.value > 0){
        dNico = dNico + parseFloat(dolaresNico.value);
        totalNico.innerHTML = '$' + formatoPesos(dNico.toFixed(2)) + ' CLP';
    }
    dolaresNico.value = '';
});

botonAgregarFran.addEventListener('click', () => {
    if(dolaresFran.value > 0){
        dFran = dFran + parseFloat(dolaresFran.value);
        totalFran.innerHTML = '$' + formatoPesos(dFran.toFixed(2)) + ' CLP';
    }
    dolaresFran.value = '';
});

const formatoPesos = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    let arr = number.toString().split('.');
    arr[0] = arr[0].replace(exp,rep);
    return arr[1] ? arr.join('.'): arr[0];
  }
