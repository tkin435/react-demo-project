import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Person.css';
import classes from './Person.css';
import { render } from 'react-dom';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../Context/auth-context';



class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        this.inputElementRef.current.focus();
      console.log(this.context.authenticated);
    }

    render(){
   

    console.log('[App.js] rendering..')

    return (
        <Aux>
      
            {this.context.authenticated ? <p>Authenticated</p> : <p>no</p> }
      
        <p onClick = {this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
        <p >{this.props.children}</p>
        <input type = "text" 
         onChange = {this.props.changed} 
         value = {this.props.name}
        //  ref= {(inputEl) => {this.inputElement = inputEl}}
        ref = {this.inputElementRef}
         >
       
         </input>
       
        </Aux>

    );
 
}
}

Person.propTypes = {
click: PropTypes.func,
name: PropTypes.string,
age: PropTypes.number,
changed: PropTypes.func
};


export default withClass(Person,classes.Person);