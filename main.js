const elementoInput = document.querySelector('input')
const elementoBotao = document.querySelector('button')
const elementoLista = document.querySelector('ul')

const tarefas = []

function mostrarTarefas() {

    elementoLista.innerHTML = ''

    for (tarefa of tarefas) {

        const itemLista = document.createElement('li')
        const itemTexto = document.createTextNode(tarefa)

        itemLista.setAttribute('class', 'md1-list_item')

        const elementoLink = document.createElement('a')
        
        elementoLink.setAttribute('class','material-icons')
        
        const textoLink = document.createTextNode('delete')
        elementoLink.appendChild(textoLink)
        
        const posicaoItem = tarefas.indexOf(tarefa)
        elementoLink.setAttribute('onclick', `deletarTarefa(${posicaoItem})`)
     

        itemLista.appendChild(itemTexto)
        itemLista.appendChild(elementoLink)

        elementoLista.appendChild(itemLista)
    }
}
mostrarTarefas()

function addTarefas() {
    const tarefa = elementoInput.value

    tarefas.push(tarefa)

    elementoInput.value = ''
    mostrarTarefas()
}
elementoBotao.setAttribute('onclick', 'addTarefas()')

function deletarTarefa(posicaoItem) {
    tarefas.splice(posicaoItem, 1)
    mostrarTarefas()
}
