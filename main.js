const somar = document.querySelector('#somar');
const subtrair = document.querySelector('#subtrair');
const braco = document.querySelector('#braço');
const controle = document.querySelectorAll('.controle-ajuste');

//=========================================================//

//Passando por todos os elementos do controle e criando um escutador a cada momento que ele passa pelos elementos.
controle.forEach(function(elemento){
    elemento.addEventListener('click',(e)=>{
        const el = e.target.textContent; // .textContent pega o texto que estar escrito nesse elemento.
                                        // se fosse um elemento input seria (.value) ao inves de textContent
        manipulandoDados(el);

    })
})


function manipulandoDados (operacao){
    if(operacao === '+'){
        .value = parseInt(braco.value) + 1
    }
    if(operacao === '-'){
        braco.value = parseInt(braco.value) - 1
    }
    
}
