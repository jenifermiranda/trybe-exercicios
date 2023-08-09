import React from 'react';
import './App.css';
import './Form.css';

class Form extends React.Component {
  state = {
    comidaFavorita: '',
    nome: '',
    idade: 0,
    dia: '',
  }

  handleTextAreaChange = (event) => {
    console.log(event.target);
  }

  render() {
    return (
      <div className="App">
        <h1>Meu Formulário</h1>
        <form className='form'>
          <label>
            Escreva qual é a sua comida favorita.
            <textarea name='comidaFavorita' onChange={this.comidaFavorita} />
          </label>
          <p></p>
          <label>
            Nome:
            <input type='text' name='nome' />
          </label>
          <p></p>
          <label>
            Idade:
            <input type='number' name='idade' />
          </label>
          <p></p>
          <label for='dia'>Qual o período do dia você mais gosta?</label>
          <select name='dia' id='dia'>
            <option value='manha'>Manhã</option>
            <option value='tarde'>Tarde</option>
            <option value='noite'>Noite</option>
          </select>
        </form>
      </div>
    );
  }
}
export default Form;
