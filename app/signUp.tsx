import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from "react-native";

type AuthButtonProps = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
};

type AuthInputProps = {
  placeholder: string;
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
  secureTextEntry?: boolean;
  showButton?: {
    text: string;
    onPress: () => void;
  };
};

const AuthButton = ({ title, onPress, style }: AuthButtonProps) => (
  <Pressable style={[styles.authButton, style]} onPress={onPress}>
    <Text style={styles.authButtonText}>{title}</Text>
  </Pressable>
);

const AuthInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  showButton,
}: AuthInputProps) => (
  <View style={styles.inputContainer}>
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        secureTextEntry={secureTextEntry}
      />
      {showButton && (
        <Pressable onPress={showButton.onPress}>
          <Text style={styles.showButtonText}>{showButton.text}</Text>
        </Pressable>
      )}
    </View>
  </View>
);

const SignUpScreen = ({ onSwitchToLogin }: { onSwitchToLogin: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign Up</Text>
        <Pressable onPress={onSwitchToLogin}>
          <Text style={styles.switchButton}>Login</Text>
        </Pressable>
      </View>

      <AuthInput placeholder="Name" value={name} onChangeText={setName} />

      <AuthInput placeholder="Email" value={email} onChangeText={setEmail} />

      <AuthInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        showButton={{
          text: showPassword ? "Hide" : "Show",
          onPress: () => setShowPassword(!showPassword),
        }}
      />

      <AuthButton
        title="Sign Up"
        onPress={() => console.log("Sign Up pressed")}
        style={styles.signUpButton}
      />
    </View>
  );
};

const LoginScreen = ({
  onSwitchToSignUp,
}: {
  onSwitchToSignUp: () => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Log In</Text>
        <Pressable onPress={onSwitchToSignUp}>
          <Text style={styles.switchButton}>Sign Up</Text>
        </Pressable>
      </View>

      <AuthInput placeholder="Email" value={email} onChangeText={setEmail} />

      <AuthInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        showButton={{
          text: showPassword ? "Hide" : "Show",
          onPress: () => setShowPassword(!showPassword),
        }}
      />

      <AuthButton
        title="Log In"
        onPress={() => console.log("Log In pressed")}
        style={styles.signUpButton}
      />

      <Pressable style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </Pressable>
    </View>
  );
};

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <View style={styles.screenContainer}>
      {isLogin ? (
        <LoginScreen onSwitchToSignUp={() => setIsLogin(false)} />
      ) : (
        <SignUpScreen onSwitchToLogin={() => setIsLogin(true)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    lineHeight: 36,
    color: "#000",
    textAlign: "center",
    flex: 1,
  },
  switchButton: {
    fontSize: 16,
    color: "#5DB075",
    fontWeight: "500",
    lineHeight: 19,
  },
  inputContainer: {
    width: 343,
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 16,
    justifyContent: "center",
    margin: 16,
    alignSelf: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "500",
  },
  showButtonText: {
    fontSize: 16,
    color: "#5DB075",
    fontWeight: "500",
    lineHeight: 19,
  },
  authButton: {
    width: 343,
    height: 50,
    backgroundColor: "#5DB075",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  authButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "600",
    lineHeight: 19,
  },
  forgotPassword: {
    alignSelf: "center",
    marginTop: 16,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: "#5DB075",
    fontWeight: "500",
    lineHeight: 19,
  },
  signUpButton: {
    marginTop: 20,
  },
});

export default AuthScreen;
