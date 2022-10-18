import React, { useState } from "react";

const App = () => {
  const [fullname, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    qualification: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const { name, value } = event.target;

    setFullName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
      //   if (name === "fName") {
      //     return {
      //       fname: value,
      //       lname: preValue.lname,
      //       email: preValue.email,
      //       phone: preValue.phone,
      //     };
      //   } else if (name === "lName") {
      //     return {
      //       fname: preValue.fname,
      //       lname: value,
      //       email: preValue.email,
      //       phone: preValue.phone,
      //     };
      //   } else if (name === "email") {
      //     return {
      //       fname: preValue.fname,
      //       lname: preValue.lname,
      //       email: value,
      //       phone: preValue.phone,
      //     };
      //   } else if (name === "phone") {
      //     return {
      //       fname: preValue.fname,
      //       lname: preValue.lname,
      //       email: preValue.email,
      //       phone: value,
      //     };
      //   }
    });
  };
  const onSubmits = (event) => {
    event.preventDefault();
    alert("form submitted");
  };

  return (
    <div className="main_content">
      <form onSubmit={onSubmits}>
        <div>
          <h1>
            HELLO {fullname.fname} {fullname.lname}
          </h1>
          <br />
          <p>{fullname.email}</p>
          <p>{fullname.phone}</p>
          <p>{fullname.address}</p>
          <p>{fullname.qualification}</p>

          <input
            type="text"
            placeholder="Enter Your First Name"
            name="fname"
            value={fullname.fname}
            onChange={inputEvent}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Last Name"
            name="lname"
            value={fullname.lname}
            onChange={inputEvent}
          />
          <br />
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            value={fullname.email}
            onChange={inputEvent}
          />
          <br />
          <input
            type="number"
            placeholder="Enter Your Phone No."
            name="phone"
            value={fullname.phone}
            onChange={inputEvent}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Address"
            name="address"
            value={fullname.address}
            onChange={inputEvent}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Qualification"
            name="qualification"
            value={fullname.qualificatio}
            onChange={inputEvent}
          />
          <br />
          <button type="submit">Submit 👍</button>
        </div>
      </form>
    </div>
  );
};
export default App;
