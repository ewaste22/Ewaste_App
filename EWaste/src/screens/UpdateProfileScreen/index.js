import {ScrollView, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useId, useState} from 'react';
import {CustomButton, Header, Input, PhotoProfile} from '../../components';
import {COLORS, SIZES} from '../../themes';
import stylesConstant from '../../themes/stylesConstant';
import {useSelector, useDispatch} from 'react-redux';
import {akunUser, changeAkun} from '../../redux/Actions';

const UpdateProfile = () => {
  const dispatch = useDispatch();

  const userId = useSelector(state => state.login.userData.id);
  const userToken = useSelector(state => state.login.userData.token);
  const userAkun = useSelector(state => state.akun.userAkun);

  const [email, setEmail] = useState(userAkun?.email_courier)
  const [name, setName] = useState(userAkun?.fullname_courier)
  const [maxLoad, setMaxLoad] = useState(userAkun?.maxLoad_courier)
  const [noHp, setNoHp] = useState(userAkun?.nomor_courier)
  const [noPolisi, setNoPolisi] = useState(userAkun?.nopol_courier)
  const [transType, setTransType] = useState(userAkun?.transportationType_courier)
  const [photo, setPhoto] = useState(userAkun?.image_courier)


  useEffect(() => {
    console.log(userId, userToken);
    dispatch(akunUser(userToken));
  }, []);

  const onUpdate = async () => {
    const formdata = new FormData();
    // formdata.append('full_name', values.full_name);
    formdata.append('email_courier', email);
    formdata.append('fullname_courier', name);
    formdata.append('transportationType_courier', transType);
    formdata.append('maxLoad_courier', maxLoad);
    formdata.append('nopol_courier', noPolisi);
    formdata.append('nomor_courier', noHp);

    if (photo !== akunUser.image_courier) {
      formdata.append('image_courier', {
        uri: photo,
        type: 'image/jpeg',
        name: photo,
      });
    }

    console.log("Form Data ",formdata);
    // console.log("Image Data ", formdata[0][6]);
    console.log("Image Data ", formdata._parts);
    console.log("User Id ", useId);
    dispatch(changeAkun(1, formdata))
  };


  return (
    <ScrollView contentContainerStyle={[stylesConstant.container]} >
    <Header title="Ubah Profile" showIcon={true}/>
      <ScrollView style={{paddingHorizontal: SIZES.padding3}}>
        <PhotoProfile 
          name="image_courier"
          image={{ uri: photo ? photo : '' }}
          setFieldValue={setPhoto}
          icon="camera"
          colorIcon={COLORS.primary}
          styleImage={!photo && { marginTop: 20 }}
        />
        {/* <TouchableOpacity style={{ width: 130, height: 130, borderRadius: 20,overflow: 'hidden', alignSelf: 'center', marginVertical: SIZES.radius2 }}>
            <Image source={{uri: photo}} style={{width: 130, height: 130,}}/>
        </TouchableOpacity> */}
        <Input
          titleInput="Email"
          name="email"
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="email"
          secureTextEntry={false}
          inputStyle={{marginVertical: SIZES.radius1}}
        />
        <Input
          titleInput="Nama Lengkap"
          name="name"
          placeholder="Nama Lengkap"
          onChangeText={text => setName(text)}
          value={name}
          keyboardType="email"
          secureTextEntry={false}
          inputStyle={{marginBottom: SIZES.radius1}}
        />
        <Input
          titleInput="Jenis Kendaraan"
          name="email"
          placeholder="Jenis Kendaraan"
          onChangeText={text => setTransType(text)}
          value={transType}
          keyboardType="email"
          secureTextEntry={false}
          inputStyle={{marginBottom: SIZES.radius1}}
        />
        <Input
          titleInput="Maximal Angkut"
          name="email"
          placeholder="Maximal Angkut"
          onChangeText={text => setMaxLoad(text)}
          value={maxLoad}
          keyboardType="email"
          secureTextEntry={false}
          inputStyle={{marginBottom: SIZES.radius1}}
        />
        <Input
          titleInput="No. Polisi"
          name="email"
          placeholder="No. Polisi"
          onChangeText={text => setNoPolisi(text)}
          value={noPolisi}
          keyboardType="email"
          secureTextEntry={false}
          inputStyle={{marginBottom: SIZES.radius1}}
        />
        <Input
          titleInput="No. Handphone"
          name="email"
          placeholder="No. Handphone"
          onChangeText={text => setNoHp(text)}
          value={noHp}
          keyboardType="email"
          secureTextEntry={false}
          inputStyle={{marginBottom: SIZES.h1}}
        />
        <CustomButton title="UBAH PROFILE" onPress={() => onUpdate()} enabled={false} buttonStyle={{ marginBottom: SIZES.h1 }}/>
      </ScrollView>
    </ScrollView>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({});
