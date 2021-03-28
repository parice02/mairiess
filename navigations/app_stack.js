import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
//import moment from "moment";

import Login from "../pages/login";
import DrawerMenu from "./menu_drawer";
import SearchBox from "./search_stack";

const Stack = createStackNavigator();

class AppStack extends React.Component {
  _route = "login_stack";

  render() {
    return (
      <Stack.Navigator
        initialRouteName={this._route}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="login_stack" component={Login} />
        <Stack.Screen name="menu_drawer" component={DrawerMenu} />
        <Stack.Screen name="search_stack" component={SearchBox} />
      </Stack.Navigator>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(AppStack);
