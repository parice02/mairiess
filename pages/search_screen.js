import React from "react";
import { StyleSheet, Platform, StatusBar, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Block, Text } from "expo-ui-kit";
import { ActivityIndicator, Portal, Modal, Divider } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { connect } from "react-redux";

const duration = 1000;
const os = Platform.OS === "android" ? "md" : "ios";

class SearchBar extends React.Component {
  render_activity_indicator = () => (
    <Portal>
      <Modal dismissable={false} visible={false}>
        <ActivityIndicator
          size={"large"}
          hidesWhenStopped={true}
          animating={this.props.search_loading}
          color={this.props.constants.colors.maincolor}
        />
      </Modal>
    </Portal>
  );

  render_item = ({ item }) => (
    <Block row margin>
      <Ionicons name={`${os}-search`} size={25} />
      <Block row marginLeft>
        <Text transform={"capitalize"} h3>
          {item.first_name}
          {"\t"}
        </Text>
        <Text transform={"capitalize"} h3>
          {item.last_name}
        </Text>
      </Block>
    </Block>
  );

  componentWillUnmount() {
    /* this.props.dispatch({ type: "initialize_search_loading" });
    this.props.dispatch({ type: "initialize_has_made" });
    this.props.dispatch({ type: "initialize_search_result" }); */
  }

  render_separator = () => <Divider />;

  render_footer_header = () => <Block margin />;

  render_empty_list = () => (
    <Block>
      <Animatable.Image
        style={styles.image_placeholder}
        animation={"swing"}
        duration={duration}
        source={require("../assets/search_icons/search.png")}
      />
      <Text style={styles.image_placeholder_text}>
        Désolé, aucun résultat trouvé
      </Text>
    </Block>
  );

  empty_search_message = () => (
    <Block center middle>
      <Animatable.Image
        style={styles.image_placeholder}
        animation={"swing"}
        duration={duration}
        source={require("../assets/search_icons/search.png")}
      />
      <Text style={styles.image_placeholder_text}>Entrez votre recherche</Text>
    </Block>
  );

  render() {
    const {
      search_result = [],
      search_has_made = false,
      search_loading = false,
      constants,
    } = this.props;

    const { colors } = constants;

    return (
      <Block white safe>
        <StatusBar
          backgroundColor={colors.maincolor}
          barStyle={"light-content"}
          style="auto"
        />
        {search_loading && this.render_activity_indicator()}
        <Animatable.View
          animation={"zoomIn"}
          duration={duration}
          style={{ flex: 1 }}
        >
          {search_has_made ? (
            this.empty_search_message()
          ) : (
            <FlatList
              data={search_result}
              renderItem={this.render_item}
              ItemSeparatorComponent={this.render_separator}
              ListHeaderComponent={this.render_footer_header}
              ListFooterComponent={this.render_footer_header}
              ListEmptyComponent={this.render_empty_list}
              keyExtractor={(_, index) => `${index}`}
            />
          )}
        </Animatable.View>
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

export default connect(mapStateToProps)(SearchBar);

const styles = StyleSheet.create({
  image_placeholder: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  image_placeholder_text: {
    textAlign: "center",
    color: "gray",
    marginTop: 5,
  },
});
