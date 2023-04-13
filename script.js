console.log("HELLO!")

var element = document.getElementById('titulo1');
element.addEventListener('click', ()=>
  alert('clik en el titulo')
)

element.addEventListener('mouseover',function(){
  
  i = i + 1;
  console.log(i);
  element.innerHTML = i
}
)

var listas = document.getElementsByTagName('li')
console.log(listas)