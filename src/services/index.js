import axios from 'axios';


const request = (method, url, data,) => {
 
    const requestOptions = {
        method,
        url,
        data,
    }
    const onSuccess = (response) => (requestOptions.raw ? response : response.data);

    const onError = (error) => {
       
        return Promise.reject(errorResponse);
    };
   
    return axios(requestOptions)
        .then(onSuccess)
        .catch(onError);
};


export const commonService = {
    request,
};
