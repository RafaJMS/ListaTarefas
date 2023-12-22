function botaoFechar(li)
{
    let span = document.createElement("span")
    let txt = document.createElement("text")

    

    span.setAttribute('class','close')
    span.setAttribute('id','excluir')
    span.appendChild(txt)
    txt.textContent = "\uD83D\uDDF5"
    
    li.appendChild(span)
    span.onclick = () => {
            span.parentElement.style.display = 'none'
    }
}

document.querySelector('ol').addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
})

function addTarefa()
{
let li = document.createElement('li')
let tarefa = document.form_main.task.value
let caixaTarefa = document.createTextNode(tarefa)
let boxTarefas = document.getElementById('lista-tarefas')

if(tarefa == null || tarefa == '' ){
    return
}else{
    boxTarefas.style.display = 'flex'
    li.appendChild(caixaTarefa)
    document.querySelector('ol').appendChild(li)
    document.form_main.task.value = ''
    
    botaoFechar(li)
}
}

document.addEventListener("keydown", function(e) {
    
    if (e.key === "Enter") {
        addTarefa()
        e.preventDefault()
    }
        return
  });
