console.log('HELLO!');

var element = document.getElementById('titulo1');
element.addEventListener('click', function(){

  //crearParrafo();
})

element.addEventListener('mouseover',function(){

  element.classList.add("newcolor")
})


// var listas = document.getElementsByTagName('li')
// console.log(listas)

var list = document.querySelectorAll('#menu li');
console.log(list);

var list2 = document.querySelectorAll('ul a');
console.log(list2);

var list3 = document.querySelectorAll('aside li:nth-child(even)');
console.log(list3);

function crearParrafo() {
  const nuevoParrafo = document.createElement('p');

  // Agregar contenido al párrafo
  nuevoParrafo.textContent = 'Este es un nuevo párrafo creado con JavaScript';

  // Agregar el párrafo al elemento body del documento
  document.body.appendChild(nuevoParrafo);
}

function addLink(){
  //const newlink = document.createElement('a')
 // newlink.textContent = 'nuevoenlace'
  const newlistitem = document.createElement('li')
  //newlistitem.appendChild(newlink)
  newlistitem.innerHTML = "<a href='https://google.com'> google </a>"
  let elementolist = document.getElementById('listaenlaces')
  elementolist.appendChild(newlistitem)
}

