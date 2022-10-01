
var Unordered_list = document.getElementById("list")
var button_submit = document.getElementById('drop')

function addItem(){
    var input_value = document.getElementById('todo-title');
    var date_value = document.getElementById('date_picker');

    var actual_input_value = input_value.value;
    var actual_date_value = date_value.value;  

    if (actual_input_value.trim() === "" || actual_date_value === ""){
        alert("fill all spaces")
    }else{
    
    var  List_elememt = document.createElement('li');
    var delete_button = document.createElement('button')

    List_elememt.innerText = actual_input_value + "  ||  "+ actual_date_value;
    delete_button.innerText = 'delete';

    input_value.value = '';
    date_value.value = '';

    List_elememt.appendChild(delete_button);
    Unordered_list.appendChild(List_elememt);

    delete_button.addEventListener('click', ()=>{
        Unordered_list.removeChild(List_elememt);
        
    })

}

}