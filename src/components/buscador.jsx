import React, {useState} from 'react';
import { Text, Pressable,View,ScrollView, TextInput, TouchableOpacity, StyleSheet, SafeAreaView,StatusBar,FlatList , Modal, Button, Image} from 'react-native';
import {AntDesign, Feather} from '@expo/vector-icons';
import Icon from './icon';


const products = [
    { id: '1', name: 'Smart band', price: '$45.00', categoria: 'Tecnología', image: require('@/../../assets/smartband.webp') },
    { id: '16', name: 'Ropero 8 puertas', price: '$449.00', categoria: 'Muebles', image: require('@/../../assets/ropero.webp') },
    { id: '2', name: 'Audífono TWS ', price: '$8.00', categoria: 'Tecnología', image: require('@/../../assets/audifonostwc.jpeg') },
    { id: '35', name: 'Calzado Sandalia', price: '$39.90', categoria: 'Calzado', image: require('@/../../assets/calzado.webp') },
    { id: '3', name: 'Celular Iphone', price: '$165.00', categoria: 'Tecnología', image: require('@/../../assets/celular.jpg' )},
    { id: '54', name: 'Clean Invisible', price: '$7.30', categoria: 'Belleza', image: require('@/../../assets/corrector.webp') },
    { id: '45', name: 'Zapato Hoka ', price: '$179.90', categoria: 'Calzado', image: require('@/../../assets/hoka.webp') },
    { id: '17', name: 'Cama Firme ', price: '$410.00', categoria: 'Muebles', image: require('@/../../assets/cama.webp') },
    { id: '41', name: 'Zapato formal', price: '$59.90', categoria: 'Calzado', image: require('@/../../assets/zapato2.webp') },
    { id: '4', name: 'Barra de sonido', price: '$219.00', categoria: 'Tecnología', image: require('@/../../assets/barrasonido.jpeg') },
    { id: '51', name: 'Rubor Polvo', price: '$37.99', categoria: 'Belleza', image: require('@/../../assets/rubor.webp') },
    { id: '5', name: 'Reloj smartwatch ', price: '$49.00', categoria: 'Tecnología', image: require('@/../../assets/reloj.webp') },
    { id: '39', name: 'Calzado Sandalia  ', price: '$39.99', categoria: 'Calzado', image: require('@/../../assets/sandaliarojo.webp') },
    { id: '25', name: 'Ropero 3 puertas', price: '$299.00', categoria: 'Muebles', image: require('@/../../assets/3.webp') },
    { id: '52', name: 'Oil-Absorbing', price: '$15.99', categoria: 'Belleza', image: require('@/../../assets/piedra.webp') },
    { id: '6', name: 'Celular Samsung', price: '$199.00', categoria: 'Tecnología', image: require('@/../../assets/Celular-Samsung.webp') },
    { id: '7', name: 'Celular motorola', price: '$105.00', categoria: 'Tecnología', image: require('@/../../assets/motorola.webp') },
    { id: '44', name: 'Zapato Nike ', price: '$79.90', categoria: 'Calzado', image: require('@/../../assets/nike.webp') },
    { id: '59', name: 'Clinique Líquido', price: '$34.99', categoria: 'Belleza', image: require('@/../../assets/desmaquillante.webp') },
    { id: '29', name: 'Comedor ', price: '$599.90', categoria: 'Muebles', image: require('@/../../assets/comedor.webp') },
    { id: '56', name: 'Desmaquillador ', price: '$5.99', categoria: 'Belleza', image: require('@/../../assets/Desmaquillador.webp') },
    { id: '8', name: 'Celular Huawei', price: '$115.00', categoria: 'Tecnología', image: require('@/../../assets/huawei.webp') },
    { id: '9', name: 'Pantalla Samsung', price: '$876.00', categoria: 'Tecnología', image: require('@/../../assets/pantallasamsung.webp') },
    { id: '28', name: 'Silla de Oficina', price: '$125.00', categoria: 'Muebles', image: require('@/../../assets/silla.jpeg') },
    { id: '10', name: 'Pantalla Xiaomi', price: '$876.00', categoria: 'Tecnología', image: require('@/../../assets/pantallaxiaomi.webp') },
    { id: '11', name: 'Audífonos', price: '$19.90', categoria: 'Tecnología', image: require('@/../../assets/audifonos.webp') },
    { id: '58', name: 'Clinique Mascara', price: '31.99', categoria: 'Belleza', image: require('@/../../assets/mascara.webp') },
    { id: '43', name: 'Zapato Adidas ', price: '$79.90', categoria: 'Calzado', image: require('@/../../assets/adidas2.webp') },
    { id: '12', name: 'Kit de internet', price: '$280.00', categoria: 'Tecnología', image: require('@/../../assets/internet.webp') },
    { id: '36', name: 'Sandalia casual', price: '$39.99', categoria: 'Calzado', image: require('@/../../assets/sandaliacasual.webp') },
    { id: '34', name: 'Calzado Mocasin', price: '$45.99', categoria: 'Calzado', image: require('@/../../assets/mocasin2.webp') },
    { id: '27', name: 'Soporte movible', price: '$29.40', categoria: 'Muebles', image: require('@/../../assets/soporte.webp') },
    { id: '13', name: 'Impresora l3250 ', price: '$224.00', categoria: 'Tecnología', image: require('@/../../assets/impresora.webp') },
    { id: '14', name: 'Adaptador RJ45', price: '$45.00', categoria: 'Tecnología', image: require('@/../../assets/adaptador.webp') },
    { id: '53', name: 'Máscara de pestaña', price: '$12.99', categoria: 'Belleza', image: require('@/../../assets/pestalol.webp') },
    { id: '30', name: 'Loveseat ', price: '$559.00', categoria: 'Muebles', image: require('@/../../assets/Loveseat.webp') },
    { id: '15', name: 'Control switch ', price: '$99.90', categoria: 'Tecnología', image: require('@/../../assets/control.webp') },
    { id: '37', name: 'Sandalia casual', price: '$39.99', categoria: 'Calzado', image: require('@/../../assets/sandaliablanca.webp') },
    { id: '18', name: 'Rack Dragon', price: '$99.90', categoria: 'Muebles', image: require('@/../../assets/dragon.png') },
    { id: '19', name: 'Protector', price: '$17.90', categoria: 'Muebles', image: require('@/../../assets/protector.webp') },
    { id: '60', name: 'Tattoo Studio Brow', price: '$10.73', categoria: 'Belleza', image: require('@/../../assets/Tattoo.webp') },
    { id: '40', name: 'Zapato de vestir  ', price: '$59.90', categoria: 'Calzado', image: require('@/../../assets/zapato.webp') },
    { id: '20', name: 'Sofá cama', price: '$869.00', categoria: 'Muebles', image: require('@/../../assets/sofa.webp') },
    { id: '55', name: 'Blush ', price: '$12.99', categoria: 'Belleza', image: require('@/../../assets/Blush.webp') },
    { id: '42', name: 'Zapato Adidas ', price: '$79.90', categoria: 'Calzado', image: require('@/../../assets/adidas.webp') },
    { id: '21', name: 'Gavetero', price: '$189.00', categoria: 'Muebles', image: require('@/../../assets/gavetero.jpeg') },
    { id: '22', name: 'Kit de mesas ', price: '$172.35', categoria: 'Muebles', image: require('@/../../assets/kit.webp') },
    { id: '38', name: 'Calzado Mocasin ', price: '$45.90', categoria: 'Calzado', image: require('@/../../assets/mocasinrojo.webp') },
    { id: '23', name: 'Modulo bajo ', price: '$120.00', categoria: 'Muebles', image: require('@/../../assets/modulo.webp') },
    { id: '57', name: 'MAC LÁPIZ', price: '$26.99', categoria: 'Belleza', image: require('@/../../assets/mac.webp') },
    { id: '24', name: 'Cama individual', price: '$209.10', categoria: 'Muebles', image: require('@/../../assets/individual.webp') },
    { id: '26', name: 'Sofá cama', price: '$599.90', categoria: 'Muebles', image: require('@/../../assets/sofacama.webp') },
    { id: '31', name: 'Sandalia', price: '39.90', categoria: 'Calzado', image: require('@/../../assets/sandalia.webp') },
    { id: '32', name: 'Calzado Mocasin', price: '$45.00', categoria: 'Calzado', image: require('@/../../assets/mocasin.webp') },
    { id: '33', name: 'Calzado Sandalia', price: '$39.99', categoria: 'Calzado', image: require('@/../../assets/sandalia2.webp') },
    { id: '46', name: 'Polvo', price: '$11.99', categoria: 'Belleza', image: require('@/../../assets/polvo.webp') },
    { id: '47', name: 'Foundation ', price: '$20.99', categoria: 'Belleza', image: require('@/../../assets/base.webp') },
    { id: '48', name: 'Eye Booster', price: '$10.50', categoria: 'Belleza', image: require('@/../../assets/delineador.webp') },
    { id: '49', name: 'Gel Limpiador', price: '$17.25', categoria: 'Belleza', image: require('@/../../assets/gel.webp') },
    { id: '50', name: 'Super Smooth', price: '$6.99', categoria: 'Belleza', image: require('@/../../assets/lapiz.webp') },
  ];

