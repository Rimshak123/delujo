// SearchBar.js

import React from 'react';
import { View } from 'react-native';
import { SearchBar as RNESearchBar } from 'react-native-elements';

const SearchBar = ({ onChangeText, onClear, onSubmitEditing }) => {
  return (
    <View>
      <RNESearchBar
        placeholder="Search..."
        onChangeText={onChangeText}
        onClear={onClear}
        onSubmitEditing={onSubmitEditing}
        containerStyle={{ flex: 1, marginRight: 10 }}
      />
    </View>
  );
};

export default SearchBar;
