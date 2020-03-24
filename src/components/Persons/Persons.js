import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
static getDerivedStateFromProps(props,state){
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
}
// shouldComponentUpdate(nextProps,nextState){
// console.log('[Persons.js] shouldComponentUpdaye');
//         if (nextProps.persons !== this.props.persons ||
//            nextProps.changed  !== this.props.changed ||
//             nextProps.clicked !== this.props.clicked
//            ){
//         return true;
// }else { return false;}  
// }

getSnapshotBeforeUpdate(prevProps, PrevState){
        console.log('[Person.js] getSnapShotBeforeUpdate');
        return {message: 'snapShot!'};
}

componentDidUpdate(prevProps,PrevState,snapshot){
        console.log('[Person.js] componentDidUpdate');
        console.log(snapshot);
}

componentWillMount(){
        console.log('')
}

render(){
        console.log('[App.js] render');
        return (this.props.persons.map((person, index) =>{
        return (    
        <Person
         name = {person.name}
         age = {person.age}
         click = {() =>this.props.clicked(index)} 
         key = {person.id}
        changed = {(event) => this.props.changed(event,person.id) }
        />
        );
}));
}
}
export default Persons;
