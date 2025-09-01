import React, { useRef } from "react";

function Ref() {
  const name = useRef();
  const img = useRef();

  const TextModify = () => {
    console.log(name);
    console.log(name.current);
    name.current.style =
      "background:red;color:white;border:2px solid green;outline:2px solid green";
  };

  const Customize = () => {
    console.log(img.current);
    img.current.style = "border:5px solid red;border-radius:50%";
  };
  return (
    <>
      <div className="container">
        <img
          ref={img}
          className="img-fluid w-25"
          src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg"
          alt=""
          onMouseOver={Customize}
        />
        <form action="" className="w-50 mx-auto">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="form-control"
            ref={name}
            onChange={TextModify}
          />
        </form>
      </div>
    </>
  );
}

export default Ref;
