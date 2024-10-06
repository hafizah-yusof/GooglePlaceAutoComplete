import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SearchBar, List, Icon } from '@ant-design/react-native';
import { useDispatch, useSelector } from 'react-redux';
import { searchPlaces, getCoordinates } from '../redux/searchActions'; // Your redux action
import MapView, { Marker } from 'react-native-maps'; // Import MapView and Marker

const AutoCompleteScreen = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const { places, loading, searchHistory, coordinates } = useSelector((state) => state.search);

  // Handle input changes
  const handleSearch = (value) => {
    setQuery(value);
    if (value) {
      dispatch(searchPlaces(value)); // Dispatch search action with query
    }
  };

  // Clear input search on cancel
  const clearSearch = () => {
    setQuery('')
  };

  // Handle place selection
  const handlePlaceSelect = (place) => {
    dispatch(getCoordinates(place.description))
  };

  return (
    <View style={styles.container}>
    
      <Text style={styles.historyTitle}>Search Places:</Text>

      {/* SearchBar with autocomplete */}
      <SearchBar
        value={query}
        placeholder="Search for a place..."
        onChange={handleSearch}
        onCancel={clearSearch}
        showCancelButton={false}
        cancelText='Cancel'
        style={styles.searchBar}
      />

      {/* Render search results */}
      <View style={styles.resultsContainer}>
        {loading ? (
          <Text style={styles.loadingText}>Loading...</Text>
        ) : (
          <FlatList
            data={places}
            keyExtractor={(item) => item.place_id}
            renderItem={({ item }) => (
              <List.Item style={styles.listItem} 
                onPress={() => handlePlaceSelect(item)} // Handle place selection
              >
                <View style={styles.listItemContent}>
                  <Icon name="environment" color="black" style={styles.icon} />
                  <Text style={styles.placeName}>{item.description}</Text>
                </View>
              </List.Item>
            )}
          />
        )}
      </View>

       {/* Display selected place on the map */}
       {coordinates && (
        <MapView
        style={styles.map}
        initialRegion={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
        <Marker coordinate={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }} />
        </MapView>
      )}

      {/* Display search history */}
      {searchHistory.length > 0 && (
        <View style={styles.historyContainer}>
          <Text style={styles.historyTitle}>Recent Searches:</Text>
          {searchHistory.map((item, index) => (
            <Text key={index} style={styles.historyItem}>
              {item.description}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    padding: 20
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor:  '#899499'
  },
  resultsContainer: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 5,
    marginTop: 15
  },
  listItem: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#f0f0f0',
  },
  listItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  placeName: {
    fontSize: 16,
    color: '#333',
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    color: '#999',
  },
  historyContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  historyItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  map: {
    height: 300, // Height of the map
    marginTop: 20,
    borderRadius: 8,
  },
});

export default AutoCompleteScreen;
