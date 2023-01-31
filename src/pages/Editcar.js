import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editCar } from "../redux/actions/carAction";

const Editcar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carReducer } = useSelector((state) => state);
  const { id } = useParams();

  const [name, setName] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };

  const [img, setImg] = useState(null);
  const handleImage = (e) => {
    setImg(e.target.files[0]);
  };

  const [price, setPrice] = useState("");
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const [cate, setCate] = useState("");
  const handleCate = (e) => {
    setCate(e.target.value);
  };

  const handleEdit = () => {
    const formData = new FormData();
    formData.append("image", img);
    formData.append("name", name);
    formData.append("category", cate);
    formData.append("price", price);
    formData.append("status", false);
    // console.log(name, img, price, cate);
    dispatch(editCar(id, formData));
  };

  const handleRedirect = () => {
    if (!!carReducer.carEdit) {
      navigate("/discovery");
    }
  };

  useEffect(() => {
    handleRedirect();
  }, [carReducer.carEdit]);
  return (
    <div>
      <input value={name} onChange={handleName} placeholder="Nama" />
      <input value={price} onChange={handlePrice} placeholder="harga" />
      <input onChange={handleImage} type="file" />
      <input value={cate} onChange={handleCate} placeholder="kategori" />
      <button>
        <Link to="/discovery">Cancel</Link>
      </button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Editcar;
