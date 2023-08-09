import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {'Jenifer Miranda'}
        </h1>
        <p>
          {'Estudante de programação na escola Trybe.'}
        </p>
        <h2>
          {'Minhas Habilidades'}
          <ul>
            <li>{'HTML'}</li>
            <li>{'CSS'}</li>
            <li>{'JavaScript'}</li>
          </ul>
        </h2>
      </div>
    );
  }
}

export default About;
