import { Image, useWindowDimensions } from "react-native";

export function LogoImage() {
  const { width } = useWindowDimensions();

  const imageSize = Math.min(width / 1.2, 300);

  return (
    <Image
      source={require("../assets/logo.webp")}
      style={{ width: imageSize, height:imageSize }}
    />
  );
}