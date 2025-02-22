import React, { useState } from 'react';

import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

import { useRouter } from 'expo-router';

import { FontAwesome } from '@expo/vector-icons';
import Svg from 'react-native-svg';
import { Facebook } from '@/src/components/Icons';
import AuthInputField from '@/src/components/utils/auth/AuthInputField';
import SocialButton from '@/src/components/utils/auth/SocialButton';
import AuthButton from '@/src/components/utils/auth/AuthButton';

export default function LoginScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (email === 'a@gmail.com' && password === '1234') {
            router.push('/'); // Redirect to Home page
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <View className="flex-1 items-center justify-center bg-white px-6">
            {/* Logo */}
            <Image
                source={require('../assets/images/icon.png')}
                className="mb-4 h-24 w-24"
            />

            {/* Welcome Message */}
            <Text className="text-2xl font-bold text-gray-800">
                Welcome Back
            </Text>
            <Text className="mt-1 text-gray-500">Sign in to continue</Text>

            <AuthInputField
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
            />

            <AuthInputField
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                isPassword={true}
                secureTextEntry={true}
            />

            <AuthButton title="Sign In" onPress={handleLogin} />

            {/* Divider */}
            <View className="my-4 w-full flex-row items-center">
                <View className="h-[1px] flex-1 bg-gray-300"></View>
                <Text className="px-2 text-gray-500">Or continue with</Text>
                <View className="h-[1px] flex-1 bg-gray-300"></View>
            </View>

            {/* Social Media Buttons */}
            <View className="flex-row gap-4 space-x-4">
                <SocialButton
                    title="Apple"
                    iconName="apple"
                    color="black"
                    onPress={() => console.log('Apple Login')}
                />
                <SocialButton
                    title="Google"
                    iconName="google"
                    color="red"
                    onPress={() => console.log('Google Login')}
                />
                <SocialButton
                    title="Facebook"
                    iconName="facebook"
                    color="blue"
                    onPress={() => console.log('Facebook Login')}
                />
            </View>

            <View className="mt-6 w-full flex-col items-center">
                <View className="flex-row">
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => router.push('/signup')}>
                        <Text className="text-blue-600"> Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => router.push('/forgotPassword')}
                    className="mt-2"
                >
                    <Text className="text-blue-600">Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
