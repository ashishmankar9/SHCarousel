import React , { Component } from "react";
import { View, Image, Text } from 'react-native';

export default class CarouselProfileImage extends Component {

    render(){
        return(
            
            <View 
                    style = {{
                        width : 175,
                        height : 175
                    }}
                >
                   <Image
                    style = {{
                        width : 175,
                        height : 175,
                        flexDirection : 'row',
                        alignItems : 'flex-end'
                    }}
                    source = {{
                        uri : this.props.image
                    }}
                />
                    <View
                        style = {{
                            width : 175,
                            height : 35,
                            backgroundColor : 'black',
                            marginTop : -35,
                            opacity : 0.2
                        }}
                    >
                    </View>
                    <Text
                        style = {{
                            marginTop : -28,
                            marginLeft: 15,
                            color : '#FFF'
                        }}
                    >{this.props.fullname}</Text>
                </View>
                
        );
    }

}