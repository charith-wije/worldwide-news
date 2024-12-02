import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AuthNavigator from "./src/navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";

export default function App() {
  // Initialize database
  const initializeDatabase = async (db) => {
    try {
      await db.execAsync(
        `CREATE TABLE IF NOT EXISTS Users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          firstName TEXT,
          lastName TEXT,
          dateOfBirth TEXT,
          mobileNumber TEXT UNIQUE,
          email TEXT UNIQUE,
          password TEXT
        );`
      );
      console.log("Database initialized !");
    } catch (err) {
      console.log("Error while initializing database : ", err);
    }
  };

  return (
    <SQLiteProvider
      databaseName={"userDatabase.db"}
      onInit={initializeDatabase}
    >
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </SQLiteProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
