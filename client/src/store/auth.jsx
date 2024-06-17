import { createContext,useContext,useState ,useEffect} from "react";

export const AuthContext = createContext();


const URL="http://localhost:3000/api/auth/user";
export const AuthProvider=({children})=>{

    const [token,setToken]=useState(localStorage.getItem("token"));
    const [user,setUser]=useState("");
    const[isLoading,setIsLoading]=useState(true);
    const[services,setServices]=useState([]);
    const authorizationToken= `Bearer ${token}`;
    const storeToken=(serverToken)=>{
        setToken(serverToken);
          return localStorage.setItem("token",serverToken);
    };

    let isLoggedIn=!!token;

   
          //for logout function 
           const LogoutUser=()=>{
                        setToken("");
                        return localStorage.removeItem("token");
           }

              // to get user data 

              const userAuthentication = async()=>{
                try{
                      setIsLoading(true);
                        const response=await fetch(URL,{
                       method:"GET",
                       headers:{
                        Authorization: authorizationToken,
                       },
                        });
                        if(response.ok){
                            const  data=await response.json();
                            setUser(data.userData);
                            setIsLoading(false);
                        }
                        else {
                          
                            setIsLoading(false);
                        }
                }
                catch(error){
             console.error("Error during fect data from user");
                }
              }

              //to fectch data services


              const getServices=async()=>{
                try{
                 const response=await fetch("http://localhost:3000/api/data/service",{
                    method:"GET",
                 })
                 if(response.ok){
                    const data=await response.json();
                   
                    setServices(data.msg);
                 }
                }
                catch(err){
                    console.log(`service error : ${err}`);
                }
              }
           useEffect(()=>{
            getServices();
            userAuthentication();
           },[]);


   return (<AuthContext.Provider value={{isLoggedIn,storeToken,LogoutUser,user,services,authorizationToken,isLoading}}>
    {children}
    </AuthContext.Provider>
   )
};

export const useAuth=()=>{
    const authValue= useContext(AuthContext);
    if(!authValue){
        throw new Error("authProvider not rap main file probably");
    }
    return authValue;
};