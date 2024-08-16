import { StyleSheet, Text, View, StatusBar, BackHandler } from 'react-native';
import React from 'react';
import * as Yup from 'yup';

import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import AppFormPicker from '../components/forms/AppFormPicker';



import SubmitButton from '../components/forms/SubmitButton';
const ListingEditingScreen = () => {
    const validationSchema = Yup.object().shape({
        title: Yup.string().required().min(1).label('Tittle'),
        price: Yup.number().required().min(1).max(10000).label('Price'),
        description: Yup.string().label('Description'),
        category: Yup.object().required().nullable().label('Category'),
    });
    const categories = [
        { label: 'Furniture', value: 1 },
        { label: 'Clothing', value: 2 },
        { label: 'Camera', value: 3 },
    ];

    return <View style={styles.container}>
        <AppForm
            initialValues={{
                title: '',
                price: 0,
                description: "",
                category: null,
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
        >
            <AppFormField maxLength={255} name="title" placeholder="Title" />
            <AppFormField keyboardType="numeric" maxLength={8}
                name={"price"} placeholder="Price"
            />
            <AppFormPicker
                items={categories}
                name="category"
                placeholder="Category"
            />
            <AppFormField maxLength={225}
                numberOfLines={3}
                multiline
                name={"description"}
                placeholder="Description"
            />
            <SubmitButton title="Post" />
        </AppForm>

    </View>;
};

export default ListingEditingScreen;

const styles = StyleSheet.create({
    container: {

    }
});
