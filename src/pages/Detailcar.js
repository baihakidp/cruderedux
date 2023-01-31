import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailCar } from "../redux/actions/carAction";

const Detailcar = () => {
  const dispatch = useDispatch();
  const { carReducer } = useSelector((state) => state);
  const { id } = useParams();

  const getDetailCar = () => {
    dispatch(detailCar(id));
  };

  useEffect(() => {
    getDetailCar();
  }, []);

  // const item = carReducer.car.detailCar;

  console.log(carReducer);
  return (
    <div>
      {Object.entries(carReducer.carDetail).length ? (
        <div>
          <h1>Car Detail</h1>
          <div>
            <div>
              <img src={carReducer.carDetail.image} />
            </div>
            <h1>{carReducer.carDetail.name}</h1>
            <h2>{carReducer.carDetail.price}</h2>
            <p>{carReducer.carDetail.category}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Detailcar;
