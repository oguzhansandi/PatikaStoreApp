import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './StoreCard.style'

const StoreCard = ({products}) => {
    console.log(products);
    return (
        <View style= {styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image} 
                    source={{uri : products.imgURL}}
                    resizeMode="contain"    
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{products.title}</Text>
                <Text style={styles.price}>{products.price}</Text>
                <Text style={styles.stock}>{products.inStock ? '' : 'Stokta yok'} </Text>
            </View>
        </View>
    )
}

export default StoreCard;