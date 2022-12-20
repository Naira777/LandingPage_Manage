import React, { useState } from "react";
import styles from "./index.module.scss";
import UpdateCareer from "../UpdateCareer";
import UpdateSkills from "../UpdateSkills";

const UpdateCreateAll = () => {

  const [mode1, setMode1] = useState(false);
  const [mode2, setMode2] = useState(false);
  const [mode3, setMode3] = useState(false);
  const [mode4, setMode4] = useState(false);

  const handleClick1 = () => {
    setMode1(!mode1);
    setMode2(false);
    setMode3(false);
    setMode4(false);
  };

  const handleClick2 = () => {
    setMode1(false);
    setMode2(!mode2);
    setMode3(false);
    setMode4(false);
  };

  const handleClick3 = () => {
    setMode1(false);
    setMode2(false);
    setMode3(!mode3);
    setMode4(false);
  };

  const handleClick4 = () => {
    setMode1(false);
    setMode2(false);
    setMode3(false);
    setMode4(!mode4);
  };

  return (
    <div className={styles.main}>
      {
        <button className={styles.button} onClick={handleClick4}>
          Update Career
        </button>
      }

      {mode4 && <UpdateCareer />}

      <button className={styles.button} onClick={handleClick1}>
        Update Required Skills
      </button>

      {mode1 && <UpdateSkills reqSkill />}

      <button className={styles.button} onClick={handleClick2}>
        Update Responsibility
      </button>
      {mode2 && <UpdateSkills res />}

      <button className={styles.button} onClick={handleClick3}>
        Update Nice to have
      </button>

      {mode3 && <UpdateSkills nice />}
    </div>
  );
};

export default UpdateCreateAll;
