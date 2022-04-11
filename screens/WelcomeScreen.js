import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet,
     Text, 
     View,
      Dimensions, 
      Image,
       TouchableOpacity 
    } from 'react-native';
    import { MaterialIcons } from '@expo/vector-icons';
    import * as Animatable from 'react-native-animatable';
    import { LinearGradient } from 'expo-linear-gradient';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

    
    



    const WelcomeScreen =({navigation}) => {
        return(
            <View style={styles.container}>
            <View style={styles.header}>
            <svg>
                <Image
                    animation ='bounceIn'
                    duration ='1500'
                    source={require('../assets/EasyFLy Assets/newtransport.svg')}
                    style={styles.travel}
                    resizeMode='stretch'
                />
            </svg>

            </View>
            <Animatable.View style={styles.footer}
                animation='fadeInUpBig'
            >
            <Text style={styles.title}>Welcome to EasyFly!</Text>
            <Text style={styles.text}> Sign in with account</Text>
      
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignUpScreen')} >
               
                <LinearGradient
                    colors={['#505168','#505168']}
                    style={styles.signIn}
                >
                    <Text style= {styles.textSign}>Let Get Started</Text>
                  
                    <MaterialIcons name="navigate-next" 
                    size={24}
                     color="white" />
                
                </LinearGradient>
            </TouchableOpacity>
            </View>
            </Animatable.View>
            </View>
        );
    };

    export default WelcomeScreen;

    const {height} = Dimensions.get('screen');
    const height_new = height * 0.28;


    const styles= StyleSheet.create({
        container: {
            flex:1,
            backgroundColor: '#505168',
        },
        header:{
            flex:2,
            justifyContent: 'center',
            alignItems: 'center'
        },
        footer:{
            flex:1,
            backgroundColor: '#fff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingVertical:50,
            paddingHorizontal:30
        },
        travel:{
            width: height_new,
            height: height_new
        },
        
        title:{
            color: '#505168',
            fontSize: 30,
            fontWeight:'900'
        },
        
        text:{
            color:'grey',
            marginTop: 30,
            marginTop:10
        },
        button:{
            alignItems: 'flex-end',
            marginTop: '30',
            paddingVertical: 110,
        
        },
        signIn:{
            width: 150,
            height:50,
            justifyContent:'center',
            alignItems: 'center',
            borderRadius:25,
            flexDirection: 'row',
            
            
            
        },
        textSign:{
            color:'#fff',
            fontWeight: 'bold',
            
        },
    });