import React from "react";
import { Block, Text } from "expo-ui-kit";
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
import { connect } from "react-redux";

class Home extends React.Component {
  state = { loading: true };

  render() {
    const { constants, navigation, route } = this.props;
    const { colors } = constants;
    const { loading } = this.state;

    return (
      <Block safe transparent flex>
        <StatusBar
          style="auto"
          backgroundColor={colors.maincolor}
          barStyle={"light-content"}
        />
        <Block></Block>
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

export default connect(mapStateToProps)(Home);
