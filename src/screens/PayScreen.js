import React from 'react';
import {Button} from 'react-native';
import PropTypes from 'prop-types';

 const PayScreen = ({navigation}) => (
    <Button title="pay" onPress={()=>navigation.navigate('Beneficiary')} />
 )

 PayScreen.prototype = {
   navigation: PropTypes.shape({
     navigate: PropTypes.func.isRequired,
   }).isRequired
 }

 export default PayScreen;