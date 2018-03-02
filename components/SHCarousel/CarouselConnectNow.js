import React , { Component } from "react";
import {View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CarouselConnectNowButton extends Component {

    render(){
        return(
            <View
                    style = {{
                        width : 158,
                        height : 30,
                        borderColor : "#03BBD5",
                        borderRadius : 3,
                        borderWidth : 1,
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent : 'center',
                        
                    }}
                >
                
                    <View
                        style = {{
                            marginRight : 5,
                            marginTop : 3
                        }}
                    >
                        <Icon 
                            name = "ios-checkmark"
                            size = {32}
                            color = "#03BBD5"
                        />
                    </View>
                    
                    <Text
                        style = {{
                            color : "#03BBD5",
                            fontSize : 13,
                        }}
                    >Connect Now</Text>
                </View>
        );
    }

}