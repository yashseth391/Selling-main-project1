import { Appearance, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppTextInput from '../components/AppTextInput'
import Button from '../components/Button'
import { Formik } from 'formik'
import * as Yup from 'yup'
import AppText from '../components/AppText'
import ErrorMessage from '../components/ErrorMessage'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Emailisamf"),
    password: Yup.string().required().min(4).label("Password")
})
const LoginScreen = () => {

    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/logo-red.png")}
                style={styles.logo}
            /><Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors }) => (
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
                        <ErrorMessage error={errors.email} />
                        <AppTextInput
                            autoCapitalize="none"
                            autocorrect={false}
                            icon="lock"
                            onChangeText={handleChange("password")}
                            placeholder={"Password"}
                            secureTextEntry={true}
                        />
                        <ErrorMessage error={errors.password} />
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