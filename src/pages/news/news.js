import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import EditCreateNews from "./component/edit-create-news"
import Button from '../../component/button';
import Modal from '../../component/modal';
import { API } from '../../redux/API';

import styles from "./news.module.scss"

const News = () => {
  const {newsList} = useSelector((state)=>state.news)
  const dispatch = useDispatch()

  const handleDeleteNews = (id)=>{
    dispatch(API.deleteNews(id))
  }

  return (
    <div>
      <div>
        <Modal buttonName="Create News" width={600}> 
          <EditCreateNews /> 
        </Modal>
      </div>
      <div className={styles.news_info}>
          {newsList?.map((item)=>{
            return(
              <div key={item.id} className={styles.news_list}>
                <div>news title - {item.title}</div>
                <div className={styles.edit_delete_btn}>
                  <Modal buttonName="Edit News" width={600} > <EditCreateNews /></Modal> 
                  <Button onClick={()=> handleDeleteNews(item.id)}>Delete</Button> 
                </div>
              </div>
            )
          })}
      </div>

    </div>
  )
}

export default News;