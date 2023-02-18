const initialState = {
    isAuth:false,
    email:"",
    password:""
}

function AuthReducer(state = initialState,action){
    switch(action.type){
        case "Sign-Up":
            state ={
                ...state,
                isAuth:true,
                email:action.payload.email,
                Password:action.payload.password
            }
    }
}

export default AuthReducer;