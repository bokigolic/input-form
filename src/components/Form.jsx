import { useState } from "react";

const Form = () => {

  const preset = {
    name: "Boki",
    password: "123",

  }

  const [forma, setForma] = useState(preset);



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', forma)
  }


  return (
    <form onSubmit={handleSubmit}>
    <div>
        <h2>Test  FORM</h2>

        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={forma.name}
        
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={forma.password}
           

          />
          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  )
};
export default Form;