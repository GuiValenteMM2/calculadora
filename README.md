# calculadora
App de calculadora simples. Usando html, css e javascript.

1- Função do display : Quando apertar algum botão, seu valor será guardado,
logo depois o operador escolhido, e após o segundo número, apertar em =.

display {
    let firstNumberChosen = document.querySelector(".numberButton");
    firstNumberChosen.addEventListener('click', storeNumber());
};

