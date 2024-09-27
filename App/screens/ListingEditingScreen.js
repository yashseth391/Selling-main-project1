import { StyleSheet, Text, View, StatusBar, BackHandler } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';

import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import AppFormPicker from '../components/forms/AppFormPicker';



import SubmitButton from '../components/forms/SubmitButton';


import FormImagePicker from '../components/forms/FormImagePicker';
import Location from '../components/Location';


const ListingEditingScreen = () => {

    const [imageUris, setImageUris] = useState([]);

    const handleAddImage = (newImageUri) => {
        setImageUris([...imageUris, newImageUri]); // Correctly updating the state
    };
    const validationSchema = Yup.object().shape({
        title: Yup.string().required().min(1).label('Tittle'),
        price: Yup.number().required().min(1).max(10000).label('Price'),
        description: Yup.string().label('Description'),
        category: Yup.object().required().nullable().label('Category'),
        images: Yup.array().min(1, "Plese select atleast one Image")
    });
    const categories = [
        {
            label: "Furniture",
            value: 1,
            icon: "house",
            backgroundColor: "red",
        },
        { label: "Cars", value: 2, icon: "airport-shuttle", backgroundColor: "green" },
        { label: "Cameras", value: 3, icon: "camera", backgroundColor: "blue" },
        { label: "Games", value: 4, icon: "games", backgroundColor: "red" },
        {
            label: "Clothing",
            value: 5,
            icon: "dry-cleaning",
            backgroundColor: "green",
        },
        {
            label: "Sports",
            value: 6,
            icon: "downhill-skiing",
            backgroundColor: "blue",
        },
        {
            label: "Movies & Music",
            value: 7,
            icon: "headphones",
            backgroundColor: "red",
        },
        {
            label: "Books",
            value: 8,
            icon: "file-copy",
            backgroundColor: "green",
        },
        { label: "Others", value: 9, icon: "explore", backgroundColor: "blue" },
    ]


    return <View style={styles.container}>

        <AppForm
            initialValues={{
                title: '',
                price: 0,
                description: "",
                category: null,
                images: []
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
        >
            <FormImagePicker name="images" />
            <AppFormField maxLength={255} name="title" placeholder="Title" />
            <AppFormField keyboardType="numeric" maxLength={8}
                name={"price"} placeholder="Price"
                width={120}
            />
            <AppFormPicker
                items={categories}
                name="category"
                placeholder="Category"
                width="50%"

            />
            <AppFormField maxLength={225}
                numberOfLines={3}
                multiline
                name={"description"}
                placeholder="Description"
            />
            <SubmitButton title="Post" />
        </AppForm>
        <Location />
    </View>;
};

export default ListingEditingScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight
    }
});
