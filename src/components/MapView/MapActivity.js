import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { ListHomeStayActivity, HomeActivity, DetailsItemActivity } from '../../data/screenNames';
import ggAPIKey from '../../data/APIKEY';
import styles from './styles';


const darkMode = require('./mapStyle');


const MapActivity = ({ navigation }) => {
    const [nameCity, setNameCity] = useState('');
    const [addressToFind, setaddressToFind] = useState('');
    const [cityRegion, setCityRegion] = useState({
        latitude: 16.0645841,
        longitude: 108.1493792,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
    });
    const [hotels, sethotels] = useState([]);
    const _mapView = useRef(null)
    getLocationByCityName = async () => {
        let url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + nameCity + '&inputtype=textquery&fields=geometry&key=' + ggAPIKey;
        try {
            let response = await fetch(url);
            let responseJson = await response.json();
            return responseJson.candidates[0].geometry.location;
        } catch (error) {
            console.log(error)
        }
    }
    setRegion = async () => {
        let location = await getLocationByCityName();
        latitude = location.lat;
        longitude = location.lng;
        setCityRegion({
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
        })
        _mapView.current.animateToRegion(cityRegion, 1000)
    }
    getDataCityName = async () => {
        let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + cityRegion.latitude + ',' + cityRegion.longitude + '&radius=10000&types=lodging&key=' + ggAPIKey;
        try {
            let response = await fetch(url);
            let responseJson = await response.json();
            return responseJson.results;
        } catch (error) {
            console.log(error)
        }
    };
    setDataToHotles = async () => {
        sethotels(await getDataCityName());
    }
    renderObjsMarker = () => {
        var objsMarker = [];
        var objsToFind = hotels;
        for (let i = 0; i < objsToFind.length; i++) {
            let latitude = objsToFind[i].geometry.location.lat;
            let longitude = objsToFind[i].geometry.location.lng;
            let location = {
                latitude: latitude,
                longitude: longitude,
            }
            objsMarker.push(
                <MapView.Marker
                    key={i.id}
                    image={require('../../assets/Icons/hotelLocation.png')}
                    coordinate={location}
                />
            )

        }
        return objsMarker;
    }
    getCurrentPosition = () => {
        Geolocation.getCurrentPosition((position) => {
            setCityRegion({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
            });
            _mapView.current.animateToRegion(cityRegion, 1000);
            setDataToHotles();
        },
            (error) => alert(JSON.stringify(error)),
            { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
        )
    };
    useEffect(() => {
        getCurrentPosition();
      }, [])
    return (
        <View style={styles.mainView}>
            <MapView
                ref={_mapView}
                style={styles.mapView}
                initialRegion={cityRegion}
                customMapStyle={darkMode}
            >
                <MapView.Marker
                    image={require('../../assets/Icons/pin.png')}
                    coordinate={cityRegion}
                />
                {renderObjsMarker()}
            </MapView>
            <View style={styles.searchView}>
                <TextInput
                    style={styles.searchInput}
                    placeholder='Enter the address...'
                    placeholderTextColor='gray'
                    value={nameCity}
                    onChangeText={(value) => { setNameCity(value); }} />
                <TouchableOpacity
                    onPress={async () => {
                        if (nameCity == '') {
                            alert('Please enter city name');
                        }
                        else {
                            await setRegion();
                            await setDataToHotles();
                        }

                    }}
                >
                    <Image source={require('../../assets/Icons/search.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.seeDetailsView}>
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.seeDetailsBtn}
                    onPress={() => {
                        navigation.navigate(ListHomeStayActivity, { hotels: hotels })
                    }}
                >
                    <Text style={styles.seeDailtText}> See list details</Text>
                    <Image source={require('../../assets/Icons/send.png')} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.targetBtn}
                    activeOpacity={0.6}
                    onPress={() => {
                        getCurrentPosition();
                        setDataToHotles();

                    }}
                >
                    <Image style={styles.targetImg} source={require('../../assets/Icons/target.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default MapActivity;