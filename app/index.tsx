import { Text, View } from "react-native";
import WelcomeMessage from "@/app/WelcomeMessage";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>LOS POLLOS HERMANOS</Text>
        <WelcomeMessage name={"Gus Fring"} />
    </View>
  );
}
