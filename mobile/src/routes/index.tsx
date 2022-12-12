import {  NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { SignIn } from '../screens/SignIn';
import { useAuth } from '../hooks/useAuth'
import { Box } from 'native-base';
//import { useEffect } from 'react';

export function Routes(){
    const { user } = useAuth();

    /*useEffect(() => {
        console.log(user)
    },[user]);*/
    return (
        <Box flex={1} bg="gray.900">
            <NavigationContainer>
                { user.name ? <AppRoutes /> : <SignIn /> }
            </NavigationContainer>
        </Box>
    )
};