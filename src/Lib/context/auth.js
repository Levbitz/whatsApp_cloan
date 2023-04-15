import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

import { View, Image, SafeAreaView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import LoadingImg from "../images/levbitz.gif";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: 0,
        }}
      >
        <StatusBar hidden={true} />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#094c59",
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            source={LoadingImg}
          />
        </View>
      </SafeAreaView>
    );
  }
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
