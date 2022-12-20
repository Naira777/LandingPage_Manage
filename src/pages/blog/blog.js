import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Button from "../../component/button";
import Modal from "../../component/modal";
import { API } from "../../redux/API";
import styles from "./blog.module.scss";
import TextEditor from "../../component/text-editor";

const Blog = () => {
  const { blog } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  const { control, formState: {errors}, handleSubmit } = useForm({
    defaultValues: {title: ""}
  });
  
  const onSubmit = handleSubmit((data, id) => {
      dispatch(API.putEditCategory({id, data}));
  });
 

  return (
    <div>
      <div className={styles.blog}>
        {blog?.map((item) => {
          return (
            <div className={styles.blog_category} key={item.id}>
              <div>{item.title}</div>
              <div> 
                <Modal buttonName="edit" >
                  <div className={styles.modal}>
                   <span>title -</span>  
                    <TextEditor 
                      control={control} 
                      name="title"
                      errors={errors}
                      className={styles.login_input} 
                    />
                    <Button onClick={() => onSubmit(item.id, item.title)}>save</Button>
                  </div>
                </Modal>
                {/* <Button onClick={}>Delete</Button> */}
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Blog;
