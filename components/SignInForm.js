import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-e0a86.cloudfunctions.net'; 

class SignInForm extends Component {
    state = { 
        phone: '',
        code: ''
    }

    handleSubmit = async () => {
        const { phone, code } = this.state;
        try {
            const res = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone, code });
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Phone Number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                    />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Code</FormLabel>
                    <FormInput
                        value={this.state.code}
                        onChangeText={code => this.setState({ code })}
                    />
                </View>
                <Button title="Submit" onPress={this.handleSubmit} />
            </View>
        );
    }
}

export default SignInForm;
