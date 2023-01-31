import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { deleteCars, getCars } from "../redux/actions/carAction";

const Discoverypage = () => {
  const dispatch = useDispatch();
  const { carReducer } = useSelector((rootReducer) => rootReducer);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [carReducer.message]);

  const getData = () => {
    dispatch(getCars());
  };

  const handleDelete = (id) => {
    dispatch(deleteCars(id));
  };
  console.log(carReducer);
  return (
    <div className="car-wrapper">
      <Navbar />
      <Link to={`/addcar`}>
        <button>Add Car</button>
      </Link>
      <div className="car-container">
        {!!carReducer.carsData.length &&
          carReducer.carsData.map((item) => (
            <div>
              <div className="car-card">
                <div className="car-img">
                  <Link to={`/detailcar/${item.id}`}>
                    <img src={item.image} />
                  </Link>
                </div>
                <h1>{item.name}</h1>
                <h2>{item.price}</h2>
                <p>{item.category}</p>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
                <Link to={`/editcar/${item.id}`}>
                  <button>Edit</button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Discoverypage;
