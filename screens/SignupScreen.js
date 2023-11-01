import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';

const SignoutScreen = ({navigation}) => {
  return (
    <View className="w-full h-full">
        <StatusBar styles='light'/>
      <Image 
        className=" w-full h-full absolute"
        source={require('../assets/images/background.png')}
      />

      {/* light */}
      <View className="flex-row justify-around absolute w-full">
        <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)}
            className=' w-[90] h-[200] '
            resizeMode='contain'
            source={require('../assets/images/light.png')}
        />
        <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify().damping(3)}
            className="w-[65] h-[140]"
            resizeMode='contain'
            source={require('../assets/images/light.png')}
        />

        {/* Title and forms */}
        <View className='h-screen w-full flex pt-[190] justify-around absolute left-0'>
            {/* Tittle */}
            <View className="flex items-center ">
                <Animated.Text entering={FadeInUp.duration(1000).springify()}
                    className="text-white font-bold tracking-wide text-5xl
                ">
                    SignUp
                </Animated.Text>
            </View>

            {/* Forms */}
            <Animated.View className="flex mx-4 space-y-2 items-center">
                <Animated.View entering={FadeInDown.duration(1000).springify()} className=" bg-black/5 rounded-2xl p-5 w-full">
                    <TextInput
                        placeholder='Username'
                        placeholderTextColor='grey'
                    />
                </Animated.View>
                <Animated.View entering={FadeInDown.duration(1000).springify()} className=" bg-black/5 rounded-2xl p-5 w-full">
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor='grey'
                    />
                </Animated.View>
                <Animated.View  View entering={FadeInDown.duration(1000).springify()} className=" bg-black/5 rounded-2xl p-4 w-full">
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor='grey'
                        secureTextEntry
                    />
                </Animated.View>
                <TouchableOpacity className=' w-full bg-sky-400 p-3 rounded-2xl mb-10'>
                    <Text className="text-xl font-bold text-white text-center">SignUp</Text>
                </TouchableOpacity>
                <Animated.View View entering={FadeInDown.delay(600).duration(1000).springify()}  className="flex-row justify-center space-x-1">
                    <Text>Already having accoun?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('signin')}>
                        <Text className=" text-sky-400">Signin</Text>
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>
        </View>
      </View>


    </View>
  )
}

export default SignoutScreen

const styles = StyleSheet.create({})