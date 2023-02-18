

function AuthAction(value,dispatch){
    dispatch({
        type:"Sign-Up",
        payload:value
    })
}

export default AuthAction;