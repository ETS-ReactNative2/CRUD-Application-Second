import React,{Component,useState,useContext,useEffect} from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Button,
	TextInput,
	StyleSheet,
	Dimensions,
	Image,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } 
from 'react-native-safe-area-context';
import {Context as AuthContext} from '../context/AuthContext';

const WIDTH = Dimensions.get('window').width;

const SignIn=({navigation})=> {

	const {SignIn,AutomaticSignin} = useContext(AuthContext);

	useEffect(()=>{
		AutomaticSignin();
	},[]);

	

	const [email , setEmail] = useState('');
	const [password , setPassword] = useState('');

	function clearTextInput(){
		return(
			setEmail(''),
			setPassword('')
		);
	};

		return(
			<SafeAreaView style={styles.container} >
			<View style={{width:WIDTH-80}}>
				<View style={styles.imageView}>
					<Image source={require('../logo2.jpg')} style={styles.image} />
				</View>
				<View style={styles.textView}>
					<Text style={styles.textStyle}>Email Address</Text>
					<TextInput 
						style={styles.textInput}
						onChangeText={value=>setEmail(value)}
						value={email}
						placeholder="E-mail"
						placeholderTextColor="#69676C"
						autoCapitalize="none"
				 />
				</View>
				<View style={styles.textView}>
					<Text style={styles.textStyle}>Password</Text>
					<TextInput 
						style={styles.textInput}
						onChangeText={value=>setPassword(value)}
						value={password}
						placeholder="Password"
						placeholderTextColor="#706E73"
						secureTextEntry={true}
				 />
				</View>
			{/*button work*/}
				<View style={styles.button}>
					
					<TouchableOpacity 
					onPress={()=>{
						SignIn({email,password}),
						clearTextInput()
					}}
					style={styles.buttonStyle}
					activeOpacity={0.8}
					>
						<Text style={styles.buttonText}>SIGN IN</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.button}>
					
					<TouchableOpacity 
					onPress={()=>{navigation.navigate('SignUp')}}
					style={[styles.buttonStyle, {backgroundColor:'#DEB248'}]}
					activeOpacity={0.8}
					>
						<Text style={styles.buttonText}>No Account Yet? Sign Up Now</Text>
					</TouchableOpacity>
				</View>
			</View>
			</SafeAreaView>
		);
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#38363B',
	},
	textInput:{
		borderBottomWidth:1,
		borderColor:'#706E73',
		height:40,
		color:'white',
		fontSize:16,
	},
	textView:{
		//width:WIDTH-80,
		paddingVertical:15,

	},
	textStyle:{
		color:'#706E73',
		paddingVertical:5,
	},
	button:{
		marginHorizontal:12,
		paddingVertical:15,
	},
	buttonStyle:{
		backgroundColor:'#609FE6',
		paddingVertical:9,
		borderRadius:20,
	},
	buttonText:{
		color:'white',
		fontSize:16,
		textAlign:'center',
	},
	image:{
		height:80,
		width:80,
		borderRadius:30,
	},
	imageView:{
		alignItems:'center',
		justifyContent:'center',
		marginBottom:10,
	},
});

export default SignIn;






