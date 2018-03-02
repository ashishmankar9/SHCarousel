import React , { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image, ImageBackground, Alert, Platform,TouchableNativeFeedback, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { FlatList } from "react-native-gesture-handler";
import { carouselFlatListData } from '../Data/CarouselFlatListData';
import Icon from 'react-native-vector-icons/Ionicons';
import CarouselProfileItem from './SHCarousel/CarouselProfileItem';

export default class SHCarouselProfile extends Component {


    render(){

        return(
            <View
                style={{
                    flex:1,
                    flexDirection:'column',
                    alignItems : 'flex-start',
                    justifyContent : 'center',
                    
                }}
            >
                <View
                    style ={{
                        paddingLeft: 15,
                        paddingRight:15,
                        height : 30,
                        backgroundColor : "#F1F1F2",
                        flexDirection : 'row',
                        alignItems : 'center',
                        alignSelf : 'stretch'
                    }}
                >
                    <Text
                        numberOfLines = {1}
                    >{`${this.props.section} (${carouselFlatListData.length})`}</Text>
                </View>
                <View 
                    style = {{
                        height : 332,
                        borderBottomColor : "#CCC",
                        borderLeftColor : "#FFF",
                        borderRightColor : "#FFF",
                        borderTopColor : "#CCC",
                        borderWidth: 1,
                    }}
                >
                    <View 
                        style = {{
                            height : 275
                        }}>
                        <FlatList
                            style = {{
                                backgroundColor:'white'
                                
                            }}
                            data={carouselFlatListData}
                            horizontal = {true}
                            renderItem = {
                                ({item,index}) => {
                                    return (
                                        <CarouselProfileItem item={item} index={index} parentFlatList={this}>
                                        </CarouselProfileItem>
                                    )
                                }
                            }
                            keyExtractor = {(item,index) => item.email}
                            showsHorizontalScrollIndicator = {false}
                        >
                        </FlatList>
                    </View>
                    <TouchableOpacity
                        onPress = {() => {
                            Alert.alert('See All')
                        }}
                    >
                        <View
                            style = {{
                                height : 35,
                                flexDirection : 'row',
                                alignItems : 'flex-end',
                                justifyContent : 'center',
                                backgroundColor : '#fff'
                            }}
                        >
                            <Text
                                style = {{
                                    color : "#03BBD5"
                                }}
                            >See All</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );

    }

}