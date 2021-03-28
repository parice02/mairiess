import React from "react";
import { View } from "react-native";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { MaterialCommunityIcons, Ionicons } from "react-native-vector-icons";
import { Button, Text, Block } from "expo-ui-kit";
import { connect } from "react-redux";

const icon_size = 20;
const icon_color = "white";
const os = Platform.OS === "android" ? "md" : "ios";

class ContextMenu extends React.PureComponent {
  _menu = null;

  menu_ref = (ref) => {
    this._menu = ref;
  };

  hide_menu = () => {
    this._menu.hide();
  };

  show_menu = () => {
    this._menu.show();
  };

  menu_item = (index, { icon, name, link, data }) => (
    <MenuItem
      key={index}
      onPress={async () => {
        await link();
        this.hide_menu();
      }}
    >
      <Block margin padding row space={"between"} center>
        <Ionicons name={`${os}-${icon}`} size={icon_size} />
        <Text margin>{name}</Text>
      </Block>
    </MenuItem>
  );

  render() {
    const { menu = [], dispatch, navigation } = this.props;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Menu
          ref={this.menu_ref}
          button={
            <Button padding margin transparent onPress={this.show_menu}>
              <MaterialCommunityIcons
                name={"dots-vertical"}
                size={icon_size}
                color={icon_color}
              />
            </Button>
          }
        >
          {menu.length !== 0
            ? menu.map((value, index) => this.menu_item(index, value))
            : null}

          <>
            <MenuDivider />
            {[
              {
                icon: "information",
                name: "À propos",
                link: () => {},
                data: "",
              },
            ].map((value, index) => this.menu_item(index, value))}
          </>
        </Menu>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(ContextMenu);
