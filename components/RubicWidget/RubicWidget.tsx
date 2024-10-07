import { useEffect, useRef } from "react";
import Script from "next/script";

// Define the configuration type
interface RubicWidgetConfig {
  from: string;
  to: string;
  fromChain: string;
  toChain: string;
  amount: number;
  iframe: string;
  hideSelectionFrom: boolean;
  hideSelectionTo: boolean;
  hideTokenSwitcher: boolean;
  theme: string;
  injectTokens: {
    [key: string]: string[];
  };
  slippagePercent: {
    instantTrades: number;
    crossChain: number;
  };
  crossChainIntegratorAddress: string;
  onChainIntegratorAddress: string;
  whitelistOnChain: string[];
  blacklistOnChain: string[];
  whitelistCrossChain: string[];
  blacklistCrossChain: string[];
}

export default function RubicWidget() {
  const initialized = useRef(false);

  useEffect(() => {
    const configuration: RubicWidgetConfig = {
      from: "ETH",
      to: "0x3330BFb7332cA23cd071631837dC289B09C33333",
      fromChain: "ETH",
      toChain: "ETH",
      amount: 1,
      iframe: "true",
      hideSelectionFrom: false,
      hideSelectionTo: true,
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

    const initWidget = () => {
      if (window.rubicWidget && !initialized.current) {
        // Use a type assertion here
        (window.rubicWidget.init as (config: RubicWidgetConfig) => void)(
          configuration
        );
        initialized.current = true;
      }
    };

    // Try to init immediately in case the script has already loaded
    if (typeof window !== "undefined") {
      initWidget();
    }

    // Also set up a MutationObserver to watch for the widget root element
    const observer = new MutationObserver(() => {
      initWidget();
    });

    if (typeof document !== "undefined") {
      const targetNode = document.body;
      observer.observe(targetNode, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Script
        src="https://new-widgets.rubic.exchange/iframe/bundle.new-app.min.js"
        strategy="afterInteractive"
      />
      <div id="rubic-widget-root"></div>
    </>
  );
}
