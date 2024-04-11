import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [signupdata, setsignupdata] = useState({});

  let navigate = useNavigate();

  let handlefunction = ({ target: { value, name } }) => {
    setsignupdata({ ...signupdata, [name]: value });
    console.log(signupdata);
  };

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let { data, status } = await axios.post(
        `http://localhost:5656/api/signup`,
        signupdata
      );
      console.log(data);
      if (status === 201) {
        navigate("/");
        alert("Signed Up Successfully! Please Login to Continue.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fname">First Name : </label>
        <input
          type="text"
          id="fname"
          name="firstNmae"
          onChange={handlefunction}
        />
      </div>

      <div>
        <label htmlFor="lname">Last Name : </label>
        <input
          type="text"
          id="lname"
          name="lastName"
          onChange={handlefunction}
        />
      </div>

      <div>
        <label htmlFor="phoneNo">Phone Number : </label>
        <input
          type="number"
          id="phoneNo"
          name="phoneNumber"
          onChange={handlefunction}
        />
      </div>

      <div>
        <label htmlFor="email">Email : </label>
        <input type="email" id="email" name="email" onChange={handlefunction} />
      </div>

      <div>
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handlefunction}
        />
      </div>

      <div>
        <label htmlFor="cpassword">Confirm Password : </label>
        <input
          type="password"
          id="cpassword"
          name="cpassword"
          onChange={handlefunction}
        />
      </div>

      <div>
        <input type="checkbox" name="" id="gaga" />
        <label htmlFor="gaga">something here</label>
      </div>

      <div>
        <input type="checkbox" name="" id="baba" />
        <label htmlFor="baba">something here too</label>
      </div>

      <div>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
}

export default SignUp;
