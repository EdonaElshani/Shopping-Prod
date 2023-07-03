import React, { useState } from "react";
import { View, TextInput, StyleSheet, Picker } from "react-native";

const FilterNavbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchChange = (text) => {
    setSearchValue(text);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.navbar}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search a product"
        value={searchValue}
        onChangeText={handleSearchChange}
      />
      <Picker
        style={styles.dropdown}
        selectedValue={selectedCategory}
        onValueChange={handleCategoryChange}
      >
        <Picker.Item label="Filter by category" value="" />
        <Picker.Item label="Smartphone" value="smartphone" />
        <Picker.Item label="Laptops" value="laptops" />
        <Picker.Item label="Fragrances" value="fragrances" />
      </Picker>
    </View>
  );
};

export default FilterNavbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
    marginBottom: 20,
    gap: 5,
  },
  searchInput: {
    width: 180,
    height: 32,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 6,
  },
  dropdown: {
    width: 180,
    height: 32,
    borderRadius: 8,
    padding: 4,
  },
});
