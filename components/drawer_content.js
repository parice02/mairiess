import React from "react";
import { Block, Text } from "expo-ui-kit";
import { Image, Platform } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "react-native-vector-icons";
import Color from "color";
import { connect } from "react-redux";

import { drawer_labels as options } from "../database/constants";

const os = Platform.OS === "android" ? "md" : "ios";

class DrawerMenu extends React.Component {
  on_disconnect = async () => {
    /* const { navigation, connected_user } = this.props;
    await queries.disconnect_user(connected_user.id);
    this.props.dispatch({ type: "delete_session" });
    this.props.dispatch({ type: "disconnect_user" });
    navigation.replace("login_stack"); */
  };

  render() {
    const {
      navigation,
      connected_user,
      activeBackgroundColor,
      activeTintColor,
      inactiveBackgroundColor,
      inactiveTintColor,
      constants,
    } = this.props;
    const { colors } = constants;

    return (
      <DrawerContentScrollView
        {...this.props}
        contentContainerStyle={{ flex: 1 }}
      >
        <Block>
          <Block scroll>
            <Block margin marginTop={"2x"}>
              {/* <Image
                source={require("../assets/applogo/logo.png")}
                resizeMode={"cover"}
                borderRadius={80}
              /> */}
              <Text white h2 marginTop={"2x"}>
                Gate Manager
              </Text>
              <Text white subtitle marginTop>
                contact-info@gatemanager.com
              </Text>
            </Block>
            <Block>
              <DrawerItemList {...this.props} />
              {options.map((item, index) => (
                <DrawerItem
                  {...this.props}
                  key={index}
                  label={item.label}
                  onPress={() =>
                    item.navigate.where &&
                    navigation.navigate(item.navigate.where, {
                      ...item.navigate.params,
                      profile: connected_user,
                    })
                  }
                  icon={({ focused, size, color }) => (
                    <Ionicons
                      name={`${os}-${item.icon}`}
                      size={size}
                      color={color}
                    />
                  )}
                />
              ))}
            </Block>
          </Block>
          <Block noflex top>
            <DrawerItem
              label="Se déconnecter"
              labelStyle={{ marginLeft: -16 }}
              inactiveTintColor={Color(colors.danger).darken(0.4).hex()}
              onPress={this.on_disconnect}
              icon={({ focused, size, color }) => (
                <Ionicons name={`${os}-exit`} color={color} size={size} />
              )}
            />
          </Block>
        </Block>
      </DrawerContentScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    constants: state.constants,
  };
};

export default connect(mapStateToProps)(DrawerMenu);
