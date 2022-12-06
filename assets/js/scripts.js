const handleSubmit = (event) => {
    event.preventDefaut();

    const firstname = document.querySelector('input[name=firstname]').value;
    const lastname = document.querySelector('input[name=lastname]').value;
    const email = document.querySelector('input[name=email]').value;
    const number = document.querySelector('input[name=number]').value;
    const nascimento = document.querySelector('input[name=nascimento]').value;

    fetch('https://api.sheetmonkey.io/form/acuQdn5GVSTyVCM8iVpQEB', {

    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstname, lastname, email, number, nascimento }),
   });
}

document.querySelector('form').addEventListener('submit', handleSubmit);

fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementosNaPagina(json));

  function carregaElementosNaPagina(json) {
    const table = document.createElement('table');
    for(let pessoa of json) {
      const tr = document.createElement('tr');

      let td1 = document.createElement('td');
      td1.innerHTML = pessoa.nome;
      tr.appendChild(td1);

      let td2 = document.createElement('td');
      td2.innerHTML = pessoa.pontos;
      tr.appendChild(td2);

      table.appendChild(tr);
    }    

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
  }





