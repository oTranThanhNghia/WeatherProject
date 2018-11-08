/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
  Dimensions,
  ScrollView,
  ImageBackground,
  StatusBar,
} from 'react-native';

import CountryClass from '~/model/CountryClass';

import Swiper from 'react-native-swiper';

import styleCommon from '~/theme/styleCommon';

const platform = Platform.OS;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const startIndexSwiper = 0;

console.log(`platform=${platform}deviceHeight=${deviceHeight}deviceWidth=${deviceWidth}`);

export default class App extends Component {
  state = {
    items: Array<CountryClass>(),
    titleHeader: String,
  };

  constructor(props: any) {
    super(props);
    this.state.items.push(new CountryClass('Ha Noi'));
    this.state.items.push(new CountryClass('Hai Phong'));
    this.state.items.push(new CountryClass('Ho Chi Minh'));
  }

  changeTextHeader = (index: number) => {
    console.log(`1 index=${index} titleHeader=${this.state.titleHeader}`);
    this.setState({
      titleHeader: this.state.items[index].getName(),
    });
    console.log(`2 index=${index} titleHeader=${JSON.stringify(this.state.titleHeader)}`);
  };

  componentDidMount() {
    this.setState({
      titleHeader: this.state.items[startIndexSwiper].name,
    });
  }

