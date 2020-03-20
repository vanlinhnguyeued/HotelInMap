import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, Animated, PanResponder, ImageBackground, } from 'react-native';
import styles from './styles';


const WIDTH_SCREEN = Dimensions.get('window').width;
const HEIGHT_SCREEN = Dimensions.get('window').height;
const CONTENT_MAX_MT = 20;
const CONTENT_MIN_MT = 0;
const CONTENT_MAX_HEIGHT = HEIGHT_SCREEN * 0.6;
const CONTENT_MIDLE_HEIGHT = HEIGHT_SCREEN * 0.5;
const CONTENT_MIN_HEIGHT = HEIGHT_SCREEN * 0.4;
const BTN_MAX_POSITION_RIGHT = '20%';
const BTN_MIN_POSITION_RIGHT = '-50%';
const HEIGHT_MIN_ADDRESSVIEW = '40%';
const HEIGHT_MAX_ADDRESSVIEW = '70%';
const HEIGHT_MAX_IMGVIEW = '60%';
const HEIGHT_MIN_IMGVIEW = '40%';
const WIDTH_MAX_IMGVIEW = '100%';
const WIDTH_MIN_IMGVIEW = '50%';
const TOP_MAX_CONTACTVIEW = '70%';
const TOP_MIN_CONTACTVIEW = '0%';
const CONTENT_MAX_LEFT = WIDTH_SCREEN / 2;
const CONTENT_MIN_LEFT = 0;
const CALL_MAX_LEFT = 0;
const CALL_MIN_LEFT = -200;
const BOTTOM_MAX_ADDRESSVIEW = '30%';
const BOTTOM_MIN_ADDRESSVIEW = '0%';
const HEIGHT_MAX_MAXIMVIEW = '100%';
const HEIGHT_MIN_MAXIMVIEW = '70%';
const BOTTOM_MAX_TXTMAXIM = 200;
const BOTTOM_MIN_TXTMAXIM = 30;


