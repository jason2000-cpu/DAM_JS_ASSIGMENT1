
let username = document.getElementById('name');
let btn = document.getElementById('btn');
let paragraph = document.getElementById('text');

function Greeting(){
  btn.addEventListener('click', ()=>{
    paragraph.innerText = `Hello ${username.value} welocome bootcamp`
  })
}

Greeting();
