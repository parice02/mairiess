import React from "react";
import { Platform, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "react-native-vector-icons";
import { Block, Button } from "expo-ui-kit";
import { connect } from "react-redux";

import Home from "../pages/home";
import ContextMenu from "../components/context_menu";

const icon_size = 20;
const icon_color = "white";

const Stack = createStackNavigator();

class MyStack extends React.Component {
  get_menu = (page) => {
    let menu;
    const { navigation } = this.props;
    switch (page) {
      case "home_stack":
        menu = [];
        return menu.filter((item) => item !== null);
      default:
        return [];
    }
  };

  render() {
    const { constants } = this.props;
    const { colors } = constants;

    return (
      <Stack.Navigator
        mode={"modal"}
        headerMode={"screen"}
        initialRouteName={"home_stack"}
        screenOptions={({ route, navigation }) => ({
          headerTitleAlign: "center",
          headerTintColor: icon_color,
          headerStyle: {
            backgroundColor: colors.maincolor,
          },
          headerLeft: () => (
            <Button
              padding
              margin
              transparent
              onPress={() =>
                route.name === "home_stack"
                  ? navigation.toggleDrawer()
                  : navigation.goBack()
              }
            >
              <Ionicons
                name={route.name === "home_stack" ? "menu" : "arrow-back"}
                size={icon_size}
                color={icon_color}
              />
            </Button>
          ),
          headerRight: () => (
            <Block row space={"between"}>
              <>
                <Button
                  padding
                  margin
                  transparent
                  onPress={() => {
                    navigation.navigate("search_stack");
                  }}
                >
                  <Ionicons
                    name={"search"}
                    size={icon_size}
                    color={icon_color}
                  />
                </Button>
              </>
              <>
                <ContextMenu menu={this.get_menu(route.name)} {...this.props} />
              </>
            </Block>
          ),
        })}
      >
        <Stack.Screen
          name="home_stack"
          component={Home}
          options={{ title: "Accueil" }}
        />
      </Stack.Navigator>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    constants: state.constants,
  };
};

export default connect(mapStateToProps)(MyStack);
