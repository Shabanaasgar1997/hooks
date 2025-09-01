import React, { useEffect, useState } from "react";

function Effect() {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState([]);
  let URL = "https://fakestoreapi.com/products";

  const Increase = () => {
    setCount(count + 1);
  };
  const Decrease = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };
  //   const Multiply = () => {
  //     console.log("********************");
  //   };
  useEffect(() => {
    console.log("**********");
  }, [count]);

  async function FetchData() {
    let res = await fetch(URL);
    let result = await res.json();
    console.log(res);
    console.log(result);
    setProduct(result);
  }

  useEffect(() => {
    FetchData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {product.map((item) => {
            return (
              <>
                <div className="col-lg">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={item.image}
                      alt=""
                      className="card-img-top img-fluid"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <h5>{item.price}</h5>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* {Multiply()} */}
      <button className="btn btn-danger" onClick={Decrease}>
        -
      </button>
      {count}
      <button className="btn btn-success" onClick={Increase}>
        +
      </button>
    </>
  );
}

export default Effect;
