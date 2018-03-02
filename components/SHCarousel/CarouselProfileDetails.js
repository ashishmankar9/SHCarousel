import React, {Component} from 'react';
import {View,Text} from 'react-native';


export default class CarouselProfileDetails extends Component {



    render(){

        const cityState = `${this.props.profile.location.city}, ${this.props.profile.location.state}`;
        
        return(
            
                <View
                    style = {{
                        flexDirection : 'column',
                        alignItems : 'flex-start',
                        alignSelf : 'stretch',
                        paddingLeft : 10,
                        paddingRight : 10,
                        marginTop : 6,
                        marginBottom : 5,
                    }}
                >
                    <Text
                        style = {{
                            fontSize : 12,
                            color : "#72727D"
                        }}
                        numberOfLines = {1}
                    >28 yrs, 5'2", Marathi</Text>
                    <Text
                        style = {{
                            fontSize : 12,
                            color : "#72727D"
                        }}
                        numberOfLines = {1}
                    >Kasar</Text>
                    <Text
                        style = {{
                            fontSize : 12,
                            color : "#72727D"
                        }}
                        numberOfLines = {1}
                    >{cityState}</Text>
                </View>

        );
    }

}