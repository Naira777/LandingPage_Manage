import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "../../component/button";
import Modal from "../../component/modal";
import { API } from "../../redux/API";
import EditCreatePerson from "./component/edit-create-person";

import styles from "./team.module.scss";

const Team = () => {
  const { teamList } = useSelector((state) => state.team);
  const dispatch = useDispatch();
  const handlerDelete = (id) => {
    dispatch(API.deleteTeamListId(id));
  };
  return (
    <>
      <div className={styles.btn_create}>
        <Modal buttonName="Create +">
          <EditCreatePerson teamList={teamList} create={true}></EditCreatePerson>
        </Modal>
      </div>
      <div className={styles.team}>
        {teamList?.map((item) => {
          return (
            <div className={styles.team_list} key={item.id}>
              <div>
                <div>
                  {item.name} {item.surname}
                </div>
                <div>{item.job_code}</div>
              </div>
              <div className={styles.btn_del_edit}>
                <Button onClick={() => handlerDelete(item.id)}>Delete</Button>
                <Modal buttonName="Edit">
                  <EditCreatePerson
                    teamList={teamList}
                    id={item.id}
                    href={item?.media.name}
                    PersonName={item.name}
                    PersonSurname={item.surname}
                    PersonJobCode={item.job_code}
                    {...item}
                  />
                </Modal>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Team;
