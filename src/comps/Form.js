import React, {useState, useEffect, useRef} from 'react'

function Form(props) {
const [input, setInput] = useState(props.edit ? props.edit.value : '');

const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus();
})

const handleChange = e => {
  setInput(e.target.value);
};

const handleSubmit = e => {
  e.preventDefault();

  props.onSubmit({
    id: Math.floor(Math.random() * 10000),
    text: input
  });

  setInput('');
};

  return (
    <form className="form" onSubmit={handleSubmit}>
      {props.edit ? ( 
      <React.Fragment>
      <input 
      type="text" 
      placeholder="Update item" 
      value={input} 
      name="text" 
      className="input edit"
      onChange={handleChange}
      ref={inputRef} />
      <button className="button edit">Update</button>
      </React.Fragment> ) :
      ( 
      <React.Fragment>
      <input 
        type="text" 
        placeholder="Add todo" 
        value={input} 
        name="text" 
        className="input"
        onChange={handleChange}
        ref={inputRef} />
        <button className="button">Add</button>
        </React.Fragment> )}
      
    </form>
  )
}

export default Form
