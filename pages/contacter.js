import React from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { Block, Text } from "expo-ui-kit";
import {
  ActivityIndicator,
  Portal,
  Modal,
  Divider,
  Button,
  TextInput,
} from "react-native-paper";
import { connect } from "react-redux";

const { width } = Dimensions.get("window");
const icon_size = 20;
const _DEFAULT_STATE = {
  erro_1: false,
  erro_2: false,
  erro_3: false,
  conn_message: "",
  loading: false,
};

class SearchBar extends React.Component {
  state = _DEFAULT_STATE;

  _subject = "";
  _message = "";
  _mandatory_field_info = "Ce champ est obligatoir.";

  on_subject_change = (subject) => (this._subject = subject);

  on_message_change = (message) => (this._message = message);

  on_subject_blur = () =>
    this.setState(() => {
      if (!this._subject) return { error_1: true };
      else return { error_1: false };
    });

  on_message_blur = () =>
    this.setState(() => {
      if (!this._message) return { error_2: true };
      else return { error_2: false };
    });

  validate = () => {
    let error_count = 0;
    if (!this._subject) {
      this.setState(() => ({ error_1: true }));
      error_count++;
    }
    if (!this._message) {
      this.setState(() => ({ error_2: true }));
      error_count++;
    }

    if (error_count === 0) return true;
    else return false;
  };

  on_submit = async () => {
    const { navigation, dispatch, connected_user } = this.props;

    if (this.validate()) {
      const data = {
        message: this._message,
        subject: this._subject,
        user: connected_user,
      };
      //send to the server
    }
  };

  render() {
    const { constants, navigation } = this.props;
    const { colors } = constants;
    const { conn_message, error_1, error_2, loading } = this.state;
    return (
      <Block white safe>
        <StatusBar
          backgroundColor={colors.maincolor}
          barStyle={"light-content"}
          style="auto"
        />
        <Block scroll>
          <KeyboardAvoidingView>
            <Block margin padding>
              <TextInput
                autoCompleteType={"off"}
                mode={"flat"}
                autoFocus={true}
                dense={true}
                left={
                  <TextInput.Icon
                    name={"text-subject"}
                    color={error_1 ? colors.danger : colors.maincolor}
                    size={icon_size}
                  />
                }
                label={"Sujet"}
                keyboardType={"default"}
                error={error_1}
                onChangeText={this.on_subject_change}
                onBlur={this.on_subject_blur}
              />
              {error_1 && (
                <Text margin color={colors.danger}>
                  {this._mandatory_field_info}
                </Text>
              )}
            </Block>
            <Block margin padding>
              <TextInput
                autoCompleteType={"off"}
                multiline={true}
                numberOfLines={20}
                label={"Contenu"}
                keyboardType={"default"}
                error={error_2}
                onChangeText={this.on_message_change}
                onBlur={this.on_message_blur}
              />
              {error_2 && (
                <Text margin color={colors.danger}>
                  {this._mandatory_field_info}
                </Text>
              )}
            </Block>
          </KeyboardAvoidingView>
          <Block row space={"between"} margin={"4x"}>
            <Button
              icon="cancel"
              mode="outlined"
              onPress={() => {
                this._message = "";
                this._subject = "";
                this.setState({ ..._DEFAULT_STATE });
                navigation.goBack();
              }}
              color={colors.danger}
              style={styles.button}
            >
              annuler
            </Button>

            <Button
              icon="content-save"
              mode="outlined"
              onPress={this.on_submit}
              color={colors.primary}
              style={styles.button}
              loading={loading}
            >
              envoyer
            </Button>
          </Block>
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

export default connect(mapStateToProps)(SearchBar);

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
  },
  text_input: { backgroundColor: "white" },
});
