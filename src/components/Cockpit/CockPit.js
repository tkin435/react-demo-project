import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../Context/auth-context';


const cockpit = (props) => {
   const toggleBtnRef = useRef(null);
   const authContext = useContext(AuthContext);

   console.log(authContext.authenticated);

    useEffect(() => {
      console.log('[cockpit[ useWEfftct' );
      //http request...
    //  setTimeout(()=> {
    //     alert('Saved something to the cloud');
    //   }, 1000);
      toggleBtnRef.current.click();
      return () => {
     
        console.log(" [App.js]  clean up");
      };
    }, []);

    const assingedClasses = [];
    let buttonClass = '';

    buttonClass = classes.Red;
    if(props.showPersons){
        buttonClass = classes.red
    }

    if (props.personsLength <= 2){
      assingedClasses.push(classes.red)
    }
    if (props.personsLength <= 1){
      assingedClasses.push(classes.bold);
    }

    return (
        <div className = {classes.Cockpit}>
        <h1>{props.name}</h1>
        <p className = {assingedClasses.join(' ')}>This is really working!</p>
        <button ref = {toggleBtnRef} className = {buttonClass} 
            alt = {props.showPersons} 
            onClick={props.clicked}>
            Switch Name</button>
           <button onClick = {authContext.login}> Log In</button> 
        </div>
    );

};
export default React.memo(cockpit);