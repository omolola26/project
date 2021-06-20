
import React, { Component } from 'react'
import AccountSetup from './AccountSetup';

export class Form extends Component {
    state  =  {  
         step: 1,
        name: '',
        email:'',
        phone: '',
        Password: '',
        facebook: '',
        twitter: '',
        github: ''
    };
    nextStep = () => {
const { step } = this.state;
this.setState({step: step + 1});
    };
prevStep = () => {
    const { step } = this.state;
    this.setState({step: step - 1});
};
inputChange = input => e => {
    this.setState({
        [input]: e.target.value
    });
};
    render() {
        const { step} = this.state;
        const { name, email, phone, password, facebook, twitter, github} = this.state;
        const values  = { name, email, phone, password, facebook, twitter, github };

    switch (step) {
        case 1:
return(
<AccountSetup  
nextStep={this.nextStep}
inputChange={this.inputChange}
values={values}
/>
);
    }
}

}
export default Form
