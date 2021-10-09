import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Gap } from '..';

const Harga = () => {
    return (
        <View>
           <Text style={styles.title}>Daftar Harga</Text>
        <Gap height={10} />
        <Text style={styles.title}>Makanan</Text>
        <View style={styles.menu1}>
          <Text style={styles.titleMenu}>Dimsum Ayam</Text>
          <Text style={styles.priceMenu}>15K</Text>
        </View>
        <View style={styles.menu}>
        <Text style={styles.titleMenu}>Dimsum Udang</Text>
          <Text style={styles.priceMenu}>15K</Text>
        </View>
        <View style={styles.menu}>
        <Text style={styles.titleMenu}>Dimsum Kulit Tahu Udang</Text>
          <Text style={styles.priceMenu}>15K</Text>
        </View>
        <View style={styles.menu}>
        <Text style={styles.titleMenu}>Dimsum Nori Udang</Text>
          <Text style={styles.priceMenu}>15K</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.titleMenu}>Bread Toast</Text>
          <Text style={styles.priceMenu}>19K</Text>
        </View>
        <Text style={styles.title}>Minuman</Text>
        <View style={styles.menu1}>
          <Text style={styles.titleMenu}>Red Velvet Boba</Text>
          <Text style={styles.priceMenu}>10K</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.titleMenu}>Brown Sugar Boba</Text>
          <Text style={styles.priceMenu}>10K</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.titleMenu}>Green Tea Boba</Text>
          <Text style={styles.priceMenu}>10K</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.titleMenu}>Thai Tea Boba</Text>
          <Text style={styles.priceMenu}>10K</Text>
        </View>

        </View>
    )
}

export default Harga;

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        paddingTop: 10,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        color: '#93573D',
      },
      menu1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 46,
        paddingTop: 10,
      },
      menu: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 46,
      
      },
      titleMenu: {
          fontFamily: 'Poppins-SemiBold',
          fontSize: 14
      },
      priceMenu: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14
    },
})
