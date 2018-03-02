import React, {Component} from 'react'
import {View,TouchableOpacity,Alert,TouchableHighlight} from 'react-native'
import CarouselProfileImage from './CarouselProfileImage';
import CarouselConnectNowButton from './CarouselConnectNow';
import CarouselProfileDetails from './CarouselProfileDetails';

export default class CarouselProfileItem extends Component {

    render(){

        const placeholder = this.props.item.picture.medium ? this.props.item.picture.medium : "https://icons.iconarchive.com/icons/paomedia/small-n-flat/72/profile-icon.png"
        const fullname = `${this.props.item.name.first} ${this.props.item.name.last}`
        
        return(

            <View
                style = {{
                    flex : 1,
                    flexDirection : "column",
                    alignItems : "center",
                    width : 175,
                    borderRadius : 0,
                    borderWidth : 1,
                    borderColor : "#F1F1F1",
                    margin : 4
                }}
            >
                <TouchableOpacity
                    onPress = {()=>{Alert.alert(fullname)}}
                >
                    <CarouselProfileImage 
                        fullname = {fullname}
                        image = {placeholder}
                    />
                    <CarouselProfileDetails profile={this.props.item}/>
                </TouchableOpacity>
                    
                
                <TouchableOpacity
                    onPress = {()=>{Alert.alert('Connect Now')}}
                >
                    <CarouselConnectNowButton />
                </TouchableOpacity>
            </View>
        );
    }
}