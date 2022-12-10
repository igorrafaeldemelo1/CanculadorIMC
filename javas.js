const form = document.querySelector('.form')
const res = document.querySelector('.res')
let peso = form.querySelector('.peso')
let altura = form.querySelector('.altura')

form.addEventListener('submit', init01)

function init01(evento) {
    evento.preventDefault();

    
    console.log(typeof peso)





    let kg = parseFloat(peso.value)
    let atl = parseFloat(altura.value.replace(',', '.'))
    
    
        const imc = kg / (atl * atl)


        if (imc < 18.5) {
            res.innerHTML = `<div class="resposta"> Magreza </div> `
        } if (imc >= 18.5 && imc < 24.9) {
            res.innerHTML = `<div class="resposta"> Normal  </div> `
        } if (imc >= 25 && imc < 29.9) {
            res.innerHTML = `<div class="resposta"> Sobre-Peso I</div> `
        } if (imc >= 30 && imc < 39.9) {
            res.innerHTML = `<div class="resposta"> Obesidade II</div> `
        } if (imc >= 40) {
            res.innerHTML = `<div class="resposta"> Obesidade-Grave III</div> `
        }
   
}