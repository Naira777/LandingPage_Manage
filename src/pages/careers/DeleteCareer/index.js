import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { API } from "../../../redux/API";
import FormSelect from "./../FormSelect/index";
import { getIds } from "./../helper";

const DeleteCareer = () => {
  const dispatch = useDispatch();

  const { careerList } = useSelector((state) => state.career);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(API.getCareerList());
  }, []);

  const array = getIds(careerList);
  const newArray = [...array, { title: "Select Career", id: "" }];

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const configFilters = {
    defaultValue: filter,
    options: newArray,
    handleChange: handleChange,
  };

  const handleClick = () => {
    dispatch(API.deleteCareer(filter));
    dispatch(API.getCareerList());
  };

  return (
    <div className={styles.main}>
      <div className={styles.box1}>
    
        <FormSelect {...configFilters} />
      </div>

      <button className={styles.button} onClick={handleClick}>
        Delete Career
      </button>
    </div>
  );
};
export default DeleteCareer;
