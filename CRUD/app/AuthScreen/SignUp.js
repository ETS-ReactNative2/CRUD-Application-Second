import React,{Component,useState,useContext,useEffect} from 'react';
import {View,Text,StyleSheet,TextInput,Button,
	Dimensions,TouchableOpacity,Image,

} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {Context as AuthContext} from '../context/AuthContext';


const WIDTH = Dimensions.get('window').width;

const SignUp=({navigation})=>{

	const {state,SignUp} = useContext(AuthContext);

	// useEffect(()=>{
	// 	AutomaticSignin();
	// },[]);


	const [name , setName] = useState('');
	const [mobile , setMobile] = useState('');
	const [password , setPassword] = useState('');
	const [email, setEmail] =useState('');

//console.log(state,SignUp);

function handleSubmit(){
    return(
    	setEmail(''),
    	setPassword(''),
    	setName(''),
    	setMobile('')
    );
};

			return(
			<SafeAreaView style={styles.container} >
			<View style={{width:WIDTH-80}}>
				<View style={styles.imageView}>
					<Image source={require('../logo2.jpg')} style={styles.image} />
				</View>
				<View style={styles.textView}>
					<Text style={styles.textStyle}>Enter Your Name</Text>
					<TextInput 
						style={styles.textInput}
						onChangeText={value=>setName(value)}
						value={name}
						placeholder="Full Name"
						placeholderTextColor="#69676C"
						autoCapitalize="none"
				 />
				</View>

				<View style={styles.textView}>
					<Text style={styles.textStyle}>Enter Your Mobile No</Text>
					<TextInput 
						style={styles.textInput}
						onChangeText={value=>setMobile(value)}
						value={mobile}
						placeholder=" Mobile No"
						placeholderTextColor="#69676C"
						autoCapitalize="none"
				 />
				</View>

				<View style={styles.textView}>
					<Text style={styles.textStyle}>Enter Your E-Mail</Text>
					<TextInput 
						style={styles.textInput}
						onChangeText={value=>setEmail(value)}
						value={email}
						placeholder="E-Main"
						placeholderTextColor="#69676C"
						autoCapitalize="none"
				 />
				</View>

				<View style={styles.textView}>
					<Text style={styles.textStyle}>Enter Your Password</Text>
					<TextInput 
						style={styles.textInput}
						onChangeText={value=>setPassword(value)}
						value={password}
						placeholder="Password"
						placeholderTextColor="#69676C"
						autoCapitalize="none"
						secureTextEntry={true}
				 />
				</View>
				<View style={styles.button}>
					
					<TouchableOpacity 
					onPress={()=>{
						SignUp({name,mobile,email,password}),
						handleSubmit()
					}}
					style={[styles.buttonStyle, {backgroundColor:'#609FE6'}]}
					activeOpacity={0.8}
					>
						<Text style={styles.buttonText}>SIGN UP</Text>
					</TouchableOpacity>
				</View>

				<View  style={[styles.button,{flexDirection:'row'}]}>
					<Text style={[styles.textStyle,{fontSize:16}]}>Already Have an account? </Text>
					<TouchableOpacity
						onPress={()=>{navigation.navigate('SignIn')}}
					>
						<Text style={[styles.textStyle,{fontSize:16,color:'#DEB248'}]}> LogIn Now </Text>
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
		paddingVertical:10,

	},
	textStyle:{
		color:'#706E73',
		paddingVertical:5,
	},
	button:{
		marginHorizontal:12,
		paddingVertical:10,
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
	},
});

export default SignUp;
