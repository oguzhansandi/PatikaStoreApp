
import React from 'react';
import { FlatList, SafeAreaView, Text, StyleSheet, TextInput } from 'react-native';
import produtcs_data from './products.json';
import StoreCard from './components/StoreCard';

function App(){

  const renderProducts = ({item}) => <StoreCard  products={item}/>
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PATIKASTORE</Text>
      <TextInput 
        style={styles.searchInput}
        placeholder='Ara...'
      >

      </TextInput>
      <FlatList
        style={styles.list}
        data= {produtcs_data}
        renderItem={renderProducts}
        numColumns={2}
      >

      </FlatList>
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor: '#fff',
  },
  header : {
    color:'darkblue',
    fontSize: 23,
    fontWeight: '700',
    margin: 10,
    marginBottom: 0,
  },
  searchInput: {
    backgroundColor: 'lightgray',
    margin : 10,
    borderRadius: 10,
    padding: 15,
  },
})

export default App;