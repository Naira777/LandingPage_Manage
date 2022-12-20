import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import AddSection from "../add-section";

import { API } from "../../../../redux/API";
import Button from "../../../../component/button";
import MainSelect from "../../../../component/main-select";
import TextInput from "../../../../component/text-input";
import TextEditor from "../../../../component/text-editor";
import styles from "./edit-create-news.module.scss";

const EditCreateNews = ({ create }) => {
  const { newsCategory } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const [sections, setSections] = useState([]);

  const categoryList = useMemo(
    () => newsCategory?.map((item) => ({ value: item.code, label: item.code })),
    [newsCategory]
  );

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      views: 0,
      time: 0,
      category_id: [],
      title: "",
      text: ""
    },
  });

  const onSubmit = handleSubmit((d) => {
    console.log(sections);
    let getCategoryId = newsCategory?.find(
      (item) => item.code === d?.category_id?.label
    );
    d.category_id = getCategoryId.id;
    const sectionsForRequest = {};
    const submitData = () => {
      if ((Object.keys(sectionsForRequest).length / 2) === sections.length) {
        dispatch(API.postCreateNews({
          ...d,
          ...sectionsForRequest
        }));
      }
    }

    sections.forEach((item, index) => {
      API.postImageUpload({ image: item.file })
      .then(({ data }) => {
        sectionsForRequest[`sections[${index}][media_id]`] = data.id;
        sectionsForRequest[`sections[${index}][text]`] = item.text;
        // sectionsForRequest.push({
        //   media_id: data.id,
        //   text: item.text
        // })
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(submitData);
    })
    //  else if (href) {
    //   dispatch(
    //     API.postEditTeamPerson({ ...d, media_id, id })
    //   )}
  }, [sections]);

  return (
    <div className={styles.edit_create}>
      <MainSelect name="category_id" control={control} options={categoryList} />
      <TextInput type="number" name="views" control={control} errors={errors} />
      <TextInput
        className={styles.time}
        type="number"
        name="time"
        control={control}
      />
      <div>
        <TextEditor className={styles.editor} control={control} name="title" />
      </div>
      <div>
        <TextEditor className={styles.editor} control={control} name="text" />
      </div>

      <AddSection control={control} sections={sections} setSections={setSections} />
      <Button onClick={onSubmit}>Save</Button>
    </div>
  );
};

export default EditCreateNews;
