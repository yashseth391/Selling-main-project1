import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppTextInput from '../components/AppTextInput'
import Button from '../components/Button'
import { Formik } from 'formik'
const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/logo-red.png")}
                style={styles.logo}
            /><Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => console.log(values)}

            >
                {({ handleChange, handleSubmit }) => (
                    <>
                        <AppTextInput style={styles.textinput}
                            autocorrect={false}
                            autoCapitalize="none"
                            icon={"email"}
                            onChangeText={handleChange("email")}
                            placeholder={"Email"}

                            keyboardType={"email-address"}
                            textContentType={"emailAddress"}

                        />
                        <AppTextInput
                            autoCapitalize="none"
                            autocorrect={false}
                            icon="lock"
                            onChangeText={handleChange("password")}
                            placeholder={"Password"}
                            secureTextEntry={true}

                        />
                        <Button title="Login" onPress={handleSubmit} />
                    </>
                )}

            </Formik>

        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,

    },
    textinput: {

    }

})