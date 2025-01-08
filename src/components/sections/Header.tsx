// components/sections/Header.tsx
import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface HeaderProps {
  name: string;
  title: string;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subheader: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 20,
  },
});

const Header: React.FC<HeaderProps> = ({ name, title }) => (
  <View>
    <Text style={styles.header}>{name}</Text>
    <Text style={styles.subheader}>{title}</Text>
  </View>
);

export default Header;
