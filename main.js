const somar = document.querySelector('#somar');
const subtrair = document.querySelector('#subtrair');
const braco = document.querySelector('#braço');
const controle = document.querySelectorAll('.controle-ajuste');
const estatisticas = document.querySelectorAll('[data-estatistica]');



const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

//=========================================================//

//Passando por todos os elementos do controle e criando um escutador a cada momento que ele passa pelos elementos.
controle.forEach(function(elemento){
    elemento.addEventListener('click',(e)=>{    
                                        
        // manipulandoDados(e.target.textContent, e.target.parentNode);
        // .textContent pega o texto que estar escrito nesse elemento.
        // se fosse um elemento input seria (.value) ao inves de textContent

        manipulandoDados(e.target.dataset.controle, e.target.parentNode);
        atualizaEstatistica(e.target.dataset.peca);
    })
})

// e.target.parentNode = buscando o elemento pai do elemento que foi clicado.
function manipulandoDados (operacao, pai){
    const peca =  pai.querySelector('[data-contador]'); // pegando o elemento pai e buscando um de seus elementos filhos 
    if(operacao === '+'){
        peca.value = parseInt(peca.value) + 1 // atribuindo o valor a cada elemento que tenha 
    }
    if(operacao === '-'){
        peca.value = parseInt(peca.value) - 1
    }
    
}
function atualizaEstatistica(peca){   
    estatisticas.forEach((elemento)=>{
        elemento.textContent = parseInt(elemento.textContent)+ pecas[peca][elemento.dataset.estatistica];
    })

}
