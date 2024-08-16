import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import AppFormField from '../components/forms/AppFormField'
import SubmitButton from '../components/forms/SubmitButton'
import AppForm from '../components/forms/AppForm'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})
const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/logo-red.png")}
                style={styles.logo}
            /><AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autocorrect={false}
                    autoCapitalize="none"
                    icon={"email"}
                    name={"email"}
                    placeholder={"Email"}
                    keyboardType={"email-address"}
                />
                <AppFormField
                    autoCapitalize="none"
                    autocorrect={false}
                    icon="lock"
                    name={"password"}
                    placeholder={"Password"}
                    secureTextEntry={true}
                />
                <SubmitButton title={"Login"} />
            </AppForm>
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
})