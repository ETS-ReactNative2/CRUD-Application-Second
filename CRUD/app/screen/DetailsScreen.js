import React,{Component,useContext} from 'react';
import {
	View,Text,FlatList,StyleSheet,TouchableOpacity,Dimensions
}from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-ionicons';

const WIDTH = Dimensions.get('window').width;

const DetailsScreen =({navigation})=>{
	const {state,addBlogPost,DeteBlog} =useContext(BlogContext);
	return(
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>All Blog List Here!</Text>
			</View>
			<FlatList
				data={state}
				keyExtractor={some=>some.id}
				renderItem={({item})=>{
					return(
						<TouchableOpacity activeOpacity={0.5}
							onPress={()=>{navigation.navigate('Setting',{id:item.id})}}
						>
						<View style={styles.viewStyle}>
							<Text style={styles.textStyle}>{item.title}</Text>
								<Icon name="create-outline" size={35} color="#656565"
									style={{paddingRight:5,}}
									onPress={()=>{navigation.navigate('Edit',{id:item.id})}}
								/>
							 <Icon name="trash-outline" color="#888888" 
							 style={{marginTop:4,}}
							 	onPress={()=>{DeteBlog(item.id)}}
							 />
						</View>
						</TouchableOpacity>
						
					);
				}}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	viewStyle:{
		marginHorizontal:15,
		borderWidth:2,
		marginVertical:5,
		padding:5,
		flexDirection:'row'

	},
	header:{
		marginVertical:5,
	},
	headerText:{
		fontSize:20,
		textAlign:'center',
	},
	container:{
		width:WIDTH-5,
		flex:1,
	},
	textStyle:{
		fontSize:16,
		fontWeight:'bold',
		width:"80%",
		marginTop:5,
	},

});

export default DetailsScreen;

