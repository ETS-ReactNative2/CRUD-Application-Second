import createDataContext from './createDataContext';
import tracker from '../api/tracker';
import {Text} from 'react-native';
import * as RootNavigation from '../RootNavigation';
//import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const reducer =(state , action)=>{
	switch(action.type){
		case 'signIn_Up':
			return{...state, token: action.payload};
		case 'signout':
			return {token:null ,};
		default:
		return state;
	}
};

const signOut =(dispatch)=>{
	return async ()=>{
		await AsyncStorage.removeItem('token');
		dispatch({type: 'signout' });
		RootNavigation.navigate('SignIn');
	};
};


const SignIn=(dispatch)=>{
	return async ({email,password})=>{
		try{

			const response = await tracker.post('/signin',{email , password});
			await AsyncStorage.setItem('token' , response.data.token);
			dispatch({type:'signIn_Up',payload:response.data.token});
			
			RootNavigation.navigate('Create')

		}catch(err){
			console.log(err.message);
		}
		
	};
};


const SignUp=(dispatch)=>{
	return async ({name,mobile,email,password})=>{
		try{
			//console.log(name,mobile,email,password);
			const response = await tracker.post('/signup',{name,mobile,email , password});
		  await AsyncStorage.setItem('token' , response.data.token);

			dispatch({type: 'signIn_Up', payload:response.data.token,});

			RootNavigation.navigate('Create')
		}catch(err){
			console.log(err.message);
		}
	};
};

const AutomaticSignin =(dispatch)=>{
	return async ()=>{

		//console.log('async-storage before');

		const token = await AsyncStorage.getItem('token');

		//console.log(token);
		if(token){
			dispatch({type:'signIn_Up' , payload:token});

			RootNavigation.navigate('Create')
		}
		else{
			RootNavigation.navigate('SignIn');
			//console.log(token);
		}
	};
};




export const {Context , Provider} = createDataContext(
	reducer,
	{SignIn,SignUp,AutomaticSignin,signOut},
	{token:null,errorMessage: '',takeEmail: '',alldata:null,getalldata:''}
);