import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface AuthButtonProps {
    title: string;
    onPress: () => void;
    isResendDisabled?: boolean;
}

const AuthButton: React.FC<AuthButtonProps> = ({
    title,
    onPress,
    isResendDisabled,
}) => {
    return (
        <TouchableOpacity
            disabled={isResendDisabled}
            onPress={onPress}
            className={`mt-6 w-[240px] rounded-full px-[20px] py-[16px] ${isResendDisabled ? 'bg-blue-300' : 'bg-button'}`}
        >
            <Text className="text-center text-lg font-semibold text-white">
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default AuthButton;
