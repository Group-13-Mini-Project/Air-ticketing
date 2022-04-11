
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,

} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from "react-native-web";
import { NavigationContainer } from "@react-navigation/native";
import { signInWithGoogle } from "../Firebase";



const SignUpScreen =() => {
    const [data,setData] =React.useState({
        Name: '',
        email: '',
        password: '',
        confirmPassword: '',
        check_textInputChange: false,
        secureTextEntry: true
    
    
    });
    const textInputChange =(val) =>{
        if (val.length != 0){
            setData({
                ...data,
                Name: val,
                check_textInputChange: true
            });
        }else{
            setData({
                ...data,
                Name: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange =(val) => {
        setData({
            ...data,
            password: val

        });
    }
    const handleConfirmPasswordChange =(val) => {
        setData({
            ...data,
            password: val

        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    

  return(
    
      <View style={styles.container}> 
        <View style={styles.header}>
            <Text style={styles.text_header}>Create An Acoount</Text>

        </View>  
            <View style={styles.footer}>
                
                    <View style={styles.action}>
                    <FontAwesome name="user"
                     size={24} 
                     color="black"
                      />
                      <TextInput
                          placeholder=" Name"
                          style={styles.textInput}
                          autoCapitalize='none'
                          onChangeText={(val)=>textInputChange(val)}
                      />
                      

                    </View>
                      <View style={styles.action}>
                      <AntDesign name="mail" 
                      size={24} 
                      color="black"
                       />
                       
                       <TextInput
                           placeholder=' Email'
                           style={styles.textInput}
                           autoCapitalize="none"
                           onChangeText={(val)=>textInputChange(val)}
                       />
                      </View>  
                      <View style={styles.action}>
                      <FontAwesome name="lock"
                       size={24}
                        color="black"
                         />
                       <TextInput
                           placeholder=' Password'
                           secureTextEntry={data.secureTextEntry?true:false}
                        
                           style={styles.textInput}
                           autoCapitalize="none"
                           onChangeText={(val)=>handlePasswordChange(val)}
                       />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                        
                       <Feather name="eye-off" 
                       size={24}
                        color="black"
                         />
                         </TouchableOpacity>
                      </View>

                      <View style={styles.action}>
                      <FontAwesome name="unlock" 
                      size={24} 
                      color="black"
                       />
                       <TextInput
                           placeholder='ConfirmPassword'
                           secureTextEntry={data.secureTextEntry?true:false}
                           style={styles.textInput}
                           autoCapitalize="none"
                           onChangeText={(val)=>handleConfirmPasswordChange(val)}
                       />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                        <Feather name="eye-off" 
                       size={24}
                        color="black"
                         />
                         </TouchableOpacity>
                      </View>
                      
                     <Text
                     style={{
                              fontSize:15,
                              fontWeight:'500',
                              color: 'black',
                              marginTop: 20,
                              marginLeft: 65
                          }}

                     >Already have an account? {" "}
                      <TouchableOpacity>
                        

                    
                          <Text style={{ color: "blue", fontWeight: "bold" }}>SignIn</Text>

                          
                      </TouchableOpacity>
                      </Text>

                      <Text
                      style={{
                              fontSize:15,
                              fontWeight:'500',
                              color: 'black',
                              marginTop: 10,
                              marginLeft: 150,
                              fontWeight: '600'

                          }}
                      > OR
                      </Text>

                     <Text>

                     </Text>
                      <TouchableOpacity
                      
                style={styles.GoogleInput}
                >
                <AntDesign name="google"
                 size={24}
                  color="red" 
            
                  />
                  
                  <Text style={{fontSize: 17, marginLeft:15,backgroundColor:'#FD7A71'}}>Continue with Google</Text>
                       
                </TouchableOpacity>   
                <Text>

                </Text> 
                <TouchableOpacity
                style={styles.facebookInput}
                >
                <FontAwesome name="facebook"
                 size={24} 
                 color="blue"
                 
                  />
                  <Text style={{fontSize: 17, marginLeft:15,backgroundColor:"#5C89E2",}}>Continue with facebook</Text>

                </TouchableOpacity> 
                <Text>

                </Text>
                <TouchableOpacity
                style={styles.AppleInput}
                >
                <AntDesign name="apple1"
                 size={24}
                  color="black"
                  
                   />
                   <Text style={{fontSize: 17, marginLeft:15,backgroundColor:'#6F9BC0'}}>Continue with apple</Text>

                </TouchableOpacity>

                
            </View> 
                     
                
                  <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
                      <LinearGradient
                        colors={['#9E9FB5','#505168']}
                        style={styles.signIn}
                      >
                        
                          <Text style={[styles.textSign,{
                              color: '#fff'
                          }]}>Sign In</Text>
                      </LinearGradient>
                      </TouchableOpacity>
                     
 
            </View>         
    
  );
};

export default SignUpScreen;


const styles= StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        paddingHorizontal:30
    },
    header:{
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 50,
    },
    footer:{
        flex:10,
        backgroundColor:'#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius:30,

        paddingVertical: 20,
    },

    text_header:{
        color: '#505168',
        fontWeight:'bold',
        fontSize: 30,
        
    },
    action:{
        flexDirection: 'row',
        marginTop:40,
        borderBottomWidth: 1,
        borderBottomColor:'#505168',
        

    },
    textSign:{
        fontSize:18,
        fontWeight: 'bold',
        alignItems: 'center',
        
        

    },
    signIn:{
        width: '80%',
        height:50,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 40,
        marginHorizontal: 20,
        
        
    },
    textInput:{
        flex:1,
        paddingLeft:10,
        color:'#505168',
        borderRadius: 25,
    

    },
    
    inputView: {
        backgroundColor: "purple",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
    
        alignItems: "center",
      },
      text_footer:{
          color: '#505168',
          fontSize: 18,
          
      },
      email_text:{
          color:'#505168',
          fontSize: 15,
          marginLeft: 50,
          alignItems:'stretch',
          height: 50
          
          
      },
      
       GoogleInput:{
            
            padding: 5,
            borderRadius: 10,
            paddingHorizontal: 60,
           flexDirection: 'row',
           alignItems: "center",
           flexWrap: 'wrap',
           justifyContent:'center',
           position: 'relative',
           marginLeft:15,
           backgroundColor:'#FD7A71'

      },
      AppleInput:{
        padding: 5,
        borderRadius: 10,
        paddingHorizontal: 60,
       flexDirection: 'row',
       alignItems: "center",
       flexWrap: 'wrap',
       justifyContent:'center',
       position: 'relative',
       marginLeft:15,
       backgroundColor:'#6F9BC0'
      },

      facebookInput:{
        padding: 5,
        borderRadius: 10,
        paddingHorizontal: 60,
       flexDirection: 'row',
       alignItems: "center",
       flexWrap: 'wrap',
       justifyContent:'center',
       position: 'relative',
       marginLeft:15,
       backgroundColor:'#5C89E2'
      },

      button:{
        alignItems: 'center',
        marginTop: 30,
        width: '100%',
      },
    
});