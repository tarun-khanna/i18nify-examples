import { formatNumber } from "@razorpay/i18nify";
import { useI18nContext } from "@razorpay/i18nify-react";
import React, { useEffect } from "react";

const Amount = ({ value, data }) => {
  const { setI18nState } = useI18nContext();

  useEffect(() => {
    setI18nState(data);
  }, []);

  return <div>{formatNumber(value)}</div>;
};

export default Amount;
