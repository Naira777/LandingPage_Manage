import axios from "../axios/axiosGet";
import axiosPost from "../axios/axiosPost";
import {createAsyncThunk} from "@reduxjs/toolkit";



export const API = Object.freeze({
    postImageUpload: (data) => axiosPost.post(`api/image/`, data),
    getAuthorization: createAsyncThunk(
        'get/Authorization',
        async (data) => {
            return await axios.post("admin-api/login", data);
        }
    ),
    getBlogCategory: createAsyncThunk(
        'get/blogCategory',
        async () => {
            return await axios.get("api/post-category");
        }
    ),

    getBlog: createAsyncThunk(
        'get/Blog',
        async () => {
            return await axios.get("api/post?filter_by_category_id=all");
        }
    ),

    putEditCategory: createAsyncThunk(
        'put/editCategory',
        async (id, data) => {
            return await axiosPost.put(`admin-api/post-category/${id}`, data);
        }
    ),
    getTeamList: createAsyncThunk(
        'get/teamList',
        async () => {
            return await axios.get("api/creators/list");
        }
    ),
    deleteTeamListId: createAsyncThunk(
        'delete/TeamListId',
        async (id) => {
          return await axiosPost.delete(`admin-api/creator/${id}`);
        }
    ),
    getJobList: createAsyncThunk(
        'get/getJobList',
        async () => {
            return await axiosPost.get("admin-api/job/list");
        }
    ),
    postEditTeamPerson: createAsyncThunk(
        'post/editTeamPerson',
        async (data) => {
            console.log("data", data);
            return await axiosPost.post(`admin-api/creator/${data.id}`, data);
        }
    ),
    postCreateTeamPerson: createAsyncThunk(
        'post/editTeamPerson',
        async (data) => {
            console.log("postdata", data);
            return await axiosPost.post(`admin-api/creator/`, data);
        }
    ),
    getNewsList: createAsyncThunk(
        'get/editTeamPerson',
        async () => {
            return await axios.get("api/news/list?filter_by_category_id=all");
        }
    ),
    getNewsCategory:createAsyncThunk(
        'get/newsCategory',
        async () => {
            return await axios.get("/api/news/category-list");
        }
    ),
    deleteNews: createAsyncThunk(
        'delete/News',
        async (id) => {
            console.log(id);
            return await axiosPost.delete(`/admin-api/news/${id}`);
        }
    ),
    postCreateNews: createAsyncThunk(
        'post/createNews',
        async (data) => {
            console.log(" api data", data);
            return await axiosPost.post(`/admin-api/news`, data);
        }
    ),
    putEditNews: createAsyncThunk(
        'put/editNews',
        async (data) => {
            console.log("data", data);
            return await axiosPost.put(`/admin-api/news/${data.id}`, data);
        }
    ),

  //Career Start
  
     createCareer: createAsyncThunk(
     'post/createCareer',
     async (data) => {
      
        return await axiosPost.post(`/admin-api/career`, data)
  
        }
     ),

     updateCareer: createAsyncThunk(
     'put/updateCareer',
      async (data) => {
         return await axiosPost.put(`/admin-api/career/${data.filter}`, data.values);
        }
     ),
     deleteCareer: createAsyncThunk(
     'delete/deleteCareer',
      async (id) => {
         return await axiosPost.delete(`/admin-api/career/${id}`);
        }
     ),

    getCareerList: createAsyncThunk(
     'get/CareerList',
      async (id='') => {
         return await axiosPost.get(`/api/career/?category_id=${id}`);
        }
     ),
    getCareerCategoryList: createAsyncThunk(
     'get/CareerCategoryList',
      async () => {
         return await axiosPost.get(`/api/career-category`);
        }
     ),
    updateCareerSkills: createAsyncThunk(
     'put/updateCareerSkills',
      async (data) => {
        console.log(data)
         return await axiosPost.put(`/admin-api/career/required-skill/${data.id}`, data.values);
        }
     ),

    deleteCareerSkills: createAsyncThunk(
     'delete/deleteCareerSkills',
      async (id) => {
         return await axiosPost.delete(`/admin-api/career/required-skill/${id}`);
        }
     ),
    deleteCareerRespons: createAsyncThunk(
     'delete/deleteCareerRespons',
      async (id) => {
         return await axiosPost.delete(`/admin-api/career/responsibility/${id}`);
        }
     ),

    updateCareerRespons: createAsyncThunk(
     'put/updateCareerRespons',
      async (data) => {
         return await axiosPost.put(`/admin-api/career/responsibility/${data.id}`, data.values);
        }
     ),
      deleteCareerNice: createAsyncThunk(
        'delete/deleteCareerNice',
         async (id) => {
            return await axiosPost.delete(`/admin-api/career/nice-to-have/${id}`);
           }
        ),
   
      updateCareerNice: createAsyncThunk(
        'put/updateCareerNice',
         async (data) => {
            return await axiosPost.put(`/admin-api/career/nice-to-have/${data.id}`, data.values);
           }
        ),
        
        getOneCareer: createAsyncThunk(
            'get/getOneCareer',
             async (id) => {
                return await axios.get(`/api/career/${id}`);
               }
            ),

        getCareerCvList: createAsyncThunk(
                'get/getCareerCvList',
                 async (id) => {
                    return await axiosPost.get(`/admin-api/application/?filter_by_career_id=${id}`);
                   }
                ),

        getCareerCv: createAsyncThunk(
                'get/getCareerCv',
                 async (id) => {
                    return await axiosPost.get(`/admin-api/application/${id}`);
                   }
                ),

  //Career End
})