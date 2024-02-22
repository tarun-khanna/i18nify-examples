import { formatNumber } from "@razorpay/i18nify-js/currency";
import { useI18nContext } from "@razorpay/i18nify-react";
import { Text, Button } from "react-native";

export default function Amount({ value }) {
  const { setI18nState } = useI18nContext();
  function clickHandler() {
    setI18nState({ locale: "de-DE" });
  }
  return (
    <>
      <Text>{formatNumber(value, { currency: "INR" })}</Text>
      <Button title="Change locale to German" onPress={clickHandler} />
    </>
  );
}