const  Buscador = () => {
    const [searchKey, setSearchKey] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [currentScreen, setCurrentScreen] = useState('Inicio');
    const [selectedCategory, setSelectedCategory] = useState('Todo'); // Categoría por defecto será "Todo"
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null); // Producto seleccionado para mostrar en el modal
    const [quantity, setQuantity] = useState(1); // Cantidad del producto, empieza desde 1
    const [cart, setCart] = useState([]); // Carrito de compras
    const [totalPrice, setTotalPrice] = useState(0); // Precio total que se actualiza dinámicamente
  
  // Función para filtrar productos basados en la búsqueda
  const handleSearch = (text) => {
    setSearchKey(text);
  };

    // Filtrar productos por búsqueda y categoría
    const filteredProducts = products.filter((product) => {
        const searchMatch = product.name.toLowerCase().includes(searchKey.toLowerCase());
        const categoryMatch = selectedCategory === 'Todo' || product.categoria === selectedCategory;
        return searchMatch && categoryMatch;
      });

    const renderProduct = ({ item }) => (
      <TouchableOpacity onPress={() => {
        setSelectedProduct(item); // Guardar el producto seleccionado
        setModalVisible(true); // Mostrar el modal
        setQuantity(1); // Restablecer la cantidad a 1 cuando se abre el modal
        setTotalPrice(parseFloat(item.price.replace('$', ''))); // Establecer el precio total inicial
      }}>
        <View style={styles.productContainer}>
          <Image source={item.image} style={styles.productImage} />
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );

    const handleAddToCart = () => {
        if (selectedProduct) {
          const item = {
            ...selectedProduct,
            quantity: quantity,
          };
          setCart([...cart, item]);
          setModalVisible(false); // Cerrar el modal
        }
      };

      const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
        updateTotalPrice(quantity + 1); // Actualizar el precio total
      };
    
      const decreaseQuantity = () => {
        if (quantity > 1) {
          setQuantity(prevQuantity => prevQuantity - 1);
          updateTotalPrice(quantity - 1); // Actualizar el precio total
        }
      };
    
      const updateTotalPrice = (newQuantity) => {
        const productPrice = parseFloat(selectedProduct.price.replace('$', '')); // Extraer el precio numérico del producto
        const newTotalPrice = productPrice * newQuantity;
        setTotalPrice(newTotalPrice);
      };

      
  const renderScreen = () => {
    
        return (
          <View style={styles.container}>
            <View style={styles.header}>
              <Icon name="shoppingcart" size={28} color="black" />
            </View>

            <FlatList
              data={filteredProducts} // Filtrar productos
              renderItem={renderProduct}
              keyExtractor={(item) => item.id}
              numColumns={3} // Mostrar 3 productos por fila
              columnWrapperStyle={styles.columnWrapper} // Asegurarse de que las columnas estén bien distribuidas
              contentContainerStyle={styles.productList}
            />

            {/* Modal para mostrar detalles del producto */}
            <Modal
              visible={modalVisible}
              transparent={true}
              animationType="slide"
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  {selectedProduct && (
                    <>
                      <Image source={selectedProduct.image} style={styles.modalImage} />
                      <Text style={styles.modalProductName}>{selectedProduct.name}</Text>
                      <Text style={styles.modalProductPrice}>{selectedProduct.price}</Text>

                      {/* Contador de cantidad */}
                      <View style={styles.quantityContainer}>
                        <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                          <Text style={styles.quantityButtonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                          <Text style={styles.quantityButtonText}>+</Text>
                        </TouchableOpacity>
                      </View>

                      {/* Mostrar total a pagar */}
                      <Text style={styles.totalText}>Total: ${totalPrice.toFixed(2)}</Text>

                      {/* Botón Agregar al carrito */}
                      <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
                        <Text style={styles.addButtonText}>Agregar al carrito</Text>
                      </TouchableOpacity>

                      <Button title="Cerrar" onPress={() => setModalVisible(false)} />
                    </>
                  )}
                </View>
              </View>
            </Modal>

          </View>
        );
    
    };
  

    return (
          <View style={styles.container}>
              <View style={styles.searchContainer}>
                  <View style={styles.searchWrapper}>
                      <TextInput
                          style={styles.searchInput}
                          value={searchKey}
                          onChangeText={setSearchKey}
                          placeholder='¿Qué quieres buscar?'/>
                  </View>
                  <View style={styles.searchIconContainer} >
                      <Feather name='search' size={24} style={styles.searchIcon}/>
                  </View>
              </View>

              {/*productos*/}
              <SafeAreaView style={styles.safeArea}>
                  <StatusBar barStyle="dark-content" />
                  <View style={{ flex: 1 }}>{renderScreen()}</View>
              </SafeAreaView>
          </View>

    );
};

styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchContainer:{
        marginHorizontal: 12,
        flexDirection:"row",
        justifyContent:'center',
        alignContent:"center",
        backgroundColor:"#A9D6E5",
        borderRadius: 14,
        marginVertical:"",
        height: 50,
        marginTop: 15
    },
    searchIconContainer: {
        backgroundColor: "#013A63",
        width: 50,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 14,
    },
    searchIcon:{
        color:"white",
    },
    searchWrapper:{
        flex:1,
        backgroundColor:"#A9D6E5",
        marginLeft: 30,
        borderRadius: 10,
    },
    searchInput:{
        width:"100%",
        height:"100%",
        paddingHorizontal:"",
    },

    ////////////////////

    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
      },
      container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#013A63',
    
      },
      categoryScroll: {
        marginBottom: 0, // Reducido para eliminar el espacio extra
      },
      categoryContainer: {
        flexDirection: 'row',
        height: 40,
        paddingVertical: 5,
      },
      categoryButton: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#012A4A',
        marginRight: 10, // Añadido para un mejor espaciado entre categorías
      },
      selectedCategoryButton: {
        backgroundColor: '#012A4A',
      },
      categoryText: {
        fontSize: 16,
        color: '#2C7DA0',
      },
      selectedCategoryText: {
        color: '#fff',
      },
      productList: {
        justifyContent: 'space-between',
        marginTop: 0, // Ajustado para que los productos estén más cerca de las categorías
      },
      productContainer: {
        flex: 1,
        margin: 10,
        alignItems: 'center', // Centrar los elementos
        justifyContent: 'center', // Asegura que se distribuyan bien
      },
      productImage: {
        width: 80, // Ajustado para mostrar 3 productos por fila
        height: 80, // Ajustado para mostrar 3 productos por fila
        borderRadius: 10,
      },
      productName: {
        fontSize: 14, // Ajustado para el tamaño de los productos
        fontWeight: 'bold',
        marginTop: 5,
      },
      productPrice: {
        fontSize: 14, // Ajustado para el tamaño de los productos
        color: 'red',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
      },
      modalContent: {
        backgroundColor: '#fff', // Fondo blanco
        padding: 20,
        width: '80%',
        borderRadius: 10,
        alignItems: 'center',
      },
      modalImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginBottom: 20,
      },
      modalProductName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      modalProductPrice: {
        fontSize: 20,
        color: 'red',
        marginBottom: 20,
      },
      totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      quantityButton: {
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
      },
      quantityButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      quantityText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      addButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
      },
      addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
      },
      contentText: {
        fontSize: 18,
        color: '#333',
      },
      columnWrapper: {
        justifyContent: 'space-between', // Esto asegura que las columnas estén correctamente alineadas
      },
});



export default Buscador;

