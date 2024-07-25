import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialIcons';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoienVoYWlyLTIzMjEzIiwiYSI6ImNsejFmajE3OTJjM28yanNsbXowdHVlaDYifQ.zNA5qL7YlROXB2Dmbv1AFA',
);

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <MapboxGL.MapView style={styles.map}>
        <MapboxGL.Camera zoomLevel={10} centerCoordinate={[74.3587, 31.5204]} />
        {/* Add map markers, polygons, etc. */}
      </MapboxGL.MapView>

      <View style={styles.topOverlay}>
        <TouchableOpacity style={styles.seasonButton}>
          <Text style={styles.seasonButtonText}>Season 2024 ▼</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fieldsButton}>
          <Text style={styles.fieldsButtonText}>+ Fields</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomSheet}>
        <View style={styles.bottomSheetContent}>
          <Text style={styles.bottomSheetTitle}>Fields</Text>
          <Text style={styles.bottomSheetSubtitle}>By vegetation index</Text>
          <View style={styles.sliderContainer}>
            <Text>Low vegetation</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#4CAF50"
              maximumTrackTintColor="#000000"
            />
            <Text>High</Text>
            <View style={styles.cloudIndicator}>
              <Icon name="cloud" size={24} color="#BDBDBD" />
            </View>
          </View>
          <View style={styles.indexButtons}>
            <TouchableOpacity
              style={[styles.indexButton, styles.activeIndexButton]}>
              <Text style={styles.activeIndexButtonText}>NDVI</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.indexButton}>
              <Text style={styles.indexButtonText}>Contrasted NDVI</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.indexButton}>
              <Text style={styles.indexButtonText}>Precipitation</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.indexButton}>
              <Text style={styles.indexButtonText}>Crop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.indexButton}>
              <Text style={styles.indexButtonText}>Yield</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.signInButton}>
          <Icon name="person-add" size={24} color="#4CAF50" />
          <Text style={styles.signInButtonText}>Sign in to save fields</Text>
          <Icon name="chevron-right" size={24} color="#4CAF50" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabBarItem}>
          <Icon name="grid-on" size={24} color="#4CAF50" />
          <Text style={styles.tabBarActiveText}>Fields</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBarItem}>
          <Icon name="note" size={24} color="#BDBDBD" />
          <Text style={styles.tabBarText}>Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabBarItem, styles.tabBarCenterItem]}>
          <View style={styles.tabBarCenterItemInner}>
            <Icon name="add" size={30} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBarItem}>
          <Icon name="insights" size={24} color="#BDBDBD" />
          <Text style={styles.tabBarText}>Insights</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBarItem}>
          <Icon name="person" size={24} color="#BDBDBD" />
          <Text style={styles.tabBarText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  map: {
    flex: 1,
  },
  topOverlay: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seasonButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  seasonButtonText: {
    fontWeight: 'bold',
  },
  fieldsButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  fieldsButtonText: {
    fontWeight: 'bold',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  bottomSheetContent: {
    marginBottom: 20,
  },
  bottomSheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bottomSheetSubtitle: {
    color: '#757575',
    marginBottom: 15,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  cloudIndicator: {
    marginLeft: 10,
  },
  indexButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  indexButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#F5F5F5',
  },
  activeIndexButton: {
    backgroundColor: '#4CAF50',
  },
  indexButtonText: {
    color: '#757575',
  },
  activeIndexButtonText: {
    color: 'white',
  },
  signInButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E8F5E9',
    padding: 15,
    borderRadius: 10,
  },
  signInButtonText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  tabBarItem: {
    alignItems: 'center',
  },
  tabBarCenterItem: {
    marginTop: -30,
  },
  tabBarCenterItemInner: {
    backgroundColor: '#4CAF50',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarText: {
    fontSize: 12,
    color: '#BDBDBD',
  },
  tabBarActiveText: {
    fontSize: 12,
    color: '#4CAF50',
  },
});

export default DashboardScreen;
