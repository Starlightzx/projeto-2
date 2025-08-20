const form = window.document.getElementById('form')
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    const userName = window.document.getElementById('nomeUsuario')
    const userNumber = window.document.getElementById('numeroUsuario')

    let linha = `<tr>`;
    linha += `<td>${userName.value}</td>`;
    linha += `<td>${userNumber.value}</td>`;
    linha += `</tr>`;

    linhas += linha

    const tbody = window.document.querySelector('tbody')
    tbody.innerHTML = linhas
})