import axios from "axios"



export const Signin = () => {


const Backendurl ="https://localhost:3000/google/auth";

const result  = axios.post(Backendurl, {withCredentials: true});
const response  = result.json();
if(!response){
    return 
}




    return (
        <div>login with google</div>
    )


}






    return (
        <div>login with google</div>
    )


}