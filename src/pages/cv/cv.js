import React, { useEffect } from "react";
import styles from "./cv.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "./../../redux/API";
import { getIds } from "./../careers/helper";
import FormSelect from "./../careers/FormSelect/index";

const CV = () => {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const { careerList, careerCvList } = useSelector((state) => state.career);

  console.log(filter);
  const array = getIds(careerList);
  const newArray = [...array, { title: "Select Career", id: "" }];

  const handleChange = (e) => {
    setFilter(e.target.value);
    dispatch(API.getCareerCvList(filter));
  };

  useEffect(() => {
    dispatch(API.getCareerCvList(filter));
  }, [filter]);


  const configFilters = {
    defaultValue: filter,
    options: newArray,
    handleChange: handleChange,
  };

  useEffect(() => {
    dispatch(API.getCareerList());
  }, []);

  return (
    <div className={styles.main}>
      <FormSelect {...configFilters} />

      <div>
        {careerCvList?.map((item, index) => {
          return (
            <div className={styles.item} key={index}>
              <p className={styles.text}>Name: {item.name}</p>
              <p className={styles.text}>Surname: {item.surname}</p>
              <p className={styles.text}>Email: {item.email}</p>
              <p className={styles.text}>Phone: {item.number}</p>
              <p className={styles.text}>City: {item.city}</p>
              <p className={styles.text}>Country: {item.country}</p>
              <p className={styles.text}>
                Linkdin:
                <a
                  target="_new"
                  href={`http://192.168.1.127:81/${item.linkedin_link}`}
                >
                  Linkdin
                </a>
              </p>
              <p className={styles.text}>
                Portfolio:
                <a
                  target="_new"
                  href={`http://192.168.1.127:81/${item.portfolio.name}`}
                >
                  Portfolio
                </a>
              </p>

              <p className={styles.text}>
                CV:
                <a
                  target="_new"
                  href={`http://192.168.1.127:81/${item.cv.name}`}
                >
                  CV
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CV;
