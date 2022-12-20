import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API } from "./redux/API";
import Layout from "./component/layout/layout";
import MainRoutes from "./routes/main-routes";
import { isAuthentication } from './redux/authorization/slice';
import { imageFile } from './redux/news/slice';

function App() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    const auth = localStorage.getItem('admin');
    if(auth){
      dispatch(isAuthentication(auth));
      dispatch(API.getBlogCategory());
      dispatch(API.getBlog());
      dispatch(API.getTeamList());
      dispatch(API.getJobList())
      dispatch(API.getNewsList())
      dispatch(API.getNewsCategory())
    }
    
  }, [dispatch]);

  return (
    <Layout>
      <MainRoutes />
    </Layout>
  );
}

export default App;
