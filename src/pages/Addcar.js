import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addCar } from "../redux/actions/carAction";

const Addcar = () => {
  const dispatch = useDispatch();
  const { carReducer } = useSelector((state) => state);
  const { id } = useParams();

  const [name, setName] = useState("");
  const [img, setImg] = useState(null);
  const [price, setPrice] = useState("");
  const [cate, setCate] = useState("");
  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleImage = (e) => {
    setImg(e.target.files[0]);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleCate = (e) => {
    setCate(e.target.value);
  };

  const handleCreate = () => {
    const formData = new FormData();
    formData.append("image", img);
    formData.append("name", name);
    formData.append("category", cate);
    formData.append("price", price);
    formData.append("status", false);
    console.log(name, img, price, cate);

    dispatch(addCar(formData));
  };
  const handleRedirect = () => {
    if (!!carReducer.carAdd) {
      navigate("/discovery");
    }
  };
  useEffect(() => {
    handleRedirect();
  }, [carReducer.carAdd]);

  return (
    <div>
      <input onChange={handleName} placeholder="Nama" />
      <input onChange={handlePrice} placeholder="harga" />
      <input onChange={handleImage} type="file" />
      <input onChange={handleCate} placeholder="kategori" />
      <button>Save</button>
      <button>
        <Link to="/discovery">Cancel</Link>
      </button>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default Addcar;
