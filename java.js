document.addEventListener('DOMContentLoaded', () => {
  const btn1 = document.getElementById('btn1');
  const btn2 = document.getElementById('btn2');
  const btn3 = document.getElementById('btn3');

  const titulo = document.getElementById('titulo');
  const texto = document.getElementById('texto');
  const imagem = document.getElementById('imagem');

  btn1.addEventListener('click', () => {
    titulo.textContent = ' Opção 1';
    texto.textContent = ' primeira opção';
    imagem.src = 'img/download (1).jfif';
  });

  btn2.addEventListener('click', () => {
    titulo.textContent = ' Opção 2';
    texto.textContent = ' segunda opção';
    imagem.src = 'img/images.jfif';
  });

  btn3.addEventListener('click', () => {
    titulo.textContent = 'Opção 3';
    texto.textContent = 'terceira opção';
    imagem.src = 'img/download.jfif';
  });
});
