import React from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import axios from 'axios';

class Demo extends React.Component{
  constructor(props){
      super(props);
        this.state={
            username: '',
            password:'',
            error: '',
            response:'',
        };
  }


  handleChange=(e)=>{
    
      const{name, value} = e.target;
      this.setState({[name]:value})
}

handleSubmit=(e)=>{
    e.preventDefault();
    const {username, password, response} = this.state;

 
        const requestOptions = {
            method: 'POST',
            baseURL: process.env.REACT_APP_API_URL,
            url: '/auth/login',
            data:{
                username,
                password
            }
        }
        const onSuccess = (response) => {
            this.setState({response: response.data})
        };
    
        const onError = (error) => {
            this.setState({error: error})
            return Promise.reject(error);
        };
       
        return axios(requestOptions)
            .then(onSuccess)
            .catch(onError);
   
   

  
   
}

render(){
const {username, password, response, error} = this.state;

    return (
                <>
<Container>
    <Row style={{paddingTop: '100px'}}>
    <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} name='username' onChange={this.handleChange} />        </label>
          <label>
          password:
          <input type="password" value={password} name='password' onChange={this.handleChange} />        </label>
        <input type="submit" value="Submit" />
      </form>
    </Row>
    {
        response && (<>
        {JSON.stringify(response)}
        </>)
    }
    {
        error && (<>
        {JSON.stringify(error)}
        </>)
    }
</Container>
                </>
        );
}

  
}

export default Demo;
