import {Alert, SafeAreaView, View, Text} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
// components

import styles from './styles';
import CustomHeaderWithDetailsComponent from '../../../components/global/CustomHeaderWithDetailsComponent';
import CustomInputComponent from '../../../components/global/CustomInputComponent';
import CustomButtonComponent from '../../../components/global/CustomButtonComponent';
import GlobalStyle from '../../../constants/globalStyle';
import color from '../../../constants/color';
import Loader from '../../../components/global/Loader';
import SimpleToast from 'react-native-simple-toast';

const schema = Yup.object({
  email: Yup.string().required('*Required').email('*Invalid email'),
});

const ForgetPassword = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const [emailSent, setEmailSet] = useState(false);
  const [email, setEmail] = useState('');
  const sendPressed = values => {
    setLoader(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      {emailSent ? (
        <>
          <View style={styles.messageView}>
            <Text style={[GlobalStyle.TEXT_STYLE_BOLD, styles.title]}>
              Reset link sent
            </Text>
            <Text style={[GlobalStyle.TEXT_STYLE, styles.details]}>
              Reset link sent to
              <Text style={{color: color.PRIMARY}}>{` ${email}. `}</Text>
              Check your inbox, if you didn't find the email check your spam
              folder
            </Text>
          </View>
          <CustomButtonComponent
            title={'Done'}
            style={styles.button}
            textStyle={styles.textStyle}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </>
      ) : (
        <>
          <CustomHeaderWithDetailsComponent
            title={'Forget Password'}
            details={
              'Please enter your email so we can help you to recover your password'
            }
          />
          <Formik
            initialValues={{email: ''}}
            validationSchema={schema}
            onSubmit={sendPressed}>
            {({handleBlur, handleChange, handleSubmit, errors, touched}) => (
              <>
                <CustomInputComponent
                  autoFocus={true}
                  onChangeText={handleChange('email')}
                  error={touched.email && errors.email}
                  onBlur={handleBlur('email')}
                  keyboardType={'email-address'}
                  placeholder={'Email'}
                  style={styles.emailInput}
                />
                <CustomButtonComponent
                  title={'Send'}
                  style={styles.button}
                  textStyle={styles.textStyle}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
        </>
      )}
      {loader && <Loader />}
    </SafeAreaView>
  );
};

export default ForgetPassword;
