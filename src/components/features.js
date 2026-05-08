import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Features() {
  return (
    <View style={{height: hp('60')}} className="gap-y-4">
      <Text
        style={{fontSize: wp('6.5')}}
        className="font-semibold text-gray-700">
        Features
      </Text>

      <View className="bg-emerald-200 p-4 rounded-xl">
        <View
          style={{marginBottom: 10}}
          className="flex-row items-center gap-x-1">
          <Image
            source={require('../../assets/images/chatgpticon.png')}
            style={{width: hp('4'), height: hp('4')}}
            className="rounded-xl"
          />
          <Text
            style={{fontSize: wp('4.8')}}
            className="text-gray-700 font-semibold">
            Groq AI
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          Groq AI provides fast and accurate responses, assisting you with
          creative ideas on a wide range of topics.
        </Text>
      </View>

      <View className="bg-purple-200 p-4 rounded-xl">
        <View
          style={{marginBottom: 10}}
          className="flex-row items-center gap-x-1">
          <Image
            source={require('../../assets/images/dall-e-icon.webp')}
            style={{width: hp('4'), height: hp('4')}}
            className="rounded-xl"
          />
          <Text
            style={{fontSize: wp('4.8')}}
            className="text-gray-700 font-semibold">
            Image Generation
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          Generate imaginative and diverse images from textual descriptions
          using Pollinations AI for free.
        </Text>
      </View>

      <View className="bg-cyan-200 p-4 rounded-xl">
        <View
          style={{marginBottom: 10}}
          className="flex-row items-center gap-x-1">
          <Image
            source={require('../../assets/images/brain.png')}
            style={{width: hp('4'), height: hp('4')}}
            className="rounded-xl"
          />
          <Text
            style={{fontSize: wp('4.8')}}
            className="text-gray-700 font-semibold">
            Smart AI
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          A powerful voice assistant combining Groq AI and image generation,
          providing you the best of both worlds.
        </Text>
      </View>
    </View>
  );
}
