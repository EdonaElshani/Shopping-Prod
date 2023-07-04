import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Picker,
  TouchableOpacity,
  Text,
} from "react-native";

const FilterNavbar = ({
  onSearchChange,
  onCategoryChange,
  brands,
  onBrandChange,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchChange = (text) => {
    onSearchChange(text);
    setSearchValue(text);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };
  const handleBrandChange = (brand) => {
    onBrandChange(brand, selectedCategory);
  };

  return (
    <>
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
          <Picker.Item label="Smartphone" value="smartphones" />
          <Picker.Item label="Laptops" value="laptops" />
          <Picker.Item label="Fragrances" value="fragrances" />
        </Picker>
      </View>

      {/* Brands when category is selected */}
      <View style={styles.brandContainer}>
        {brands &&
          brands.length > 0 &&
          brands.map((brand) => (
            <TouchableOpacity
              style={styles.brandBtn}
              onPress={() => handleBrandChange(brand)}
            >
              <Text style={styles.brandText}>#{brand}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </>
  );
};

export default FilterNavbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  brandContainer: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  brandBtn: {
    backgroundColor: "rgba(255, 255, 255, 0.50)",
    paddingHorizontal: "10px",
    paddingVertical: "6px",
    borderRadius: 5,
    alignItems: "center",
  },
  brandText: {
    color: "white",
    textAlign: "center",
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
