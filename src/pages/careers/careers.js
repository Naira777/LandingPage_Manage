import React from "react";
import CareerCreate from "./CareerCreate";
import styles from "./index.module.scss";
import { useState } from "react";
import DeleteCareer from './DeleteCareer/index';
import UpdateCreateAll from "./UpdateCreateAll";


const Careers = () => {
  const [mode, setMode] = useState('');

  const handleClick = t => {
    setMode(t)
  }

  return (
    <div>
      <button className={styles.button} onClick={() => handleClick('create')}>
        
        Create Career
      </button>
      <button className={styles.button} onClick={() => handleClick('update')}>
       
        Update Career
      </button>
      <button className={styles.button} onClick={() => handleClick('delete')}>
 
        Delete Career
      </button>

      {mode === "create" && <CareerCreate />}
      {mode === 'update' && <UpdateCreateAll />}
      {mode === 'delete' && <DeleteCareer />}

    </div>
  );
};

export default Careers;
