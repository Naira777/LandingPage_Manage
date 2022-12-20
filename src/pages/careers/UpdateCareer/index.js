import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { API } from "../../../redux/API";
import FormSelect from "../FormSelect";
import { getIds } from "../helper";

const UpdateCareer = () => {
  const dispatch = useDispatch();
  const { careerList, categoryList, OneCareer } = useSelector(
    (state) => state.career
  );
  const [location, setLocation] = useState();
  const [type, setType] = useState();
  const [title, setTitle] = useState();
  const [deadline, setDeadline] = useState();

  const [filter, setFilter] = useState("");
  const [filter1, setFilter1] = useState("");

  useEffect(() => {
    dispatch(API.getOneCareer(filter));
  }, [filter]);

  useEffect(() => {
    setLocation(OneCareer?.location);
    setType(OneCareer?.employment_type);
    setDeadline(OneCareer?.deadline);
    setTitle(OneCareer?.title);
  }, [OneCareer]);

  useEffect(() => {
    dispatch(API.getCareerList());
    dispatch(API.getCareerCategoryList());
  }, []);

  const array = getIds(careerList);
  const arrayCategory = getIds(categoryList);
  const newArray = [...array, { title: "Select Career", id: "" }];
  const newArrayCategory = [
    ...arrayCategory,
    { title: "Select Career Category", id: "" },
  ];
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const handleChange1 = (e) => {
    setFilter1(e.target.value);
  };

  const configFilters = {
    defaultValue: filter,
    options: newArray,
    handleChange: handleChange,
  };

  const configFiltersCat = {
    defaultValue: filter1,
    options: newArrayCategory,
    handleChange: handleChange1,
  };

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleChangeDeadline = (e) => {
    setDeadline(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      category_id: filter1,
      deadline: deadline,
      title: title,
      location: location,
      employment_type: type,
    };

    dispatch(API.updateCareer({ values, filter }));
    dispatch(API.getCareerList());
  };

  return (
    <div className={styles.main}>
      <div className={styles.box1}>
        <FormSelect {...configFilters} />
      </div>
      <div className={styles.box1}>
        <FormSelect {...configFiltersCat} />
      </div>

      <form className={styles.main} onSubmit={handleSubmit}>
        <div className={styles.box}>
          <p className={styles.title}>
            Title <br /> required
          </p>
          <input
            required
            className={styles.input}
            name="title"
            type="text"
            value={title}
            onChange={handleChangeTitle}
          />
        </div>

        <div className={styles.box}>
          <p className={styles.title}>
            Deadline <br /> required
          </p>
          <input
            required
            className={styles.input}
            name="deadline"
            type="text"
            value={deadline}
            onChange={handleChangeDeadline}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.title}>
            Location <br /> required
          </p>
          <input
            className={styles.input}
            name="location"
            required
            type="text"
            value={location}
            onChange={handleChangeLocation}
          />
        </div>

        <div className={styles.box}>
          <p className={styles.title}>
            Employment_type <br /> required
          </p>
          <input
            required
            className={styles.input}
            name="employment_type"
            value={type}
            onChange={handleChangeType}
            type="text"
          />
        </div>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateCareer;
