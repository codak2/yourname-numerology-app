import {useState} from "react";
import validateName from "./utils/validateName";
import nameToNumber from "./utils/nameToNumber";
import './App.css'

function App() {

  const [name, setName] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const imgLink = `../src/assets/nameNumber${result}.png`;

  const handleNameChange = (e) =>{
    let newName = e.target.value
    setName(newName)
    console.log(newName);
  }
  
  const handleSubmitbtn = () =>{
    let result = validateName(name)
    if (result.valid){
      setError('')
      setResult(nameToNumber(name))
      console.log("Valid Name: ", name)
      console.log("number = ",nameToNumber(name));
    }
    else{
      setError(result.error)
      setResult('')
      console.error("Invalid name:", result.error);
    }
  }

  return (
    <>
    <div className="input-container">

      <input 
      id="NameInput"
      type="text" 
      value={name}
      onChange={handleNameChange}
      placeholder='Enter your full name' />

      <button 
      id="submit-btn"
      type="submit"
      onClick={handleSubmitbtn}
      >Submit</button>
      </div>

      <div id="OutputContainer">
        {(error != '') && error}
        {(result != '') && (<img src={imgLink} className="nameNumberImage" alt="nameNumberImageDetails"/>) }
      </div>
      
    </>
  )
}

export default App