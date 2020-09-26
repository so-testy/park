import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

import Background from '../assets/welcome-screen-background.svg';
import Carousel from '../assets/horse-carousel.svg';
import Layout from '../components/Layout';

function WelcomeScreen() {
  return (
    <Layout>
      <Background style={styles.background} />
      <View style={styles.content}>
        <Carousel style={styles.carousel} />
      </View>
      <View style={{...styles.content, marginTop: 166}}>
        <Text style={styles.bottomTitle}>Парк развлечений</Text>
        <Text style={styles.description}>
          Удобная карта аттракционов, покупка билетов онлайн, подробная
          информация
        </Text>
        <Button
          title="Зарегистрироваться"
          buttonStyle={styles.regButton}
          titleStyle={{textTransform: 'uppercase'}}
          containerStyle={{width: '100%'}}
        />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 42,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: '#3F414E',
  },
  background: {
    position: 'absolute',
    top: -120,
    left: 0,
    right: 16,
    bottom: 0,
  },
  carousel: {
    marginTop: 42,
    width: 200,
    height: 200,
  },
  bottomTitle: {
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: '#3F414E',
  },
  description: {
    maxWidth: 320,
    fontWeight: '300',
    fontSize: 16,
    color: '#A1A4B2',
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 16,
  },
  regButton: {
    borderRadius: 32,
    backgroundColor: '#8E97FD',
    fontSize: 14,
    height: 64,
    marginTop: 36,
  },
});

export default WelcomeScreen;
