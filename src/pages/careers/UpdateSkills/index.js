import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { API } from "../../../redux/API";
import FormSelect from "../FormSelect/index";
import { getIds } from "../helper";

const UpdateSkills = ({ reqSkill, nice, res }) => {
  const dispatch = useDispatch();

  const { careerList, OneCareer } = useSelector((state) => state.career);
  const [filter, setFilter] = useState("");
  const [update, setUpdate] = useState(false);
  const [skills, setSkills] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(API.getCareerList());
  }, []);


  useEffect(() => {
    dispatch(API.getOneCareer(filter));
  }, [filter]);

  const array = getIds(careerList);
  const newArray = [...array, { title: "Select Career", id: "" }];

  const handleChange = (e) => {
    setFilter(e.target.value);
    setUpdate(false)
  };

  const configFilters = {
    defaultValue: filter,
    options: newArray,
    handleChange: handleChange,
  };

  const handleChange1 = (e) => {
    setSkills(e.target.value);
  };

  const handleClick = ({id, title}) => {
    setUpdate(!update);
    setSkills(title)
    setId(id);
  };
  const handleClick1 = () => {
      
    reqSkill &&  dispatch(API.updateCareerSkills({ values: { title: skills }, id }));    
    res && dispatch(API.updateCareerRespons({ values: { title: skills }, id }));
    nice && dispatch(API.updateCareerNice({ values: { title: skills }, id })); 

    dispatch(API.getOneCareer(filter));
    setUpdate(false);
    setSkills("");
  };

  const handleDelete = (e) => {
    reqSkill && dispatch(API.deleteCareerSkills(e.currentTarget.id));
    res && dispatch(API.deleteCareerRespons(e.currentTarget.id));
    nice && dispatch(API.deleteCareerNice(e.currentTarget.id));

    dispatch(API.getOneCareer(filter));
  };

  return (
    <div className={styles.main}>
      <div className={styles.box1}>
        <FormSelect {...configFilters} />
      </div>

      {reqSkill &&
        OneCareer?.required_skills?.map((item, index) => {
          return (
            <div className={styles.box1} key={index}>
              <p className={styles.title}>{index + 1}</p>
              <p className={styles.title1}> {item.title} </p>

              <button
                className={styles.button1}
                onClick={() => handleClick(item)}
              >
                update
              </button>
              {OneCareer.required_skills.length !== 1 && (
                <button
                  className={styles.button1}
                  id={item.id}
                  onClick={handleDelete}
                >
                  delete
                </button>
              )}
            </div>
          );
        })}

      {nice &&
        OneCareer?.nice_to_have?.map((item, index) => {
          return (
            <div className={styles.box1} key={index}>
              <p className={styles.title}>{index + 1}</p>
              <p className={styles.title1}> {item.title} </p>

              <button
                className={styles.button1}
                id={item.id}
                onClick={() => handleClick(item)}
              >
                update
              </button>
              {OneCareer.nice_to_have.length !== 1 && (
                <button
                  className={styles.button1}
                  id={item.id}
                  onClick={handleDelete}
                >
                  delete
                </button>
              )}
            </div>
          );
        })}

      {res &&
        OneCareer?.responsibilities?.map((item, index) => {
          return (
            <div className={styles.box1} key={index}>
              <p className={styles.title}>{index + 1}</p>
              <p className={styles.title1}> {item.title} </p>

              <button
                className={styles.button1}
                id={item.id}
                onClick={() => handleClick(item)}
              >
                update
              </button>
              {OneCareer.responsibilities.length !== 1 && (
                <button
                  className={styles.button1}
                  id={item.id}
                  onClick={handleDelete}
                >
                  delete
                </button>
              )}
            </div>
          );
        })}

      {update && (
        <>
          <input
            className={styles.input}
            name="name"
            type="text"
            value={skills}
            onChange={handleChange1}
          />
          <button className={styles.button2} onClick={handleClick1}>
            change
          </button>
        </>
      )}
    </div>
  );
};
export default UpdateSkills;
