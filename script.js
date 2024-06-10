document.querySelector('#push').onclick = function(){
    if(document.querySelector('#taskinp').Value.length == 0){
        alert("please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
        <span id="taskname">
        ${document.querySelector ('#taskinp'). value}
        </span>
        <button class="delete">
        <i class="far fa-trash-alt"></i>
        </button>
        </div>

        `; 
    }
}