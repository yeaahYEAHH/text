let addMeassage = document.querySelector('.mes'),
    addButton = document.querySelector('.add');

addButton.addEventListener('click', function(){
    document.getElementById('text').innerHTML = addMeassage.value;

});

