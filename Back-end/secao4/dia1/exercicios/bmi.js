const readline = require('readline-sync');

const peso = readline.questionFloat('Qual é o seu peso? Em kg ');

const altura = readline.questionFloat('Qual é a sua altura? Em metros ');

const calculaBMI = () => {
    
    const calculoBMI = peso / (altura * altura);
    const BMI = calculoBMI.toFixed(2);

    if(BMI < 18.5){
        console.log(`O seu IMC é de ${BMI} e você está na categoria: Abaixo do peso`);
        return;
    }
    if(BMI >= 18.5 && BMI < 24.9){
        console.log(`O seu IMC é de ${BMI} e você está na categoria: Peso normal`);
        return;
    }
    if(BMI >= 25,0 && BMI < 29,9){
        console.log(`O seu IMC é de ${BMI} e você está na categoria: Acima do peso`);
        return;
    }
    if(BMI >= 30,0 && BMI < 34,9){
        console.log(`O seu IMC é de ${BMI} e você está na categoria: Obesidade grau I`);
        return;
    }
    if(BMI >= 35,0 && BMI < 39,9){
        console.log(`O seu IMC é de ${BMI} e você está na categoria: Obesidade grau II`);
        return;
    }

    console.log(`O seu IMC é de ${BMI} e você está na categoria: Obesidade graus III e IV`);

}

calculaBMI();