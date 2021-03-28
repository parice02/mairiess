import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { Block, Text } from "expo-ui-kit";
import { Divider } from "react-native-paper";
import color from "color";

import { support_options as options } from "../database/constants";

const icon_size = 20;

class Option extends React.Component {
  render_item = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text bold margin style={styles.green}>
          {item.section}
        </Text>
      </View>
      <View style={styles.row}>
        {item.items.map((it, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              it.navigate.where &&
                this.props.navigation.navigate(it.navigate.where, {
                  ...it.navigate.params,
                });
            }}
          >
            <Block key={index} row margin={15}>
              <MaterialCommunityIcons name={it.icon} size={icon_size} />
              <Text marginLeft={15}>{it.name}</Text>
            </Block>
            {index !== item.items.length - 1 && <Divider inset />}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  render_footer_header = () => <Block />;

  render_empty_list = () => (
    <Text middle center h2>
      Aucune option
    </Text>
  );

  render() {
    const { navigation, constants } = this.props;
    const { colors } = constants;
    return (
      <Block safe transparent flex>
        <StatusBar
          backgroundColor={colors.maincolor}
          barStyle={"light-content"}
          style="auto"
        />
        <Block flex>
          <FlatList
            data={options}
            renderItem={this.render_item}
            ListEmptyComponent={this.render_empty_list}
            ListFooterComponent={this.render_footer_header}
            ListHeaderComponent={this.render_footer_header}
            keyExtractor={(item, index) => `${index}`}
            progressViewOffset={10}
            legacyImplementation={true}
          />
        </Block>
      </Block>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    constants: state.constants,
  };
};

export default connect(mapStateToProps)(Option);

const styles = StyleSheet.create({
  card: {
    margin: 7,
    marginTop: 10,
    elevation: 5,
  },
  row: {
    padding: 5,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: color("#f5f5f5").hex(),
    backgroundColor: "#fff",
  },
  green: {
    color: color("#075e54").hex(),
  },
});
