//INDENTIFICAR UM ELEMENTO
const NOME = document.querySelectorAll('#nome-entrada')
const N1 = document.querySelectorAll('#n1-entrada')
const N2= document.querySelectorAll('#n2-entrada')
const N3 = document.querySelectorAll('#n3-entrada')
const BOTAO = document.querySelectorAll('.enviar')


//ADICIONAR EVENTO
BOTAO.addEventListener('click', salvar_dados)

//CRIAR FUNÇÃO
function salvar_dados(){
    localStorage.setItem('n1',N1.value)
    localStorage.setItem('n2',N2.value)
    localStorage.setItem('n3',N3.value)
    localStorage.setItem('nome',NOME.value)
}