import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface SocialButtonProps {
    title: string;
    iconName: string;
    color: string;
    onPress: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({
    title,
    iconName,
    color,
    onPress,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="flex flex-row items-center gap-2 rounded-full bg-gray-100 px-[16px] py-[8px]"
        >
            <FontAwesome name={iconName as any} size={24} color={color} />
            <Text>{title}</Text>
        </TouchableOpacity>
    );
};

export default SocialButton;
