
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
import LinearGradient from "react-native-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";




const SignUpScreen =() => {
    const [data,setData] =React.useState({
        Name: '',
        email: '',
        password: '',
        
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
                      
                style={styles.AppleInput}
                >
                <AntDesign name="google"
                 size={24}
                  color="red" 
            
                  />
                  <Text style={{fontSize: 17, marginLeft:15}}>Continue with Google</Text>
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
                  <Text style={{fontSize: 17, marginLeft:15}}>Continue with facebook</Text>

                </TouchableOpacity> 
                <Text>

                </Text>
                <TouchableOpacity
                style={styles.appleInput}
                >
                <AntDesign name="apple1"
                 size={24}
                  color="black"
                   />
                   <Text style={{fontSize: 17, marginLeft:15}}>Continue with apple</Text>

                </TouchableOpacity>

                
            </View> 
                   
            </View>         
    
  );
};

export default SignUpScreen;


const styles= StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
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
        paddingHorizontal:20,
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
        width: '100',
        height:50,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textInput:{
        flex:1,
        paddingLeft:10,
        
        color:'#505168',
        borderRadius: 25,
    

    },
    appleInput: {
        backgroundColor:'#6F9BC0',
        padding: 5,
        borderRadius: 10,
        paddingHorizontal: 5,
      flexDirection: 'row',
      alignItems: "center",
    flexWrap: 'wrap',
      justifyContent:'center',
      position: 'relative',
        
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
      AppleInput: {
        backgroundColor: "#FD7A71",
          padding: 5,
          borderRadius: 10,
          paddingHorizontal: 5,
          flexDirection: 'row',
          alignItems: "center",
          marginTop: -3,
        flexWrap: 'wrap',
          justifyContent:'center',
          position: 'relative',
        
          
      },
      facebookInput:{
            backgroundColor:"#5C89E2",
            padding: 5,
            borderRadius: 10,
            paddingHorizontal: 60,
          flexDirection: 'row',
          alignItems: "center",
        flexWrap: 'wrap',
          justifyContent:'center',
          position: 'relative',

      },
      button:{
        alignItems: 'center',
        marginTop: 30
      },
    
});