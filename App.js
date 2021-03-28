import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";

import AppContainer from "./navigations/app_stack";
import store from "./redux/store";

export default class App extends React.Component {
  state = { loading: false };

  async componentDidMount() {
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    this.setState({ loading: false }, async () => {
      await SplashScreen.hideAsync();
    });
  }

  render() {
    if (this.state.loading) {
      return <></>;
    }

    const persistor = persistStore(store);
    //persistor.purge();
    return (
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <PaperProvider>
            <NavigationContainer>
              <AppContainer />
            </NavigationContainer>
          </PaperProvider>
        </PersistGate>
      </ReduxProvider>
    );
  }
}
