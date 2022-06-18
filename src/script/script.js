const cep = document.querySelector('#cep');
const search = document.querySelector('#searchBtn');
const data = document.querySelectorAll('.data-input');
const options = {
    method: 'GET',
    mode: 'cors',
    catch: 'default'
}

function ShowNotFoundInputs(item){
    if(!item.value){
        item.value = `${item.placeholder} não encontrado`;
    }
}

search.addEventListener('click', ()=>{
    let link = `https://viacep.com.br/ws/${cep.value}/json/`;
    fetch(link, options)
    .then((res)=>{
        return res.json();
    }).then((res)=>{
        data[0].value= res.logradouro;
        data[1].value = res.bairro;
        data[2].value = res.localidade;
        data[3].value = res.uf;
        data[4].value = res.ddd;
        data.forEach(ShowNotFoundInputs);
    }).catch((error)=>{
        alert('O cep inserido é INVÁLIDO');
    });
});
