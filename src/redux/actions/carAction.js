import axios from "axios";

export const getCars = () => (dispatch) => {
  const token = localStorage.getItem("token");
  const config = { headers: { access_token: token } };
  axios
    .get(
      "https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?page=1&pageSize=10",
      config
    )
    .then((res) => {
      dispatch({
        type: "LISTCAR",
        payload: res.data.cars,
      });
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteCars = (id) => (dispatch) => {
  const token = localStorage.getItem("token");
  const config = { headers: { access_token: token } };
  axios
    .delete(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config)
    .then((res) => {
      dispatch({
        type: "DELETECAR",
        payload: "berhasil",
      });
      getCars();
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const detailCar = (id) => (dispatch) => {
  const token = localStorage.getItem("token");
  const config = { headers: { access_token: token } };
  axios
    .get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config)
    .then((res) => {
      dispatch({
        type: "DETAILCAR",
        payload: res.data,
      });
      getCars();
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const editCar = (id, formData) => (dispatch) => {
  const token = localStorage.getItem("token");
  const config = { headers: { access_token: token } };

  axios
    .put(
      `https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,
      formData,
      config
    )
    .then((ress) => {
      dispatch({
        type: "EDITCAR",
        payload: ress.statusText,
      });
      console.log(ress);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addCar = (formData) => (dispatch) => {
  const token = localStorage.getItem("token");
  const config = { headers: { access_token: token } };

  axios
    .post(
      "https://bootcamp-rent-cars.herokuapp.com/admin/car",
      formData,
      config
    )
    .then((res) => {
      dispatch({
        type: "ADDCAR",
        payload: res.statusText,
      });
      console.log(res);
    })
    .catch((err) => console.log(err));
};
