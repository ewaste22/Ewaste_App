import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { COLORS, SIZES } from '../../../themes';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function PhotoProfile({
  name, image, setFieldValue, disabled = false, style, icon, colorIcon, styleImage,
}) {
  const [photo, setPhoto] = useState(image.uri != '' ? image : '');
  const [hasPhoto, setHasPhoto] = useState(image.uri != '');
  const getImage = () => {
    launchImageLibrary(
      {
        maxWidth: 500, maxHeight: 500,
      },
      (response) => {
        if (response.didCancel || response.error) {
          // eslint-disable-next-line no-console
          console.log('Cancel Image Pick');
        } else {
          const source = response?.assets[0];
          const Uri = { uri: source.uri };

          console.log(Uri);
          console.log(source);
          setPhoto(Uri);
          setHasPhoto(true);
          console.log(name, source,);
          setFieldValue(source.uri);
        }
      },
    );
  };
  return (
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => getImage()}
        disabled={disabled}
      >
        <View
          style={{
            width: 112,
            height: 112,
            backgroundColor: COLORS.primaryPurple1,
            borderRadius: SIZES.radius2,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            ...style,
          }}
        >
          {hasPhoto ? (
            <Image
              source={photo}
              style={{
                width: 112,
                height: 112,
                ...styleImage,
              }}
            />
          ) : (
            <Icon name={icon} color={colorIcon} size={32} />
          )}
        </View>
      </TouchableOpacity>

    </View>

  );
}

export default PhotoProfile;