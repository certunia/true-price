import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Button from './ui/Button';

export default function App() {
  const [openState, setOpenState] = useState(false);
  const [state, setState] = useState(null);

  const [openCity, setOpenCity] = useState(false);
  const [city, setCity] = useState(null);

  const [price, setPrice] = useState(null);

  const stateList = [
    { label: 'California', value: 'CA' },
    { label: 'Texas', value: 'TX' },
    { label: 'New York', value: 'NY' },
  ];

  const cityList = {
    CA: [
      { label: 'Los Angeles', value: 'LA' },
      { label: 'San Francisco', value: 'SF' },
    ],
    TX: [
      { label: 'Houston', value: 'HOU' },
      { label: 'Austin', value: 'AUS' },
    ],
    NY: [
      { label: 'New York City', value: 'NYC' },
      { label: 'Buffalo', value: 'BUF' },
    ],
  };

  const handleStateChange = (value) => {
    setState(value);
    setCity('');
  };

  const handleCityChange = (value) => {
    setCity(value);
  };

  const handlePriceChange = (value) => {
    setPrice(value);
  };

  const handlePress = () => {
    console.log('Button pressed');
  };

  return (
      <View style={styles.container}>
        <Text style={styles.label}>Select a State:</Text>
        <DropDownPicker
            open={openState}
            items={stateList}
            value={state}
            setOpen={setOpenState}
            setValue={setState}
            onChangeItem={handleStateChange}
        />
        {state && (
            <>
              <Text style={styles.label}>Select a City:</Text>
              <DropDownPicker
                  open={openCity}
                  items={cityList[state]}
                  value={city}
                  setOpen={setOpenCity}
                  setValue={setCity}
                  onChangeItem={handleCityChange}
              />
            </>
        )}
        {city && (
            <>
              <Text style={styles.label}>Enter a Price:</Text>
              <TextInput
                  style={styles.input}
                  value={price}
                  onChangeText={handlePriceChange}
                  keyboardType='numeric'
              />
              <Button title="Calculate" onPress={handlePress} />
            </>
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
});
