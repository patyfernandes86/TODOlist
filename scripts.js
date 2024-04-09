const input = document.querySelector('.input')
const addButton = document.querySelector('.add')
const container = document.querySelector('.container')

function addTarefa(nome) {
    const itemTarefa = document.createElement('div')
    itemTarefa.classList.add('item')
    
    const inputTarefa = document.createElement('input')
    inputTarefa.type = 'text'
    inputTarefa.disabled = true
    inputTarefa.value = nome
    inputTarefa.classList.add('item-input')

    const editButton = document.createElement('button')
    editButton.classList.add('edit')
    editButton.innerText = 'EDITAR'
    editButton.addEventListener('click', () => editTarefa(inputTarefa, nome))
    

    const removeButton = document.createElement('button')
    removeButton.classList.add('remove')
    removeButton.innerText = 'REMOVER'
    removeButton.addEventListener('click', () => removerTarefa(itemTarefa, nome))


    container.append(itemTarefa)
    itemTarefa.append(inputTarefa)
    itemTarefa.append(editButton)
    itemTarefa.append(removeButton)
    
    
}

function editTarefa(inputTarefa,nome) {}
function removerTarefa(item, nome) {
    item.parentNode.removeChild(item)
}

function checkInput(){
    const inputValue = input.value
    if (inputValue !==''){
        addTarefa(inputValue)
        input.value = ''
        input.focus()
    }
}

addButton.addEventListener('click', checkInput)
input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        checkInput
    }
})