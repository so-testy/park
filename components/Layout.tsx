import React from 'react';
import {ScrollView} from 'react-native';

const Layout: React.FC = ({children}) => {
  return (
    <ScrollView contentContainerStyle={{paddingLeft: 20, paddingRight: 20}}>
      {children}
    </ScrollView>
  );
};

export default Layout;
