import React from "react";
import Amount from "../components/Amount";
import { I18nProvider } from "@razorpay/i18nify-react";

const App = ({ data }) => {
  return (
    <I18nProvider initData={data}>
      <div>
        <h1>Server-Side Rendering without Next.js</h1>
        <Amount value={2000000} data={data} />
      </div>
    </I18nProvider>
  );
};

export default App;
