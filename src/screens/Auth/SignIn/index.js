import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import GlobalStyle from '../../../constants/globalStyle';
import Size from '../../../constants/size';
import color from '../../../constants/color';
import Icons from '../../../assets/icons';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
// Components
import CustomInputComponent from '../../../components/global/CustomInputComponent';
import CustomButtonComponent from '../../../components/global/CustomButtonComponent';
import Loader from '../../../components/global/Loader';
import MyStatusBar from '../../../components/global/StatusBar';

const formSchema = Yup.object({
  email: Yup.string().email('*Invalid email').required('*Required'),
  password: Yup.string().required('*Required').min(8, '*Min 8'),
});

const SignIn = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  // const signIn = values => {
  //   setLoader(true);
  //   ssss;
  //   auth()
  //     .signInWithEmailAndPassword(values.email, values.password)
  //     .then(res => {
  //       // console.log(res.user);
  //       // getting user data from firestore
  //       firestore()
  //         .collection('users')
  //         .doc(res.user.uid)
  //         .get()
  //         .then(response => {
  //           dispatch(userLogin({...response.data(), uid: res.user.uid}));
  //         })
  //         .catch(er => {
  //           setLoader(false);
  //           SimpleToast.show(er.code.substring(5), SimpleToast.SHORT);
  //         });
  //     })
  //     .catch(er => {
  //       setLoader(false);
  //       SimpleToast.show(er.code.substring(5), SimpleToast.SHORT);
  //     });
  // };

  return (
    <>
      <MyStatusBar backgroundColor={color.BACKGROUND} />
      <SafeAreaView container={styles.container}>
        <View style={styles.mainView}>
          <View>
            <Image style={styles.image} source={Icons.LOGO} />
            {/*Message*/}
            <View>
              <Text style={[GlobalStyle.TEXT_STYLE_BOLD, styles.text]}>
                Welcome back
              </Text>
              <Text style={[GlobalStyle.TEXT_STYLE, {color: color.GRAY}]}>
                Sign in to continue
              </Text>
            </View>
            <Formik
              initialValues={{password: '', email: ''}}
              validationSchema={formSchema}>
              {({
                errors,
                values,
                handleBlur,
                handleChange,
                handleSubmit,
                touched,
              }) => (
                <>
                  {/* Input Fields View*/}
                  <View style={styles.inputView}>
                    <View>
                      <CustomInputComponent
                        placeholder="Email"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        error={touched.email && errors.email}
                      />
                      <View style={{height: Size.PADDING}} />
                      <CustomInputComponent
                        placeholder="Password"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        error={touched.password && errors.password}
                        secureTextEntry={true}
                      />
                    </View>
                    {/*forget password and remember me*/}
                    <View style={styles.forgetPassView}>
                      <View style={{flex: 1}} />
                      <Text
                        style={[GlobalStyle.TEXT_STYLE, {color: color.RED}]}
                        onPress={() => navigation.navigate('ForgetPassword')}>
                        Forget Password?
                      </Text>
                    </View>
                    {/*Sign in button*/}
                    <CustomButtonComponent
                      title={'Sign in'}
                      style={styles.buttonSignIn}
                      textStyle={styles.textStyle}
                      onPress={handleSubmit}
                    />
                  </View>
                </>
              )}
            </Formik>
          </View>
          {/* No account*/}
          <Text
            style={[GlobalStyle.TEXT_STYLE, styles.bottomText]}
            onPress={() => navigation.navigate('SignUp')}>
            don't have an account?
            <Text style={{color: color.PRIMARY, marginBottom: Size.PADDING}}>
              Sign up
            </Text>
          </Text>
        </View>
      </SafeAreaView>
      {loader && <Loader />}
    </>
  );
};

export default SignIn;
