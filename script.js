let addMeassage = document.querySelector('.mes'),
    addButton = document.querySelector('.add'),
    addClean = document.querySelector('.clean');

let ans = localStorage.getItem('value');
document.getElementById('text').innerHTML = ans;

addButton.addEventListener('click', function(){
    localStorage.setItem('value',  addMeassage.value)
    display()
});

addClean.addEventListener('click', function(){
    document.getElementById('text').innerHTML = '';
    localStorage.removeItem('value');
})

function display(){
    document.getElementById('text').innerHTML = addMeassage.value;
}
