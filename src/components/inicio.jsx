import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, Modal, Button } from 'react-native';
import React, { useState } from 'react';
import Icon from './icon';
import Ajustes from './ajustes';
import Usuario from './usuario';

const categories = ['Comida', 'Bebida', 'Snacks', 'Dulces'];

const products = [
  { id: '1', name: 'Hamburguesa', price: '$7.50', categoria: 'Comida', image: require('@/../../assets/hamburguesa.jpg') },
  { id: '2', name: 'Tacos de birria', price: '$8.00', categoria: 'Comida', image: require('@/../../assets/tacos.jpg') },
  { id: '3', name: 'Burritos', price: '$6.00', categoria: 'Comida', image: require('@/../../assets/burritos.jpeg') },
  { id: '4', name: 'Camarones', price: '$9.50', categoria: 'Comida', image: require('.@/../../assets/camarones.jpeg') },
  { id: '5', name: 'Cerveza', price: '$3.00' , categoria: 'Bebida', image: require('@/../../assets/hamburguesa.jpg') },
  { id: '6', name: 'Refresco', price: '$2.50', categoria: 'Bebida', image: require('@/../../assets/tacos.jpg') },
  { id: '7', name: 'Papas Fritas', price: '$1.50', categoria: 'Snacks', image: require('@/../../assets/hamburguesa.jpg') },
  { id: '8', name: 'Chocolates', price: '$2.00', categoria: 'Dulces', image: require('@/../../assets/tacos.jpg') },
];

const Inicio = () => {
  const [currentScreen, setCurrentScreen] = useState('Inicio');
  const [selectedCategory, setSelectedCategory] = useState('Comida'); // Categoría por defecto
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Producto seleccionado para mostrar en el modal
  const [quantity, setQuantity] = useState(1); // Cantidad del producto, empieza desde 1
  const [cart, setCart] = useState([]); // Carrito de compras

  // Filtrar productos por la categoría seleccionada
  const filteredProducts = products.filter(product => product.categoria === selectedCategory);

  const renderProduct = ({ item }) => (
    <TouchableOpacity onPress={() => {
      setSelectedProduct(item); // Guardar el producto seleccionado
      setModalVisible(true); // Mostrar el modal
      setQuantity(1); // Restablecer la cantidad a 1 cuando se abre el modal
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
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Inicio':
        return (
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>Productos</Text>
              <Icon name="shoppingcart" size={28} color="black" />
            </View>

            <View style={styles.categoryContainer}>
              {categories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.categoryButton, selectedCategory === category && styles.selectedCategoryButton]}
                  onPress={() => setSelectedCategory(category)}
                >
                  <Text style={[styles.categoryText, selectedCategory === category && styles.selectedCategoryText]}>
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
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
      case 'Ajustes':
        return <Ajustes />;
      case 'Usuario':
        return <Usuario />;
      default:
        return (
          <View style={styles.container}>
            <Text style={styles.contentText}>Contenido de la aplicación</Text>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1 }}>{renderScreen()}</View>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => setCurrentScreen('Inicio')}>
          <Icon type="AntDesign" name="home" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Search Pressed')}>
          <Icon type="AntDesign" name="search1" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen('Usuario')}>
          <Icon type="AntDesign" name="user" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Cart Pressed')}>
          <Icon type="AntDesign" name="shoppingcart" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen('Ajustes')}>
          <Icon type="AntDesign" name="setting" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#007bff',
  },
  selectedCategoryButton: {
    backgroundColor: '#007bff',
  },
  categoryText: {
    fontSize: 16,
    color: '#007bff',
  },
  selectedCategoryText: {
    color: '#fff',
  },
  productList: {
    justifyContent: 'space-between',
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

export default Inicio;
