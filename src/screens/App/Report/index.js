import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomInputComponent from '../../../components/global/CustomInputComponent';
import CustomButtonComponent from '../../../components/global/CustomButtonComponent';
import {useState} from 'react';
import Loader from '../../../components/global/Loader';
import SimpleToast from 'react-native-simple-toast';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Report = () => {
  const [report, setReport] = useState('');
  const [loader, setLoader] = useState(false);
  const navigation = useNavigation();
  const user = useSelector(state => state.user.data);

  // api hit
  const reportPressed = () => {
    if (report.length > 6) {
      setLoader(true);
      firestore()
        .collection('reports')
        .doc(`report:${new Date().toISOString()}`)
        .set({
          by: {name: user.name, email: user.email, uid: user.uid},
          report: report,
        })
        .then(res => {
          SimpleToast.show('Reported', SimpleToast.SHORT);
          navigation.goBack();
        })
        .catch(er => {
          if (er?.code) {
            SimpleToast.show(er.code.substring(5), SimpleToast.SHORT);
          } else {
            SimpleToast.show('unable to report', SimpleToast.SHORT);
          }
        })
        .finally(() => {
          setLoader(false);
        });
    } else {
      SimpleToast.show('Should be min 6 characters', SimpleToast.SHORT);
    }
  };
  return (
    <View style={styles.container}>
      <CustomInputComponent
        onChangeText={setReport}
        value={report}
        style={styles.inputView}
        placeholder={'What is your problem?'}
        multiline={true}
      />
      <CustomButtonComponent
        title={'Submit'}
        style={styles.submitButton}
        onPress={reportPressed}
      />
      {loader && <Loader />}
    </View>
  );
};

export default Report;
