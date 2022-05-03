
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

import { Dimensions } from "react-native-web";
import { NavigationContainer } from "@react-navigation/native";





const SignUpScreen =({navigation}) => {
    
    
    const [fullName, setFName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');

    const register = () => {
        console.log('Hi')
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
        }).catch (err => {
            console.log(err)
        })

    }

    

  return(
    
      <View style={styles.container}> 
        <View style={styles.header}>
            <Text style={styles.text_header}>Create An Account</Text>

        </View>  
            <View style={styles.footer}>
                
                    <View style={styles.action}>
                    <FontAwesome name="user"
                     size={24} 
                     color="black"
                      />
                      <TextInput
                          placeholder=" Name"
                          value={fullName}
                          onChangeText = {text => setFName(text)}
                          style={styles.textInput}
                          autoCapitalize='none'
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
                           value={email}
                          onChangeText = {text => setEmail(text)}
                       />
                      </View>  
                      <View style={styles.action}>
                      <FontAwesome name="lock"
                       size={24}
                        color="black"
                         />
                       <TextInput
                           placeholder='Password'
                           secureTextEntry
                           style={styles.textInput}
                           autoCapitalize="none"
                           value={password}
                           onChangeText = {text => setPassword(text)}
                       />
                       <Feather name="eye-off" size={24} color="black" />
                      </View>

                      <View style={styles.action}>
                            <FontAwesome name="unlock" 
                            size={24} 
                            color="black"
                       />
                       <TextInput
                           placeholder='ConfirmPassword'
                           secureTextEntry
                           style={styles.textInput}
                           autoCapitalize="none"
                           value={cPassword}
                           onChangeText = {text => setCPassword(text)}
                       />
                       <Feather name="eye-off" size={24} color="black" />
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
                      onPress={console.log('Google')}
                      
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
                     
                
            <TouchableOpacity
                    onPress={() => navigation.navigate('SignInScreen')}
                    style={[styles.signIn, {
                        backgroundColor: '#505168',
                        borderColor: '#505168',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>Create An Account</Text>
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
        
        
        

    },
    signIn:{
        width: '100%',
        height:50,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 40,
        
        
        
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