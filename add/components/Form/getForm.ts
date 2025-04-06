import "./Form.css";

const getForm = (): HTMLElement => {
  const formElement = document.createElement("form");

  formElement.innerHTML = `
  <fieldset class='form-container'>
    <legend>Fill in all fields to add a new monument</legend>  
    <label for='name'>Monument Name: </label>
    <input type='text' id='name' required/>
    <label for='description'>Monument Description: </label>
    <input type='text' id='description' required/>
    <label for='imageUrl'>Monument Image URL: </label>
    <input type='url' id='imageUrl' required/>
    <label for='country'>Monument Country: </label>
    <input type='text' id='country' required/>
    <label for='city'>Monument City: </label>
    <input type='text' id='city' required/>
    <button type='submit'>Submit New Monument</button>
  </fieldset>
`;

  return formElement;
};

export default getForm;
