import React from 'react';
import ReactDOM from 'react-dom';


const Info =(props) =>(
    <div>
        <h1>INFO</h1>
        <p> This is the info message {props.info}</p>
    </div>
    );

const withAdminWarning= (WrappedComponent) =>{
    return (props) => (
        <div> 
        {props.isAdmin && <p>hi this is important message</p>}
        <WrappedComponent {...props} />
        </div>
    )
}


const requireAuthentication= (WrappedComponent) =>{
    return (props) => (
        <div> 
        {props.isAuthunicated ? (
            <WrappedComponent {...props} />
            )  : 
        (<p>Please Login</p>)}
        
        </div>
    )
}


const AdminInfo=withAdminWarning(Info)  ;
const AuthInfo=requireAuthentication(Info)  ;



    //ReactDOM.render(<AdminInfo isAdmin={false} info="Hi this is my info"/> ,document.getElementById('app'));
    ReactDOM.render(<AuthInfo isAuthunicated={true} info="Hi this is my info"/> ,document.getElementById('app'));