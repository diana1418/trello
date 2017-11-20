/* Obteniendo datos*/
var addList = document.getElementById('addList');
var text = document.getElementById('text');

window.addEventListener('load', function() {
  /* Creando una funcion que me permita añadir una lista*/
  text.addEventListener('click', function() {
    var textArea = document.createElement('textarea');
    var btn = document.createElement('button');
    var icon = document.createElement('span');
    var divg = document.createElement('div');
    btn.textContent = 'Añadir lista';
    icon.textContent = 'X';
    divg.appendChild(textArea);
    divg.appendChild(btn);
    divg.appendChild(icon);
    addList.appendChild(divg);
    addList.removeChild(text);

    btn.addEventListener('click', function() {
      var paragraph = document.createElement('p');
      var box = document.createElement('div');
      var box2 = document.createElement('div');
      var text1 = document.createElement('span');
      box.classList.add('left');
      paragraph.textContent = textArea.value;
      textArea.value = '';
      box.appendChild(paragraph);
      text1.textContent = 'Añadir tarea';
      box2.appendChild(text1);
      box.appendChild(box2);
      addList.insertBefore(box, divg);

      text1.addEventListener('click', function() {
        var tArea = document.createElement('textarea');
        var text2 = document.createElement('span');
        var button = document.createElement('button');
        text2.textContent = 'x';
        button.textContent = 'añadir';
        box2.appendChild(tArea);
        box2.appendChild(button);
        box2.appendChild(text2);
        box2.removeChild(text1);

        button.addEventListener('click', function() {
          var paragraph2 = document.createElement('p');
          paragraph2.textContent = tArea.value;
          tArea.value = '';
          box.insertBefore(paragraph2, box2);
        });
      });
    });
  });
});

