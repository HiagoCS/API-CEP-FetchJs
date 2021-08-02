window.onload = function(){
  const search = document.querySelector("#btn");
  const cep = document.querySelector("#cep");

  const options = {
    method: "GET",
    mode: "cors",
    cache: "default"
  }

  search.addEventListener("click", function(){
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`, options)
    .then(response => {response.json()
      .then(data => {
        document.querySelector("#rua").value = data['logradouro'];
        document.querySelector("#bairro").value = data['bairro'];
        document.querySelector("#cidade").value = data['localidade'];
        document.querySelector("#estado").value = data['uf'];
      })
    })
  });
}