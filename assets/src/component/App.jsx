import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class App extends React.Component {
    constructor() {
        super();
    }

    getUsers() {
        fetch('http://localhost:1337/users')
        .then(response => response.json())
        .then(response => console.log(response));
    }


    render() {
        return (
            <div>
               
               <Button onClick={this.getUsers}>Get users</Button>
               
            </div>
        )
    }
}

export default App;