function getOpenTime(item) {
    if (item.opening_hours) {
        let tr = '';
        if (item.opening_hours.open_now == false) {
            tr = 'CLOSED';
        }
        else tr = 'OPENING';
        return tr;
    } else {
        return 'OPENING';
    }
}
const DetailsActivity = ({ route }) => {
    const { item } = route.params;
    const [XMAX, setXMAX] = useState()
    const [XMIN, setXMIN] = useState()

    const _pressCall = new Animated.Value(0);
    const _panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

        onPanResponderGrant: (evt, gestureState) => {
        },
        onPanResponderMove: (evt, gestureState) => {
        },
        onPanResponderRelease: (evt, gestureState) => {
            if (gestureState.vx < 0) {
                Animated.timing(_pressCall, {
                    toValue: 0,
                    duration: 500,
                }).start();
                console.log(_pressCall);
            }
        },
    });


    const _scrollX = new Animated.Value(0);
    const _openScreen = new Animated.Value(0);
    const marginToptContent = _scrollX.interpolate({
        inputRange: [0, 20],
        outputRange: [CONTENT_MIN_MT, CONTENT_MAX_MT],
        extrapolate: 'clamp',
    })
    const secondHeightContent = _scrollX.interpolate({
        inputRange: [0, 20],
        outputRange: [CONTENT_MIN_HEIGHT, CONTENT_MIDLE_HEIGHT],
        extrapolate: 'clamp',
    })
    const rightBTNPlay = _scrollX.interpolate({
        inputRange: [0, 10],
        outputRange: [BTN_MAX_POSITION_RIGHT, BTN_MIN_POSITION_RIGHT],
        extrapolate: 'clamp',
    })
    const heightAddressView = _scrollX.interpolate({
        inputRange: [0, 20],
        outputRange: [HEIGHT_MIN_ADDRESSVIEW, HEIGHT_MAX_ADDRESSVIEW],
        extrapolate: 'clamp',
    })
    const heightImgView = _scrollX.interpolate({
        inputRange: [0, 20],
        outputRange: [HEIGHT_MAX_IMGVIEW, HEIGHT_MIN_IMGVIEW],
        extrapolate: 'clamp',
    })
    const widthImgView = _scrollX.interpolate({
        inputRange: [0, 20],
        outputRange: [WIDTH_MAX_IMGVIEW, WIDTH_MIN_IMGVIEW],
        extrapolate: 'clamp',
    })
    const bottomToAdressView = _scrollX.interpolate({
        inputRange: [0, 20],
        outputRange: [BOTTOM_MIN_ADDRESSVIEW, BOTTOM_MAX_ADDRESSVIEW],
        extrapolate: 'clamp',
    })
    const opacityMaxToMin = _scrollX.interpolate({
        inputRange: [0, 10],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    })
    const opacityMinToMax = _scrollX.interpolate({
        inputRange: [0, 20],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    })
    const heightMaximView = _scrollX.interpolate({
        inputRange: [0, 20],
        outputRange: [HEIGHT_MAX_MAXIMVIEW, HEIGHT_MIN_MAXIMVIEW],
        extrapolate: 'clamp',
    })
    const bottomTxtMaxim = _scrollX.interpolate({
        inputRange: [0, 20],
        outputRange: [BOTTOM_MAX_TXTMAXIM, BOTTOM_MIN_TXTMAXIM],
        extrapolate: 'clamp',
    })
    const topContactView = _scrollX.interpolate({
        inputRange: [0, 20],
        outputRange: ['50%', TOP_MAX_CONTACTVIEW],
        extrapolate: 'clamp',
    })
    const leftContactView = _scrollX.interpolate({
        inputRange: [0, 20],
        outputRange: [500, 0],
        extrapolate: 'clamp',
    })
    const leftContentView_PC = _pressCall.interpolate({
        inputRange: [0, 20],
        outputRange: [CONTENT_MIN_LEFT, CONTENT_MAX_LEFT],
        extrapolate: 'clamp',
    })
    const leftCallView_PC = _pressCall.interpolate({
        inputRange: [0, 20],
        outputRange: [CALL_MIN_LEFT, CALL_MAX_LEFT],
        extrapolate: 'clamp',
    })
    const opacityMinToMax_OS = _openScreen.interpolate({
        inputRange: [0, 20],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    })
    const topContent_OS = _openScreen.interpolate({
        inputRange: [0, 10],
        outputRange: ['100%', "0%"],
        extrapolate: 'clamp',
    })
    const heightContact = _scrollX.interpolate({
        inputRange: [10, 20],
        outputRange: ['0%', '40%'],
        extrapolate: 'clamp',
    })
    const widthtContact = _scrollX.interpolate({
        inputRange: [0, 20],
        outputRange: ['0%', '100%'],
        extrapolate: 'clamp',
    })
    const leftBTNCT = _scrollX.interpolate({
        inputRange: [10, 20],
        outputRange: [-600, 0],
        extrapolate: 'clamp',
    })
    const heightCallBTN_PC = _pressCall.interpolate({
        inputRange: [0, 20],
        outputRange: [48, 0],
        extrapolate: 'clamp',
    })
    const widthCallBTN_PC = _pressCall.interpolate({
        inputRange: [0, 20],
        outputRange: [48, 0],
        extrapolate: 'clamp',
    })
    const heightCallBTN_PC_1 = _pressCall.interpolate({
        inputRange: [0, 20],
        outputRange: [0, 48],
        extrapolate: 'clamp',
    })
    const widthCallBTN_PC_1 = _pressCall.interpolate({
        inputRange: [0, 20],
        outputRange: [0, 48],
        extrapolate: 'clamp',
    })
    useEffect(() => {
        Animated.timing(
            _openScreen, {
            toValue: 20,
            duration: 1000,
        }
        ).start()
    }, [])
    return (
        <View style={{ flex: 1, position: 'relative', backgroundColor: 'white', }} >
            <Animated.View
                {..._panResponder.panHandlers}
                style={{
                    position: 'absolute',
                    height: CONTENT_MAX_HEIGHT - 20,
                    width: WIDTH_SCREEN / 2,
                    left: leftCallView_PC,
                    marginTop: 20,
                }}>
                <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, }}>
                    <Image
                        style={{ flex: 1, width: null, height: null }}
                        source={require('../../assets/Images/customerServices.jpg')}
                    />
                </View>
                <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0,opacity: 0.5, backgroundColor: 'black' }}>     
                </View>
                <View style={{ width: '100%', height: '100%', position: 'absolute', top: 50, left: 20,}}>
                    <Text style = {{color: 'gold', fontSize: 18, fontWeight: '500'}}>
                        CUSTOM SERVICE
                    </Text>
                    <Text style = {{color: 'white', fontSize: 15, fontWeight: '500', marginTop: 10}}>
                        David
                    </Text>
                </View>
                <Animated.View style={{ width: widthCallBTN_PC_1, height: heightCallBTN_PC_1, margin: 10, position: 'absolute', top: '75%', left: '30%' }}>
                    <TouchableOpacity style={{ flex: 1 }}>
                        <Animated.Image
                            style={{ width: widthCallBTN_PC_1, height: heightCallBTN_PC_1 }}
                            source={require('../../assets/Icons/telephone.png')} />
                    </TouchableOpacity>
                </Animated.View>

            </Animated.View>

            <Animated.View style={[
                styles.content,
                {
                    left: leftContentView_PC,
                    top: topContent_OS,
                    opacity: opacityMinToMax_OS,
                    height: secondHeightContent,
                    marginTop: marginToptContent,
                    marginLeft: marginToptContent,
                }
            ]}>
                <Animated.View style={[styles.viewMaxim, { height: heightMaximView }]}>
                    <Animated.Text style={[
                        styles.txtMaxim,
                        {
                            bottom: bottomTxtMaxim,
                            opacity: opacityMinToMax
                        }]}>
                        “We travel, some of us forever, to seek other places, other lives, other souls.” – Anais Nin.
                    </Animated.Text>
                </Animated.View>
                <Animated.View style={[
                    styles.contactView, {
                        top: topContactView,
                        left: leftContactView,
                        opacity: opacityMinToMax,
                        width: widthtContact,
                        height: heightContact,
                        backgroundColor: 'white',
                        borderRadius: 100,
                    }]}>
                    <View style={styles.imgConTactView}>
                        <Text style={styles.textOrder}>
                            ORDER
                        </Text>
                        <Animated.View style={{ flexDirection: 'row', height: 60, width: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 50, left: leftBTNCT }}>
                            <Animated.View style={{ width: widthCallBTN_PC, height: heightCallBTN_PC, margin: 10 }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        Animated.timing(
                                            _pressCall, {
                                            toValue: 20,
                                            duration: 500,
                                        }
                                        ).start()
                                    }} style={{ flex: 1 }}>
                                    <Animated.Image
                                        style={{ width: widthCallBTN_PC, height: heightCallBTN_PC }}
                                        source={require('../../assets/Icons/telephone.png')} />
                                </TouchableOpacity>
                            </Animated.View>
                            <Animated.View style={{ width: 48, height: 48, margin: 10 }}>
                                <TouchableOpacity style={{ flex: 1 }}>
                                    <Animated.Image
                                        source={require('../../assets/Icons/mail.png')} />
                                </TouchableOpacity>
                            </Animated.View>
                            <Animated.View style={{ width: 48, height: 48, margin: 10 }}>
                                <TouchableOpacity style={{ flex: 1 }}>
                                    <Animated.Image
                                        source={require('../../assets/Icons/placeholder.png')} />
                                </TouchableOpacity>
                            </Animated.View>
                        </Animated.View>
                    </View>
                    <View style={styles.imgConTactView}>
                        <Image
                            style={styles.imgConTact}
                            source={require('../../assets/Images/family.jpg')}
                        />
                    </View>
                </Animated.View>
                <Animated.View style={[
                    styles.addressView,
                    {
                        height: heightAddressView,
                        bottom: bottomToAdressView,
                    }]}>
                    <Text style={styles.nameItem}>
                        {item.name}
                    </Text>
                    <Animated.Text style={[
                        styles.status,
                        {
                            opacity: opacityMaxToMin,
                        }
                    ]}>
                        <Image
                            source={require('../../assets/Icons/clock.png')}
                        />
                        {'  '}{getOpenTime(item)}
                    </Animated.Text>
                    <Animated.View style={[styles.btnView, { right: rightBTNPlay }]}>
                        <TouchableOpacity
                            style={styles.btnPlay}
                            onPress={() => {
                                Animated.timing(
                                    _scrollX, {
                                    toValue: 20,
                                    duration: 1500,
                                }
                                ).start()
                            }}
                        >
                            <Image style={styles.imgHotelRoom} source={require('../../assets/Icons/play.png')} />
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.Text style={[styles.txtAddress, { opacity: opacityMinToMax }]}>
                        {item.vicinity}
                    </Animated.Text>
                </Animated.View>
                <Animated.View style={[
                    styles.imgView,
                    {
                        height: heightImgView,
                        width: widthImgView,
                    }
                ]}>
                    <Image
                        style={styles.imgHotelRoom}
                        source={require('../../assets/Images/hotelRoom.jpg')} />
                </Animated.View>
            </Animated.View>
            <View style={styles.feedBack}>

            </View>
        </View>
    )
}
export default DetailsActivity;
