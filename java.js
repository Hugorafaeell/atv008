document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('novoComentario');
  const btnAdd = document.getElementById('btnAdicionar');
  const lista = document.getElementById('listaComentarios');

  btnAdd.addEventListener('click', () => {
    const texto = input.value.trim();
    if (!texto) return alert('Digite um comentário!');

    const div = document.createElement('div');
    div.className = 'comentario';
    div.innerHTML = `
      <p>${texto}</p>
      <div>
        <button class="btnEditar">Editar</button>
        <button class="btnRemover">Remover</button>
      </div>
    `;

    lista.appendChild(div);
    input.value = '';

    // Remover comentário
    div.querySelector('.btnRemover').addEventListener('click', () => {
      div.remove();
    });

    // Editar comentário
    div.querySelector('.btnEditar').addEventListener('click', () => {
      const p = div.querySelector('p');
      const novoTexto = prompt('Edite seu comentário:', p.textContent);
      if (novoTexto !== null) p.textContent = novoTexto;
    });
  });
});
