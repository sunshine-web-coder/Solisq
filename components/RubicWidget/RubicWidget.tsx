import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";

export default function RubicWidget() {
  useEffect(() => {
    const configuration = {
      from: "ETH",
      to: "0x3330BFb7332cA23cd071631837dC289B09C33333",
      fromChain: "ETH",
      toChain: "ETH",
      amount: 1,
      iframe: "true",
      hideSelectionFrom: false,
      hideSelectionTo: false,
      hideTokenSwitcher: false,
      theme: "dark",
      injectTokens: {
        eth: ["0x3330BFb7332cA23cd071631837dC289B09C33333"],
      },
      slippagePercent: {
        instantTrades: 2,
        crossChain: 5,
      },
      crossChainIntegratorAddress: "",
      onChainIntegratorAddress: "",
      whitelistOnChain: [],
      blacklistOnChain: [],
      whitelistCrossChain: [],
      blacklistCrossChain: [],
    };

    Object.freeze(configuration);

    // Initialize the Rubic widget
    if (window.rubicWidget) {
      window.rubicWidget.init(configuration);
    }
  }, []);

  return (
    <>
      {/* <Head> */}
      <Script src="https://new-widgets.rubic.exchange/iframe/bundle.new-app.min.js" async></Script>
      {/* </Head> */}
      <div
        id="rubic-widget-root"
        style={{ width: "100%", height: "500px" }}
      ></div>
    </>
  );
}
