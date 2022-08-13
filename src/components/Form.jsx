import { useState } from "react";

const Form = () => {

  const preset = {
    username: "Boki",
    password: "123",

  }

  const [forma, setForma] = useState(preset);


  return (
    <form>
      <div>
        <h2>Test  FORM</h2>

        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
          />
        </div>
      </div>
    </form>
  )
};
export default Form;