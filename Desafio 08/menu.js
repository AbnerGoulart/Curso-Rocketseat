/*
    EXERCÍCIO 01 - JS ROCKETSEAT
  --- 
    solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;
- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!

*/

let numberOne = prompt(`Insira o primeiro número`)
let numberTwo = prompt(`Insira o segundo número`)
let sum = Number(numberOne)+Number(numberTwo)
let sub = Number(numberOne)-Number(numberTwo)
let multi = Number(numberOne)*Number(numberTwo)
let div = Number(numberOne)/Number(numberTwo)
let restOfDiv = Number(numberOne)%Number(numberTwo)
let isEven = sum % 2 === 0 ? "par" : "ímpar"
let isEqual = numberOne === numberTwo ? "iguais" : "diferentes"

alert(`O resultado da soma é ${sum}`);
alert(`O resultado da subtração é ${sub}`)
alert(`O resultado da multiplicação é ${multi}`)
alert(`O resultado da divisão é ${div}`)
alert(`O resto da divisão é ${restOfDiv}`)
alert(`A soma dos números é ${isEven}`)
alert(`Os números inseridos são ${isEqual}`)