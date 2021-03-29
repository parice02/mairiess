import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "react-native-vector-icons";
import { Block, Button } from "expo-ui-kit";
import { connect } from "react-redux";

import Support from "../pages/support";
import Contacter from "../pages/contacter";
import ContextMenu from "../components/context_menu";

const os = Platform.OS === "android" ? "md" : "ios";
const icon_size = 20;
const icon_color = "white";

const Stack = createStackNavigator();

class MyStack extends React.Component {
  get_menu = (page) => {
    switch (page) {
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
        headerMode={"float"}
        initialRouteName={"parameter_stack"}
        screenOptions={({ route, navigation }) => ({
          headerTitleAlign: "center",
          headerTintColor: icon_color,
          headerStyle: {
            backgroundColor: colors.maincolor,
          },
          headerLeft: () => (
            <Button padding margin transparent onPress={navigation.goBack}>
              <Ionicons
                name={"arrow-back"}
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
          name="support_stack"
          component={Support}
          options={{ title: "Support technique" }}
        />
        <Stack.Screen
          name="contacter_stack"
          component={Contacter}
          options={{ title: "Contacter le support technique" }}
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
