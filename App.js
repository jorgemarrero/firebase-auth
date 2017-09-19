import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-elements';
import SingUpForm from './components/SignUpForm';
import SingInForm from './components/SignInForm';

export default class App extends React.Component {
	render() {
		return (
		<View style={styles.container}>
			<Card title='Sign up'>
				<SingUpForm />
			</Card>
			<Card title='Sign in'>
				<SingInForm />
			</Card>
		</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
});
