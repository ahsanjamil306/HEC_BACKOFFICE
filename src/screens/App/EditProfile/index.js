import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import Size from '../../../constants/Size';
import EditProfileInputField from '../../../components/more/EditProfileInput';
import {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomButtonComponent from '../../../components/global/CustomButtonComponent';
import Icons from '../../../assets/Icons';
import Loader from '../../../components/global/Loader';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import SimpleToast from 'react-native-simple-toast';
import {updateUser} from '../../../store/reducer/user';
import storage from '@react-native-firebase/storage';
import ImageCropPicker from 'react-native-image-crop-picker';

const schema = Yup.object({
  name: Yup.string().required('*Required'),
  class: Yup.string().required('*Required'),
  cnic: Yup.string().required('*Required'),
  phone: Yup.number('*Invalid number').required('*Required'),
});

const EditProfile = () => {
  const user = useSelector(state => state.user.data);
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [image, setImage] = useState('');
  const [loader, setLoader] = useState(false);

  const updateUserData = values => {
    const payload = {...values};
    setLoader(true);

    // with image
    if (image) {
      console.log('update with image');
      // image upload
      try {
        // uploading image
        storage()
          .ref(user.uid)
          .putFile(image)
          .then(res => {
            // getting image url
            storage()
              .ref(user.uid)
              .getDownloadURL()
              .then(imageUrl => {
                payload.image = imageUrl;
                console.log(payload);
                // updating other data to firestore
                firestore()
                  .collection('users')
                  .doc(auth().currentUser.uid)
                  .update(payload)
                  .then(res => {
                    SimpleToast.show('Updated!', SimpleToast.SHORT);
                    dispatch(updateUser(payload));
                    setEditable(false);
                  })
                  .catch(er => {
                    SimpleToast.show(er?.code?.substring(5), SimpleToast.SHORT);
                  })
                  .finally(() => {
                    setLoader(false);
                  });
              });
          })
          .catch(er => {
            SimpleToast.show(er?.code.substring(5), SimpleToast.SHORT);
          });
      } catch (er) {
        console.log(er);
      }
    }
    // without image
    else {
      console.log('update without image');

      // updating other data to firestore
      firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .update(payload)
        .then(res => {
          SimpleToast.show('Updated!', SimpleToast.SHORT);
          dispatch(updateUser(payload));
          setEditable(false);
        })
        .catch(er => {
          SimpleToast.show(er?.code?.substring(5), SimpleToast.SHORT);
        })
        .finally(() => {
          setLoader(false);
        });
    }
  };

  const pickImage = () => {
    ImageCropPicker.openPicker({height: 200, width: 200, cropping: true})
      .then(res => {
        setImage(res.path);
      })
      .catch(er => {
        console.log(er);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {editable ? (
          <TouchableOpacity style={styles.imageView} onPress={pickImage}>
            <Image
              source={
                image
                  ? {uri: image}
                  : user?.image
                  ? {uri: user.image}
                  : Icons.PROFILE
              }
              style={styles.profileImage}
            />
            <Image source={Icons.CAMERA} style={styles.pickImage} />
          </TouchableOpacity>
        ) : (
          <View>
            <Image
              source={user?.image ? {uri: user.image} : Icons.PROFILE}
              style={styles.profileImage}
            />
          </View>
        )}
        <View style={{height: Size.ICON / 2}} />
        <Formik
          initialValues={user}
          validationSchema={schema}
          onSubmit={updateUserData}>
          {({
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
          }) => (
            <>
              <EditProfileInputField
                editable={editable}
                value={values.name}
                title="Full Name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                error={touched.name && errors.name}
              />
              <EditProfileInputField
                editable={editable}
                value={values.class}
                title="Class"
                onChangeText={handleChange('class')}
                onBlur={handleBlur('class')}
                error={touched.class && errors.class}
              />

              <EditProfileInputField
                editable={editable}
                value={values.cnic}
                title="CNIC"
                keyboardType={'phone-pad'}
                onChangeText={handleChange('cnic')}
                onBlur={handleBlur('cnic')}
                error={touched.cnic && errors.cnic}
              />

              <EditProfileInputField
                editable={editable}
                value={values.phone}
                title="Phone number"
                keyboardType={'phone-pad'}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                error={touched.phone && errors.phone}
              />
              <CustomButtonComponent
                onPress={
                  editable
                    ? handleSubmit
                    : () => {
                        setEditable(true);
                      }
                }
                style={styles.button}
                title={editable ? 'Save' : 'Edit'}
                textStyle={styles.buttonText}
              />
            </>
          )}
        </Formik>
      </ScrollView>
      {loader && <Loader />}
    </View>
  );
};

export default EditProfile;
