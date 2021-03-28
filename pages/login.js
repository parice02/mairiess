import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { connect } from "react-redux";
import * as Animatable from "react-native-animatable";
import { Block, Text } from "expo-ui-kit";
import { TextInput } from "react-native-paper";
import color from "color";

const { height } = Dimensions.get("screen");
const logo_height = height * 0.3;
const icon_size = 20;

class Login extends React.Component {
  state = {
    erro_1: false,
    erro_2: false,
    hide_password: true,
    conn_message: "",
  };

  _username = "";
  _password = "";
  _mandatory_field_info = "Ce champ est obligatoir.";

  on_username_change = (username) => (this._username = username);

  on_password_change = (password) => (this._password = password);

  on_username_blur = () =>
    this.setState(() => {
      if (!this._username) return { error_1: true };
      else return { error_1: false };
    });

  on_password_blur = () =>
    this.setState(() => {
      if (!this._password) return { error_2: true };
      else return { error_2: false };
    });

  toggle_eye = () =>
    this.setState((state) => ({ hide_password: !state.hide_password }));

  validate = () => {
    let error_count = 0;
    if (!this._username) {
      this.setState(() => ({ error_1: true }));
      error_count++;
    }
    if (!this._password) {
      this.setState(() => ({ error_2: true }));
      error_count++;
    }

    if (error_count === 0) return true;
    else return false;
  };

  on_submit = async () => {
    const { navigation, dispatch } = this.props;
    navigation.replace("menu_drawer");
    /* 

    if (this.validate()) {
      const data = { username: this._username, password: this._password };

      let response = await queries.authenticate_user(data);
      if (response.success) {
        dispatch({ type: "connect_user", value: response.response });
        dispatch({ type: "create_session", value: response.session });
        navigation.replace("menu_drawer");
      } else this.setState({ conn_message: response.message });
    } */
  };

  render() {
    const { constants } = this.props;
    const { colors } = constants;
    const { hide_password, conn_message, error_1, error_2 } = this.state;

    return (
      <Block scroll flex>
        <StatusBar
          backgroundColor={colors.dark}
          barStyle={"light-content"}
          style="auto"
        />
        <Block flex safe>
          <KeyboardAvoidingView style={styles.footer}>
            <Block middle center margin={"2x"}>
              <Text
                size={25}
                margin
                transform={"capitalize"}
                color={colors.maincolor}
              >
                Connexion
              </Text>
            </Block>
            {conn_message !== "" && (
              <Block margin={"1x"}>
                <Text margin size={16} color={colors.danger}>
                  {conn_message}
                </Text>
              </Block>
            )}
            <Block middle padding>
              <TextInput
                autoCompleteType={"username"}
                mode={"flat"}
                autoFocus={true}
                dense={true}
                left={
                  <TextInput.Icon
                    name={"account"}
                    color={error_1 ? colors.danger : colors.maincolor}
                    size={icon_size}
                  />
                }
                label={"Nom d'utilisateur"}
                keyboardType={"default"}
                error={error_1}
                onChangeText={this.on_username_change}
                onBlur={this.on_username_blur}
              />
              {error_1 && (
                <Text margin color={colors.danger}>
                  {this._mandatory_field_info}
                </Text>
              )}
            </Block>
            <Block middle padding>
              <TextInput
                secureTextEntry={hide_password}
                autoCompleteType={hide_password ? "password" : "off"}
                left={
                  <TextInput.Icon
                    name={"form-textbox-password"}
                    color={error_2 ? colors.danger : colors.maincolor}
                    size={icon_size}
                  />
                }
                right={
                  <TextInput.Icon
                    name={hide_password ? "eye-off" : "eye"}
                    onPress={this.toggle_eye}
                    color={colors.maincolor}
                    size={icon_size}
                  />
                }
                mode={"flat"}
                dense={true}
                label={"Mot de passe"}
                keyboardType={hide_password ? "default" : "visible-password"}
                error={error_2}
                onChangeText={this.on_password_change}
                onBlur={this.on_password_blur}
              />
              {error_2 && (
                <Text margin color={colors.danger}>
                  {this._mandatory_field_info}
                </Text>
              )}
            </Block>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={this.on_submit}
                style={[
                  styles.sign_in,
                  {
                    backgroundColor: color(colors.maincolor).lighten(0.1).hex(),
                  },
                ]}
              >
                <Text color={colors.light} style={[styles.text_sign]}>
                  Se connecter
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    //flex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  button: {
    marginTop: 50,
  },
  sign_in: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text_sign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  logo: {
    height: logo_height,
    width: logo_height,
  },
});

const mapStateToProps = (state) => {
  return {
    ...state,
    constants: state.constants,
  };
};

export default connect(mapStateToProps)(Login);
