import { formatNumber } from "@razorpay/i18nify";
import { useI18nContext } from "@razorpay/i18nify-react";
import React, { useEffect } from "react";

const Amount = ({ value, data }) => {
  const { setI18nState } = useI18nContext();

  function onLocaleChange() {
    setI18nState({ locale: "de-DE" });
  }

  return (
    <div>
      {formatNumber(value)}
      <button onClick={onLocaleChange}>change locale to German</button>
    </div>
  );
};

export default Amount;
