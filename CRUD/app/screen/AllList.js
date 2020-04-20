import React,{Component,useContext} from 'react';
import {
	View,Text,FlatList,StyleSheet,TouchableOpacity
}from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const AllList =({navigation})=>{
	const {state,addBlogPost} =useContext(BlogContext);
	return(
		<SafeAreaView style={{flex:1,}}>
			<View style={styles.header}>
				<Text style={styles.headerText}>All Blog List Here!</Text>
			</View>
			<FlatList
				data={state}
				keyExtractor={some=>some.id}
				renderItem={({item})=>{
					return(
						<View style={styles.viewStyle}>
						<TouchableOpacity activeOpacity={0.7}
							onPress={()=>{navigation.navigate('Details',{id:item.id})}}
						>
							<Text >{item.title}</Text>
						</TouchableOpacity>
						</View>
						
					);
				}}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	viewStyle:{
		margin:5,
	},
	header:{
		marginVertical:5,
	},
	headerText:{
		fontSize:20,
		textAlign:'center',
	}
});

export default AllList;