import React from 'react'
import authentication from '../verify'



const loginButton = (props) => {
    

    return (
        <div>
            <button onClick={() => {
                authentication.login(()=>{
                    props.history.push('/app')
                })
            }}>Login</button>
         </div>
    )
}

export default loginButton