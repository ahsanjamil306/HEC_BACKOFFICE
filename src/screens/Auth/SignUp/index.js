import {View, Text, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import GlobalStyle from '../../../constants/GlobalStyle';
import Size from '../../../constants/size';
import color from '../../../constants/color';
import CustomInputComponent from '../../../components/global/CustomInputComponent';
import CustomButtonComponent from '../../../components/global/CustomButtonComponent';
import CustomTickComponent from '../../../components/global/CustomTickComponent';
import auth from '@react-native-firebase/auth';
import SimpleToast from 'react-native-simple-toast';
import firestore from '@react-native-firebase/firestore';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Loader from '../../../components/global/Loader';
import {useDispatch} from 'react-redux';
import {userLogin} from '../../../store/reducer/user';

const formSchema = Yup.object({
  name: Yup.string().required('*Required'),
  class: Yup.string().required('*Required'),
  cnic: Yup.string().required('*Required'),
  email: Yup.string().required('*Required').email('*Invalid email'),
  phone: Yup.number('*Invalid number').required('*Required'),
  password: Yup.string().min(8, '*Min 8').required('*Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], '*Passwords must match')
    .required('*Required'),
});

// api hit
const SignUp = ({navigation}) => {
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const registerUser = values => {
    setLoader(true);
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(res => {
        console.log(res);
        firestore()
          .collection('users')
          .doc(res.user.uid)
          .set({
            name: values.name,
            class: values.class,
            cnic: values.cnic,
            email: values.email,
            phone: values.phone,
            image: '',
          })
          .then(response => {
            console.log('logging In');
            dispatch(
              userLogin({
                uid: res.user.uid,
                name: values.name,
                class: values.class,
                cnic: values.cnic,
                email: values.email,
                phone: values.phone,
                image: '',
              }),
            );
          })
          .catch(er => {
            console.log(
              'Error found in setting the user data to the firestore',
            );
            auth()
              .currentUser.delete()
              .catch(er => console.log('error in deleting :', er));
          });
      })
      .catch(er => {
        SimpleToast.show(er.code.substring(5), SimpleToast.SHORT);
      })
      .finally(() => {
        setLoader(false);
      });
  };
  return (
    <SafeAreaView container={styles.container}>
      <View style={styles.mainView}>
        {/*Message*/}
        <View>
          <Text style={[GlobalStyle.TEXT_STYLE_BOLD, styles.text]}>
            Warm welcome
          </Text>
          <Text style={[GlobalStyle.TEXT_STYLE, {color: color.GRAY}]}>
            Fill the form to join
          </Text>
        </View>
        {/* Input Fields View*/}

        <Formik
          initialValues={{
            name: '',
            class: '',
            cnic: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={formSchema}
          onSubmit={registerUser}>
          {({handleChange, handleBlur, touched, errors, handleSubmit}) => (
            <View style={styles.inputView}>
              <View>
                <CustomInputComponent
                  placeholder="Full Name"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  error={touched.name && errors.name}
                />
                <View style={{height: Size.PADDING}} />
                <CustomInputComponent
                  placeholder="Class"
                  onChangeText={handleChange('class')}
                  onBlur={handleBlur('class')}
                  error={touched.class && errors.class}
                />
                <View style={{height: Size.PADDING}} />
                <CustomInputComponent
                  placeholder="CNIC"
                  keyboardType={'phone-pad'}
                  onChangeText={handleChange('cnic')}
                  onBlur={handleBlur('cnic')}
                  error={touched.cnic && errors.cnic}
                />
                <View style={{height: Size.PADDING}} />
                <CustomInputComponent
                  placeholder="Email"
                  keyboardType={'email-address'}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={touched.email && errors.email}
                />
                <View style={{height: Size.PADDING}} />
                <CustomInputComponent
                  placeholder="Phone number"
                  keyboardType={'phone-pad'}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  error={touched.phone && errors.phone}
                />
                <View style={{height: Size.PADDING}} />
                <CustomInputComponent
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  error={touched.password && errors.password}
                />
                <View style={{height: Size.PADDING}} />
                <CustomInputComponent
                  placeholder="Confirm password"
                  secureTextEntry={true}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  error={touched.confirmPassword && errors.confirmPassword}
                />
              </View>
              <View style={{height: Size.PADDING * 2}} />
              <View style={styles.forgetPassView}>
                <CustomTickComponent
                  selected={termsAndConditions}
                  style={{marginRight: Size.PADDING / 2}}
                  setSelected={setTermsAndConditions}
                />
                <Text
                  style={[GlobalStyle.TEXT_STYLE_BOLD, {color: color.GRAY}]}
                  onPress={() => setTermsAndConditions(!termsAndConditions)}>
                  I agree the
                  <Text style={{color: color.BLACK}}> Terms of services</Text>
                </Text>
              </View>
              <View style={{height: Size.PADDING}} />
              {/*Sign in button*/}
              <CustomButtonComponent
                title={'Sign up'}
                style={styles.buttonSignIn}
                textStyle={styles.textStyle}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>

        <Text
          onPress={() => navigation.goBack()}
          style={[
            GlobalStyle.TEXT_STYLE,
            {
              alignSelf: 'center',
              height: Size.ICON,
              textAlignVertical: 'bottom',
              marginTop: Size.HEIGHT * 0.02,
            },
          ]}>
          Already have an account?
          <Text style={{color: color.PRIMARY, marginBottom: Size.PADDING}}>
            Sign in
          </Text>
        </Text>
      </View>
      {loader && <Loader />}
    </SafeAreaView>
  );
};

export default SignUp;
