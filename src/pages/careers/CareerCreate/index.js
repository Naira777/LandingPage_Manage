import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { API } from "./../../../redux/API";
import { getIds } from "./../helper";
import FormSelect from "./../FormSelect/index";
import { useForm } from "react-hook-form";

const CareerCreate = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { categoryList } = useSelector((state) => state.career);
  const [filter, setFilter] = useState('');
  const [skill, setSkill] = useState([]);
  const [nice, setNice] = useState([]);
  const [res, setRes] = useState([]);

  const arrayCategory = getIds(categoryList);
  const newArray = [...arrayCategory, {title: 'Select Career Category', id: ''}]
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const configFilters = {
    defaultValue: filter,
    options: newArray,
    handleChange: handleChange,
  };

  useEffect(() => {
    dispatch(API.getCareerCategoryList());
  }, []);

  const handleClick1 = () => {
    setSkill([...skill, 1]);
  };

  const handleClick2 = () => {
    setRes([...res, 1]);
  };

  const handleClick3 = () => {
    setNice([...nice, 1]);
  };
  const handleRegistration = (data) => {

    const newValues = { ...data, category_id: filter };
    dispatch(API.createCareer(newValues));

  }

  return (
    <div className={styles.main}>
      <p className={styles.header}> Create Career</p>

        <form className={styles.main} onSubmit={handleSubmit(handleRegistration)}>
          <div className={styles.box}>
            <p className={styles.title}>
         
              Title <br /> required
            </p>
            <input className={styles.input} name="title" type="text"  {...register('title')} />
          </div>

          <div className={styles.box}>
            <p className={styles.title}>
              Deadline <br /> required
            </p>
            <input className={styles.input} name="deadline" type="text" {...register('deadline')}  />
          </div>
          <div className={styles.box}>
            <p className={styles.title}>
       
              Location <br /> required
            </p>
            <input className={styles.input} name="location" type="text" {...register('location')}  />
          </div>

          <div className={styles.box}>
            <p className={styles.title}>
              Employment_type <br /> required
            </p>
            <input
              className={styles.input}
              name="employment_type"
              type="text"
              {...register('employment_type')} 
            />
          </div>

          <div className={styles.box2}>
            <p className={styles.title2}>
            Required
            </p>

            <FormSelect {...configFilters} />
          </div>

          <div className={styles.box}>
            <p className={styles.title}>Required skills 1 required </p>
            <input
            required
              className={styles.input}
              name="required_skills[0][title]"
              type="text"
              {...register('required_skills[0][title]')} 
              
            />
          </div>
          {skill?.map((item, index) => {
            const num = index + 1;
            const count = index + 2;
            return (
              <div className={styles.box} key={index}>
                <p className={styles.title}>Required skills {count}</p>
                <input
                  className={styles.input}
                  name={`required_skills[${num}][title]`}
                  type="text"
                  {...register(`required_skills[${num}][title]`)} 
                />
              </div>
            );
          })}
      
          <button className={styles.button1}  type="button" onClick={handleClick1}> Add More</button>
    
   <div className={styles.line}> </div>
          <div className={styles.box}>
            <p className={styles.title}>
              Responsibilities 1 <br /> required
            </p>
            <input
            required
              className={styles.input}
              name="responsibilities[0][title]"
              type="text"
              {...register('responsibilities[0][title]')} 
             
            />
          </div>
          {res?.map((item, index) => {
            const num = index + 1;
            const count = index + 2;
            return (
              <div className={styles.box} key={index}>
                <p className={styles.title}>Responsibilities {count}</p>
                <input
                  className={styles.input}
                  name={`responsibilities[${num}][title]`}
                  type="text"
                  {...register(`responsibilities[${num}][title]`)} 
                />
              </div>
            );
          })}

          <button  className={styles.button1} type="button" onClick={handleClick2}> Add More</button>
          <div className={styles.line}> </div>

          <div className={styles.box}>
            <p className={styles.title}>
              Nice to have 1 <br /> required
            </p>
            <input
              className={styles.input}
              name="nice_to_have[0][title]"
              type="text"
              {...register('nice_to_have[0][title]')} 
              required
            />
          </div>
          {nice?.map((item, index) => {
            const num = index + 1;
            const count = index + 2;
            return (
              <div className={styles.box} key={index}>
                <p className={styles.title}>Nice to have {count}</p>
                <input
                  className={styles.input}
                  name={`nice_to_have[${num}][title]`}
                  {...register(`nice_to_have[${num}][title]`)} 

                  type="text"
                />
              </div>
            );
          })}
          <button  className={styles.button1} type="button" onClick={handleClick3}> Add More</button>
    

          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
    
    </div>
  );
};
export default CareerCreate;
