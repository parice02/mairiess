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
import { Block, Text } from "expo-ui-kit";
import { TextInput } from "react-native-paper";
import color from "color";

const { height } = Dimensions.get("screen");
const logo_height = height * 0.3;
const icon_size = 20;

class Login extends React.Component {
  state = {
    error_1: false,
    error_2: false,
    error_3: false,
    error_4: false,
    error_5: false,
    error_6: false,
    error_7: false,
    error_8: false,
    conn_message: "",
  };

  _username = "";
  _password = "";
  _cpassword = "";
  _first_name = "";
  _last_name = "";
  _birthdate = "";
  _birthplace = "";
  _nip = "";

  _mandatory_field_info = "Ce champ est obligatoir.";

  on_firstname_change = (value) => (this._first_name = value);
  on_lastname_change = (value) => (this._last_name = value);
  on_birthdate_change = (value) => (this._birthdate = value);
  on_birthplace_change = (value) => (this._birthplace = value);
  on_nip_change = (value) => (this._nip = value);
  on_username_change = (value) => (this._username = value);
  on_cpassword_change = (value) => (this._cpassword = value);
  on_password_change = (value) => (this._password = value);

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

  navigate_to_login = () => {
    const { navigation } = this.props;
    navigation.navigate("login_stack");
  };

  render() {
    const { constants } = this.props;
    const { colors } = constants;
    const {
      conn_message,
      error_1,
      error_2,
      error_3,
      error_4,
      error_5,
      error_6,
      error_7,
      error_8,
    } = this.state;

    const field_list = [
      {
        label: "Nom de famille",
        icon: "account",
        focus: true,
        complete_type: "name",
        error: error_1,
        keyboard_type: "default",
        hide: false,
        on_blur: () => {},
        on_text_change: this.on_firstname_change,
      },
      {
        label: "Prénom(s)",
        icon: "account",
        focus: false,
        complete_type: "name",
        error: error_2,
        keyboard_type: "default",
        hide: false,
        on_blur: () => {},
        on_text_change: this.on_lastname_change,
      },
      {
        label: "Lieu de naissance",
        icon: "account",
        focus: false,
        complete_type: "name",
        error: error_3,
        keyboard_type: "default",
        hide: false,
        on_blur: () => {},
        on_text_change: this.on_birthplace_change,
      },
      {
        label: "Date de naissance",
        icon: "account",
        focus: false,
        complete_type: "name",
        error: error_4,
        keyboard_type: "default",
        hide: false,
        on_blur: () => {},
        on_text_change: this.on_birthdate_change,
      },
      {
        label: "Numéro d'identifiant personnel",
        icon: "account",
        focus: false,
        complete_type: "name",
        error: error_5,
        keyboard_type: "default",
        hide: false,
        on_blur: () => {},
        on_text_change: this.on_nip_change,
      },
      {
        label: "Nom d'utilisateur",
        icon: "account",
        focus: false,
        complete_type: "name",
        error: error_6,
        keyboard_type: "default",
        hide: false,
        on_blur: () => {},
        on_text_change: this.on_username_change,
      },
      {
        label: "Mot de passe",
        icon: "account",
        focus: false,
        complete_type: "name",
        error: error_7,
        keyboard_type: "default",
        hide: true,
        on_blur: () => {},
        on_text_change: this.on_password_change,
      },
      {
        label: "Confirmer votre mot de passe",
        icon: "account",
        focus: false,
        complete_type: "name",
        error: error_8,
        keyboard_type: "default",
        hide: true,
        on_blur: () => {},
        on_text_change: this.on_cpassword_change,
      },
    ];

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
                Inscription
              </Text>
            </Block>
            {conn_message !== "" && (
              <Block margin={"1x"}>
                <Text margin size={16} color={colors.danger}>
                  {conn_message}
                </Text>
              </Block>
            )}
            {field_list.map((item, index) => (
              <Block key={index} middle padding>
                <TextInput
                  autoCompleteType={item.complete_type}
                  secureTextEntry={item.hide}
                  mode={"flat"}
                  autoFocus={item.focus}
                  dense={true}
                  left={
                    <TextInput.Icon
                      name={item.icon}
                      color={item.error ? colors.danger : colors.maincolor}
                      size={icon_size}
                    />
                  }
                  label={item.label}
                  keyboardType={"default"}
                  error={item.error}
                  onChangeText={item.on_text_change}
                  onBlur={item.on_blur}
                />
                {item.error && (
                  <Text margin color={colors.danger}>
                    {this._mandatory_field_info}
                  </Text>
                )}
              </Block>
            ))}

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
                  S'inscrire
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.navigate_to_login}
                style={[
                  styles.sign_in,
                  {
                    backgroundColor: color(colors.maincolor).lighten(0.4).hex(),
                    marginTop: 10,
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
