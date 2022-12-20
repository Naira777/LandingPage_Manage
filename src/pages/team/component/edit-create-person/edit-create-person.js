import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { API } from "../../../../redux/API";
import TextInput from "../../../../component/text-input";
import MainSelect from "../../../../component/main-select";
import Button from "../../../../component/button";

import styles from "./edit-create-person.module.scss";

const EditCreatePerson = ({
  PersonName,
  PersonSurname,
  PersonJobCode,
  id,
  create,
  href = "",
  media_id,
}) => {
  const { jobList } = useSelector((state) => state.team);
  const [image, setImage] = useState(null);

  const jobTypeList = useMemo(
    () => jobList?.map((item) => ({ value: item.code, label: item.code })),
    [jobList]
  );
  const dispatch = useDispatch();
  
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: PersonName,
      surname: PersonSurname,
      job_code: jobTypeList[jobTypeList.findIndex((item) => item.value === PersonJobCode)],
    },
  });

  const handlerSendImg = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = handleSubmit((d) => {
    d.job_code = d.job_code.value;
    if (image) {
      API.postImageUpload({ image })
        .then(({ data }) => {
          if (data?.id) {
            if (create) {
              return dispatch(
                API.postCreateTeamPerson({ ...d, media_id: data.id })
              );
            }

            return dispatch(
              API.postEditTeamPerson({ ...d, media_id: data.id, id })
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (href) {
      dispatch(
        API.postEditTeamPerson({ ...d, media_id, id })
      )
    }
  });

  return (
    <div className={styles.edit_person}>
      <div className={styles.modal}>
        <TextInput
          name="name"
          control={control}
          errors={errors}
          placeholder={PersonName}
          className={styles.login_input}
        />
        <TextInput
          name="surname"
          control={control}
          errors={errors}
          placeholder={PersonSurname}
          className={styles.login_input}
        />
        <MainSelect
          name="job_code"
          control={control}
          errors={errors}
          options={jobTypeList}
          className={styles.login_input}
        />
        {href && <img src={`${process.env.REACT_APP_BASE_URL}${href}`} className={styles.img} alt={href}/>}
        <input name="media_id" type="file" onChange={handlerSendImg} />
        <Button onClick={onSubmit}>Save</Button>
      </div>
    </div>
  );
};

export default EditCreatePerson;
