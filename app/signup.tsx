import { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import SocialButton from '@/src/components/utils/auth/SocialButton';
import AuthButton from '@/src/components/utils/auth/AuthButton';
import AuthInputField from '@/src/components/utils/auth/AuthInputField'; // Importing the reusable input field

export default function SignUpScreen() {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = () => {
        if (email && password && fullName) {
            router.push('/verification?source=signup');
        } else {
            setError('Please fill out all fields');
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
                Create your account
            </Text>
            <Text className="mt-1 text-gray-500">Join our community today</Text>

            {/* Full Name Input */}
            <AuthInputField
                label="Full Name"
                placeholder="Enter your full name"
                value={fullName}
                onChangeText={setFullName}
            />

            {/* Email Input */}
            <AuthInputField
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
            />

            {/* Password Input */}
            <AuthInputField
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                isPassword={true}
                secureTextEntry={true}
            />

            {/* Sign Up Button */}
            <AuthButton title="Sign Up" onPress={handleSignUp} />

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
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={() => router.push('/login')}>
                        <Text className="text-blue-600"> Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
