import { Link } from "react-router-dom";
import { BASE_AUTH_URL } from "../../api/config";
import { useEffect } from "react";
import axios from "axios";
import moment from "moment";

const Completion = () => { 

    const onLanding = async () => {
        try{
            const accessAuth = JSON.parse(localStorage.getItem('accessAuth'));
            const response = await axios
              .get(
                `${BASE_AUTH_URL}/api/v1/users/re-issue-auth`,
                {
                  headers: {
                    'Authorization': accessAuth?.accessToken,
                    'Content-Type': 'application/json'
                  },
                }
              ) 
              console.log('before if response', response)
         
            if (response.status === 200) {
            const accessToken = response.data.accessToken;
              const roles = response.data.roles;
              const expiresIn = response.data.expiresIn;
              const expires = moment().add(expiresIn);
    
              console.log('response', response)
              localStorage.setItem('accessAuth', JSON.stringify({accessToken, roles, expires}));

          }
        }
        catch(error) {
          console.log(error);
          console.log(error.response.data.msg)
        };
      };
    
      useEffect(() => {
        onLanding()
      }, [])

    return (
    <><h1>Thank you! 🎉</h1>
    <Link to="/SearchPage" className="btn btn-primary">Go to Search Page</Link>
    </>)
    ;
  }
  
  export default Completion;