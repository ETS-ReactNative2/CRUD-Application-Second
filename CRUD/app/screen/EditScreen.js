import React,{Component,useState,useContext} from 'react';
import {
	View,Text,Button,FlatList,TextInput,StyleSheet,Dimensions,
	Keyboard,TouchableWithoutFeedback,TouchableOpacity,
}from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Context as BlogContext} from '../context/BlogContext';

const WIDTH = Dimensions.get('window').width;


const DismisKeyBoard=({children})=>{

	return(
		<TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
		{children}
		</TouchableWithoutFeedback>
		);
		
	};


const EditScreen =({route,navigation,initialValues})=>{

	const {id} =route.params;

	const {state,addBlogPost,EditBlogPost} =useContext(BlogContext);

	const filter = state.find((some)=>some.id===id);
	

	const [title , setTitle] =useState(filter.title);
	const [text , setText] =useState(filter.text);
//console.log(title,text);
	const ClearText=()=>{
		return(
			setText(''),
			setTitle('')
		);
	};


	return(
		<SafeAreaView style={styles.container} >
		<DismisKeyBoard>
			<View style={{width:WIDTH-80}}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Edit your Blog!</Text>
			</View>

			<TextInput 
				style={[styles.textInput,]}
				onChangeText={value=>setTitle(value)}
				value={title}
				placeholder="Enter Your Title..."
				placeholderTextColor="#706E73"
		 />
		 <TextInput 
				style={[styles.textInput,{height:80}]}
				onChangeText={value=>setText(value)}
				value={text}
				placeholder="Enter Your Content..."
				placeholderTextColor="#706E73"
		 />
			<View style={styles.button}>
				<TouchableOpacity 
				onPress={()=>{
					EditBlogPost(id,title,text),
					ClearText(),
					navigation.pop()
				}}
				style={styles.buttonStyle}
				activeOpacity={0.8}
				>
					<Text style={styles.buttonText}>save</Text>
				</TouchableOpacity>
			</View>
			
		</View>
		</DismisKeyBoard>
		</SafeAreaView>
	);
};

EditScreen.defaultProps={
	initialValues:{
		title: '',
		text: '',
	}
};

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		//backgroundColor:'#38363B',
	},
	textInput:{
		borderWidth:1,
		borderColor:'#706E73',
		height:40,
		fontSize:16,
		marginVertical:20,
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
	header:{
		height:70,
		marginTop:-20,

	},
	headerText:{
		fontSize:20,
		textAlign:'center',
	}
})

export default EditScreen;