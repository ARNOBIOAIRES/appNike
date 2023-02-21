import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import CartListItem from '../components/CartListItem';
import { selectDeliveryPrice, selectSubtotal, selectTotal } from '../store/cartSlice';

const shoppingCartTotals = () => {
  const subTotal = useSelector(selectSubtotal)
  const deliveryFee = useSelector(selectDeliveryPrice)
  const total = useSelector(selectTotal)
  
  return (
     <View style={styles.totalContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subTotal} US$</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryFee} US$</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total} US$</Text>
      </View>
    </View>
  )
}

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.items)
  return (
    <> 
    <FlatList
      data={cartItems}
      renderItem={({ item }) => <CartListItem cartItem={item} />}
      ListFooterComponent={shoppingCartTotals}
    />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}> Checkout </Text>
      </Pressable>
    </>
  )

}



const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    color: 'gray',
    letterSpacing: 1.5
  },
  textBold: {
    fontSize: 18,
    fontWeight: '500'
  },
  button: {
    position: 'absolute',
    backgroundColor: 'blue',
    bottom: 30,
    width:'80%',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1
  }

})


export default ShoppingCart