  render() {
    return (
      <ImageBackground
        source={require('~/assests/images/background_app.jpg')}
        style={{
          flex: 1,
          resizeMode: 'cover',
          backgroundColor: 'transparent',
          height: null,
          width: null,
        }}
      >
        <StatusBar
          backgroundColor={platform === 'ios' ? 'transparent' : '#fff'}
          barStyle="light-content"
        />
        <View
          style={{
            backgroundColor: '#00000040',
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />

        <View style={styles.headerStyle}>
          <Text style={styles.textHeader}>{this.state.titleHeader}</Text>

          <Image
            source={require('~/assests/images/icon_menu.png')}
            style={{ height: 30, width: 30, marginEnd: 12 }}
          />
        </View>
        <Swiper
          loop={false}
          index={startIndexSwiper}
          onIndexChanged={this.changeTextHeader}
          paginationStyle={{ top: 0, alignItems: 'flex-start' }}
          dotStyle={{ backgroundColor: '#ffffff6a' }}
          activeDotStyle={{ backgroundColor: '#fff' }}
        >
          {this.state.items.map((items, key) => (
            <ScrollView key={key} contentContainerStyle={styles.containerStyle}>
              <View style={styles.bodyStyles}>
                <View style={styles.viewTempurature}>
                  <Text style={styles.textTempurature}>30º</Text>
                  <Text style={styles.textWeather}>Sunny</Text>
                </View>

                <View>
                  <View style={styles.viewGroupDaysOfWeek}>
                    <View style={[styles.viewGroupDaysOfWeek, styles.viewDaysOfWeek]}>
                      <Text style={styles.textItem}>Tue</Text>
                      <Text style={styles.textItem}>Today</Text>
                    </View>
                    <View style={[styles.viewGroupDaysOfWeek, styles.viewTemperature]}>
                      <Text style={styles.textItem}>21º</Text>
                      <Text style={styles.textItem}>31º</Text>
                    </View>
                  </View>

                  <View style={styles.viewDivider} />

                  <View style={styles.viewGroupDaysOfWeek}>
                    <View style={[styles.viewGroupDaysOfWeek, { width: '33%' }]}>
                      <Text style={styles.textItem}>Wed</Text>
                    </View>
                    <View
                      style={{
                        width: '33%',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Image
                        source={require('~/assests/images/rain_64.png')}
                        style={styles.iconStyleWeather}
                      />
                    </View>
                    <View
                      style={[
                        styles.viewGroupDaysOfWeek,
                        {
                          width: '33%',
                          alignItems: 'flex-end',
                          justifyContent: 'flex-end',
                        },
                      ]}
                    >
                      <Text style={styles.textItem}>21º</Text>
                      <Text style={styles.textItem}>31º</Text>
                    </View>
                  </View>

                  <View style={styles.viewGroupDaysOfWeek}>
                    <View style={[styles.viewGroupDaysOfWeek, styles.viewDaysOfWeek]}>
                      <Text style={styles.textItem}>Thu</Text>
                    </View>
                    <View style={styles.viewWeather}>
                      <Image
                        source={require('~/assests/images/rain_64.png')}
                        style={styles.iconStyleWeather}
                      />
                    </View>
                    <View style={[styles.viewGroupDaysOfWeek, styles.viewTemperature]}>
                      <Text style={styles.textItem}>21º</Text>
                      <Text style={styles.textItem}>31º</Text>
                    </View>
                  </View>

                  <View style={styles.viewGroupDaysOfWeek}>
                    <View style={[styles.viewGroupDaysOfWeek, styles.viewDaysOfWeek]}>
                      <Text style={styles.textItem}>Fri</Text>
                    </View>
                    <View style={styles.viewWeather}>
                      <Image
                        source={require('~/assests/images/rain_64.png')}
                        style={styles.iconStyleWeather}
                      />
                    </View>
                    <View style={[styles.viewGroupDaysOfWeek, styles.viewTemperature]}>
                      <Text style={styles.textItem}>21º</Text>
                      <Text style={styles.textItem}>31º</Text>
                    </View>
                  </View>

                  <View style={styles.viewGroupDaysOfWeek}>
                    <View style={[styles.viewGroupDaysOfWeek, styles.viewDaysOfWeek]}>
                      <Text style={styles.textItem}>Sat</Text>
                    </View>
                    <View style={styles.viewWeather}>
                      <Image
                        source={require('~/assests/images/rain_64.png')}
                        style={styles.iconStyleWeather}
                      />
                    </View>
                    <View style={[styles.viewGroupDaysOfWeek, styles.viewTemperature]}>
                      <Text style={styles.textItem}>21º</Text>
                      <Text style={styles.textItem}>31º</Text>
                    </View>
                  </View>

                  <View style={styles.viewGroupDaysOfWeek}>
                    <View style={[styles.viewGroupDaysOfWeek, styles.viewDaysOfWeek]}>
                      <Text style={styles.textItem}>Sun</Text>
                    </View>
                    <View style={styles.viewWeather}>
                      <Image
                        source={require('~/assests/images/rain_64.png')}
                        style={styles.iconStyleWeather}
                      />
                    </View>
                    <View style={[styles.viewGroupDaysOfWeek, styles.viewTemperature]}>
                      <Text style={styles.textItem}>21º</Text>
                      <Text style={styles.textItem}>31º</Text>
                    </View>
                  </View>

                  <View style={styles.viewGroupDaysOfWeek}>
                    <View style={[styles.viewGroupDaysOfWeek, styles.viewDaysOfWeek]}>
                      <Text style={styles.textItem}>Sun</Text>
                    </View>
                    <View style={styles.viewWeather}>
                      <Image
                        source={require('~/assests/images/rain_64.png')}
                        style={styles.iconStyleWeather}
                      />
                    </View>
                    <View style={[styles.viewGroupDaysOfWeek, styles.viewTemperature]}>
                      <Text style={styles.textItem}>21º</Text>
                      <Text style={styles.textItem}>31º</Text>
                    </View>
                  </View>

                  <View style={styles.viewGroupDaysOfWeek}>
                    <View style={[styles.viewGroupDaysOfWeek, styles.viewDaysOfWeek]}>
                      <Text style={styles.textItem}>Sun</Text>
                    </View>
                    <View style={styles.viewWeather}>
                      <Image
                        source={require('~/assests/images/rain_64.png')}
                        style={styles.iconStyleWeather}
                      />
                    </View>
                    <View style={[styles.viewGroupDaysOfWeek, styles.viewTemperature]}>
                      <Text style={styles.textItem}>21º</Text>
                      <Text style={styles.textItem}>31º</Text>
                    </View>
                  </View>

                  <View style={styles.viewGroupDaysOfWeek}>
                    <View style={[styles.viewGroupDaysOfWeek, styles.viewDaysOfWeek]}>
                      <Text style={styles.textItem}>Sun</Text>
                    </View>
                    <View style={styles.viewWeather}>
                      <Image
                        source={require('~/assests/images/rain_64.png')}
                        style={styles.iconStyleWeather}
                      />
                    </View>
                    <View style={[styles.viewGroupDaysOfWeek, styles.viewTemperature]}>
                      <Text style={styles.textItem}>21º</Text>
                      <Text style={styles.textItem}>31º</Text>
                    </View>
                  </View>

                  <View style={styles.viewGroupDaysOfWeek}>
                    <View style={[styles.viewGroupDaysOfWeek, styles.viewDaysOfWeek]}>
                      <Text style={styles.textItem}>Sun</Text>
                    </View>
                    <View style={styles.viewWeather}>
                      <Image
                        source={require('~/assests/images/rain_64.png')}
                        style={styles.iconStyleWeather}
                      />
                    </View>
                    <View style={[styles.viewGroupDaysOfWeek, styles.viewTemperature]}>
                      <Text style={styles.textItem}>21º</Text>
                      <Text style={styles.textItem}>31º</Text>
                    </View>
                  </View>

                  <View style={styles.viewGroupDaysOfWeek}>
                    <View style={[styles.viewGroupDaysOfWeek, styles.viewDaysOfWeek]}>
                      <Text style={styles.textItem}>Sun</Text>
                    </View>
                    <View style={styles.viewWeather}>
                      <Image
                        source={require('~/assests/images/rain_64.png')}
                        style={styles.iconStyleWeather}
                      />
                    </View>
                    <View style={[styles.viewGroupDaysOfWeek, styles.viewTemperature]}>
                      <Text style={styles.textItem}>21º</Text>
                      <Text style={styles.textItem}>31º</Text>
                    </View>
                  </View>

                  <View style={styles.viewDivider} />

                  <View
                    style={{
                      justifyContent: 'space-between',
                      alignContent: 'center',
                      paddingStart: 40,
                      paddingEnd: 40,
                      paddingTop: 20,
                      paddingBottom: 20,
                      flexDirection: 'row',
                    }}
                  >
                    <View
                      style={{
                        alignItems: 'center',
                      }}
                    >
                      <Image
                        source={require('~/assests/images/thermometer_64.png')}
                        style={[styles.iconStyleWeather]}
                      />
                      <Text style={styles.textItem}>23º</Text>
                    </View>

                    <View
                      style={{
                        alignItems: 'center',
                      }}
                    >
                      <Image
                        source={require('~/assests/images/humidity_64.png')}
                        style={styles.iconStyleWeather}
                      />
                      <Text style={styles.textItem}>21º</Text>
                    </View>

                    <View
                      style={{
                        alignItems: 'center',
                      }}
                    >
                      <Image
                        source={require('~/assests/images/view_64.png')}
                        style={styles.iconStyleWeather}
                      />
                      <Text style={styles.textItem}>26º</Text>
                    </View>
                  </View>

                  <View
                    style={{
                      justifyContent: 'space-between',
                      alignContent: 'center',
                      paddingStart: 40,
                      paddingEnd: 40,
                      paddingTop: 20,
                      paddingBottom: 20,
                      flexDirection: 'row',
                    }}
                  >
                    <View
                      style={{
                        alignItems: 'center',
                      }}
                    >
                      <Image
                        source={require('~/assests/images/thermometer_64.png')}
                        style={styles.iconStyleWeather}
                      />
                      <Text style={styles.textItem}>26º</Text>
                    </View>

                    <View
                      style={{
                        alignItems: 'center',
                      }}
                    >
                      <Image
                        source={require('~/assests/images/humidity_64.png')}
                        style={styles.iconStyleWeather}
                      />
                      <Text style={styles.textItem}>26º</Text>
                    </View>

                    <View
                      style={{
                        alignItems: 'center',
                      }}
                    >
                      <Image
                        source={require('~/assests/images/view_64.png')}
                        style={styles.iconStyleWeather}
                      />
                      <Text style={styles.textItem}>26º</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          ))}
        </Swiper>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  textHeader: {
    flex: 1,
    color: styleCommon.textColor,
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontSize: styleCommon.textSizeHeader,
    marginStart: 42,
  },
  headerStyle: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    marginTop: platform === 'ios' ? 30 : 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  containerStyle: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    position: 'absolute',
  },
  bodyStyles: {
    flex: 1,
    backgroundColor: 'transparent',
    width: '100%',
  },
  textTempurature: {
    color: styleCommon.textColor,
    fontSize: 130,
    fontStyle: 'normal',
    paddingStart: 30,
    fontWeight: '100',
    backgroundColor: 'transparent',
  },
  viewTempurature: {
    paddingTop: 50,
    paddingBottom: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  textWeather: {
    color: styleCommon.textColor,
    fontSize: 19,
  },

  iconStyleWeather: {
    height: 32,
    width: 32,
  },

  viewGroupDaysOfWeek: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingEnd: 10,
    paddingStart: 10,
    paddingBottom: 5,
    paddingTop: 5,
  },

  textItem: {
    color: styleCommon.textColor,
    fontSize: 20,
    fontStyle: 'normal',
    backgroundColor: 'transparent',
    padding: 3,
  },

  viewDivider: {
    backgroundColor: '#ffffff90',
    height: 1,
    width: '100%',
  },

  viewDaysOfWeek: {
    width: '33%',
  },

  viewWeather: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  viewTemperature: {
    width: '33%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
