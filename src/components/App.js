import React from 'react';
import StackList from './StackList';
import {Link} from 'react-router-dom';

class App extends React.Component {
    render() {
        return(
            <div>
                <h2>Flashcard Pro</h2>
                <hr/>
                <StackList />
                <hr/>
                <Link to='/stack_form'><h4>Create New Stack</h4></Link>
            </div>
        );
    }
}
export default App;