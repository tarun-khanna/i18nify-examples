import { formatNumber } from "@razorpay/i18nify";
import { Text } from "react-native";

export default function Amount({ value }) {
  return <Text>{formatNumber(value, { currency: "INR" })}</Text>;
}
