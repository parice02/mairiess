import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dimensions } from "react-native";
import Color from "color";
import { connect } from "react-redux";
import { Ionicons } from "react-native-vector-icons";

import HomeStack from "./home_stack";
import SupportScreen from "./support_stack";
import DrawerContent from "../components/drawer_content";

const Drawer = createDrawerNavigator();
const { width } = Dimensions.get("window");

class MyDrawer extends React.Component {
  async componentDidMount() {
    /* const { connected_user, dispatch, all_visits, register } = this.props;
    let response = await queries.open_register(connected_user.id);
    const old_register = response.new && register.id ? register : null;
    dispatch({
      type: "create_register",
      value: response.response,
    });
    if (response.new) {
      old_register &&
        queries.close_register_by_id(old_register.id, connected_user.id);
      const current_v = all_visits.filter((item) => item.is_ongoing);
      for (const item of current_v) {
        queries.close_visit(item.visitor_id, old_register.id);
      }
    }

    response = await tables.Visit.get_today_visitors(response.response.id);
    dispatch({
      type: "add_visit_from_db",
      value: response,
    }); */
  }

  render_drawer = (props) => <DrawerContent {...props} />;

  render() {
    const { constants } = this.props;
    const { colors } = constants;

    return (
      <Drawer.Navigator
        initialRouteName={"home_drawer"}
        drawerStyle={{
          width: (3 * width) / 5,
        }}
        drawerContentOptions={{
          activeTintColor: Color(colors.light).lighten(0.09).hex(),
          inactiveTintColor: Color(colors.dark).lighten(0.09).hex(),
          activeBackgroundColor: Color(colors.maincolor).lighten(0.09).hex(),
          inactiveBackgroundColor: "transparent",
        }}
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}
        drawerContent={this.render_drawer}
      >
        <Drawer.Screen
          name="home_drawer"
          options={{
            drawerLabel: "Accueil",
            drawerIcon: ({ focused, size, color }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        >
          {(props) => <HomeStack {...props} />}
        </Drawer.Screen>

        <Drawer.Screen
          name="support_drawer"
          options={{
            drawerLabel: "Support",
            drawerIcon: ({ focused, size, color }) => (
              <Ionicons
                name={focused ? "help-buoy" : "help-buoy-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        >
          {(props) => <SupportScreen {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    constants: state.constants,
  };
};

export default connect(mapStateToProps)(MyDrawer);
