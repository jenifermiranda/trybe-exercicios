import React, { useState } from "react";

function Form(){
  //criar o estado q vai armazenar as infos dos inputs
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState();
  return(
    <form>
      <h1>Dados Pessoais</h1>
      <label htmlFor="name">
        Nome Completo
        <span> </span>
        <input
  // value será o estado name e a função onChange será o setName. Dessa forma, tudo que for digitado no input será armazenado no estado name
          type="text"
          id="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
          />
      </label>
      <p></p>
      <label htmlFor="age">
        Idade
        <span> </span>
        <input
          type="number"
          id="age"
          value={age}
          onChange={({ target }) => setAge(target.value)}
          />
      </label>
      <p></p>
      <label htmlFor="city">
        Cidade/UF
        <span> </span>
        <input
          type="text"
          id="city"
          value={city}
          onChange={({ target }) => setCity(target.value)}
          />
      </label>
    <p>Módulo</p>
      <label htmlFor="fundamentals">
        
        <input
  // os nputs do tipo radio, além de value também precisamos adicionar o atributo checked, de modo a garantir que cada input só esteja selecionado se o valor do estado module for correspondente com o seu valor
          type="radio"
          id="fundamentals"
          name="module"
          value="Fundamentos"
          checked={module === 'Fundamentos'}
          onChange={({ target }) => setModule(target.value)}
          />
          Fundamentos
      </label>
      <p></p>
      <label htmlFor="frontend">
        
        <input
          type="radio"
          id="frontend"
          name="module"
          value="Front-end"
          checked={module === 'Front-end'}
          onChange={({ target }) => setModule(target.value)}
          />
          Front-end
      </label>
      <p></p>
      <label htmlFor="backend">
        
        <input
          type="radio"
          id="backend"
          name="module"
          value="Back-end"
          checked={module === 'Back-end'}
          onChange={({ target }) => setModule(target.value)}
          />
          Back-end
      </label>
      <p></p>
      <label htmlFor="ciencia">
        
        <input
          type="radio"
          id="ciencia"
          name="module"
          value="Ciência da Computação"
          checked={module === 'Ciência da Computação'}
          onChange={({ target }) => setModule(target.value)}
          />
          Ciência da Computação
      </label>
      <p></p>
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
        }}
      >
        Enviar
      </button>
    </form>

  );
}

export default Form;