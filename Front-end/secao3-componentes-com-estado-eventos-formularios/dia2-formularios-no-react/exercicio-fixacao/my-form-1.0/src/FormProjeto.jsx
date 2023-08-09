import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, onInputChance, onSaveButtonClick } = this.props; 
    return (
      <div>
          <input
            type='text'
            data-testid="name-input"
            value={cardName}
            onChange={onInputChance}
            />
        <label>
          <textarea
            data-testid="description-input"
            value={cardDescription}
            onChange={onInputChance}
            />
        </label>
        <input
          type='number'
          data-testid="attr1-input"
          value={cardAttr1}
          onChange={onInputChance}
          />
         
        <input
          type='number'
          data-testid="attr2-input"
          value={cardAttr2}
          onChange={onInputChance}
          />
         
        <input
          type='number'
          data-testid="attr3-input"
          value={cardAttr3}
          onChange={onInputChance}
          />
         
        <input
          type='text'
          data-testid="image-input"
          value={cardImage}
          onChange={onInputChance}
          />
        
        <label for="select-options"></label>
        <select
          name="select-options"
          id="select-options"
          data-testid="rare-input"
          value={cardRare}
          onChange={onInputChance}>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>

        <input
            type="checkbox"
            data-testid="triunfo-input"
            checked={cardTrunfo}
            onChange={onInputChance}
          />
        <button
          type='button'
          data-testid="save-button"
          disabled={isSaveButtonDisabled}
          onClick={onSaveButtonClick}
          />
        
      </div>
   )
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChance: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
} 

export default Form;