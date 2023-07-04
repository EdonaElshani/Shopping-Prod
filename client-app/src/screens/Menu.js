import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { flexLogo } from "../constants/Images";
import FilterNavbar from "../components/FilterNavbar";
import axios from "react-native-axios";

const { height } = Dimensions.get("window");

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      const { products, brands } = response.data;
      setProducts(products);
      setFilteredProducts(products);
      setBrands(brands);
    });
  }, []);

  const handleSearchChange = (text) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (category) => {
    const filteredByCategory = products.filter((product) =>
      product.category.toLowerCase().includes(category.toLowerCase())
    );
    setFilteredProducts(filteredByCategory);
    const uniqueBrands = [
      ...new Set(filteredByCategory.map((product) => product.brand)),
    ];
    setBrands(uniqueBrands);
  };
  const handleBrandChange = (brand, selectedCategory) => {
    const filteredByBrand = products.filter(
      (product) =>
        product.brand.toLowerCase().includes(brand.toLowerCase()) &&
        product.category.toLowerCase().includes(selectedCategory.toLowerCase())
    );
    setFilteredProducts(filteredByBrand);
  };
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.title}</Text>
        <Text style={styles.itemPrice}>{item.price}$</Text>
      </View>
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <Image source={flexLogo} style={styles.logoImg} />
        <FilterNavbar
          onSearchChange={handleSearchChange}
          onCategoryChange={handleCategoryChange}
          onBrandChange={handleBrandChange}
          brands={brands}
        />
        <FlatList
          data={filteredProducts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E3445",
    alignItems: "center",
    padding: "10px",
    minHeight: height,
  },
  logoImg: {
    width: "200px",
    height: "120px",
    marginVertical: "20px",
  },
  itemContainer: {
    marginBottom: 16,
    borderRadius: 8,
    paddingHorizontal: "10px",
  },
  itemImage: {
    width: "168px",
    height: "149px",
    borderRadius: 8,
  },
  itemName: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 4,
    width: "100px",
  },
  itemPrice: {
    fontSize: 14,
    color: "#FFF",
  },
  itemDetails: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
