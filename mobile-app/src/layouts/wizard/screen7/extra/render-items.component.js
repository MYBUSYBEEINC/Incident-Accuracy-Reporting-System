import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import moment from 'moment';

import { Input, Layout, List, ListItem } from '@ui-kitten/components';

import { AssetImageOutlinekIcon, AssetVideoOutlineIcon } from '../../../../components/icons';

const FilesListRenderItem = ({ item, index }) => {
  const iconChoice = item.type==='image' ? <AssetImageOutlinekIcon /> : <AssetVideoOutlineIcon />;

  return (
    <ListItem
      title={item.title}
      description={item.description}
      accessoryLeft={iconChoice}
    />
  );
};

export const FilesContent = ({ data }) => {
  return (
    <List
      style={stylesRenderItems.filesContentContainer}
      data={data}
      renderItem={FilesListRenderItem}
    />
  );
};

export const GPSContent = ({ gps }) => {
  return (
    <View style={stylesRenderItems.gpsContentContainer}>
      <MapView
        style={stylesRenderItems.map}
        initialRegion={{
          latitude: gps.latitude,
          longitude: gps.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.04,
        }}
      >
        <Marker coordinate={gps} />
      </MapView>
    </View>
  );
};

export const InfoContent = ({ incident }) => {
  const strDate = moment(new Date(incident.timestamp)).format('MM/DD/YYYY hh:mm a');

  return (
    <>
      <Layout style={stylesRenderItems.infoRowContainer} level='1'>
        <Input
          value={incident.id}
          label="Incident"
          style={stylesRenderItems.infoInput}
          disabled
        />
        <Input
          value={strDate}
          label="Created on"
          style={stylesRenderItems.input}
          disabled
        />
      </Layout>
      <Layout style={stylesRenderItems.infoRowContainer} level='1'>
        <Input
          value={incident.incidentType}
          label="Type"
          style={stylesRenderItems.infoInput}
          disabled
        />
        <Input
          value={incident.viewpoint}
          label="View point"
          style={stylesRenderItems.infoInput}
          disabled
        />
      </Layout>
      <Layout style={stylesRenderItems.infoRowContainer} level='1'>
        <Input
          value={incident.description}
          label="Description"
          multiline={true}
          textStyle={{ height: 'auto'}}
          style={stylesRenderItems.infoInput}
          disabled
        />
      </Layout>
    </>
  );
}

const stylesRenderItems = StyleSheet.create({
  icon: {
    width: 20,
    height: 20
  },
  filesContentContainer: {
    //minHeight: 92,
  },
  gpsContentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
    maxHeight: '100%',
    //maxHeight: Dimensions.get('window').height*0.30+24,
  },
  map: {
    flex: 25,
    width: '100%',
    minHeight: Dimensions.get('window').height*0.40
  },
  infoContentContainer: {
    minHeight: 92,
  },
  infoRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 1,
    margin: 5
  },
  infoInput: {
    flex: 1,
    margin: 2,
  }
});