import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface AuthInputFieldProps {
    label: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    isPassword?: boolean;
}

const AuthInputField: React.FC<AuthInputFieldProps> = ({
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    isPassword = false,
}) => {
    const [isVisible, setIsVisible] = useState(!secureTextEntry);

    return (
        <View className="mt-4 w-full">
            <Text className="text-gray-500">{label}</Text>
            <View className="mt-2 w-full flex-row items-center rounded-lg bg-textfield px-4 py-2">
                <TextInput
                    placeholder={placeholder}
                    className="flex-1 bg-transparent"
                    secureTextEntry={isPassword ? !isVisible : false}
                    value={value}
                    onChangeText={onChangeText}
                />
                {isPassword && (
                    <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                        <FontAwesome
                            name={isVisible ? 'eye' : 'eye-slash'}
                            size={20}
                            color="gray"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default AuthInputField;
