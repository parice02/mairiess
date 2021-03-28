import React from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Searchbar, Checkbox, TextInput, Button } from "react-native-paper";
import { Block, Text } from "expo-ui-kit";
import { connect } from "react-redux";
import color from "color";
import "moment/locale/fr";
import moment from "moment";

import SearchScreen from "../pages/search_screen";

const Stack = createStackNavigator();
const { width } = Dimensions.get("window");

class MyStack extends React.Component {
  state = {
    query: "",
  };

  queries_result = [];

  on_change_text = (query) => this.setState({ query });

  render_header = ({
    scene,
    previous,
    navigation,
    layout,
    mode,
    insets,
    styleInterpolator,
  }) => {
    const { query } = this.state;
    const { options } = scene.descriptor;

    return (
      <View>
        <Searchbar
          value={query}
          autoFocus={true}
          placeholder={"Rechercher"}
          onChangeText={this.on_change_text}
          style={[options.headerStyle, { ...insets }]}
          inputStyle={styles.input}
          onSubmitEditing={this.search}
          icon={"arrow-left"}
          iconColor={"white"}
          onIconPress={navigation.goBack}
        />
      </View>
    );
  };

  search = async () => {
    const { dispatch } = this.props;
    const { query } = this.state;
    this.queries_result = [];

    /* if (query !== "") {
      dispatch({ type: "search_start" });
      dispatch({ type: "initialize_has_made" });
      dispatch({ type: "initialize_search_result" });

      this.queries_result = await tables.Visitor.search(query);
      if (this.queries_result.length) {
        dispatch({
          type: "add_searh_result",
          value: this.queries_result,
        });
      }
      dispatch({ type: "search_has_made" });
    }
    dispatch({ type: "search_stop" }); */
  };

  render() {
    const { constants } = this.props;
    const { colors } = constants;

    return (
      <Stack.Navigator
        headerMode={"screen"}
        initialRouteName={"search_stack"}
        screenOptions={({ route, navigation }) => ({
          header: this.render_header,
          headerStyle: {
            backgroundColor: colors.maincolor,
          },
        })}
      >
        <Stack.Screen name="search_stack" component={SearchScreen} />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 35,
    backgroundColor: "#e4e6eb",
    borderRadius: 10,
    margin: 5,
  },
  card: {
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: color("gray").lighten(0.9).hex(),
  },
  row: {
    padding: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    ...state,
    constants: state.constants,
  };
};

export default connect(mapStateToProps)(MyStack);
