import {
  ServerItemRenderer,
  PerseusI18nContextProvider,
} from "@khanacademy/perseus";
import type {
  APIOptions,
  ServerItemRendererComponent,
} from "@khanacademy/perseus";
import Button from "@khanacademy/wonder-blocks-button";
// import { dropdownData } from "./data/dropdown-data";
import { mockStrings } from "./data/mock-strings";
import { useRef, useState } from "react";
import itemData from "./data/item-data";

type CheckState = "no attempt" | "invalid" | "incorrect" | "correct";

function PerseusChrome() {
  const rendererRef = useRef<ServerItemRendererComponent | null>(null);
  const [checkState, setCheckState] = useState<CheckState>("no attempt");

  const apiOptions: APIOptions = {};
  const dependencies = {
    analytics: {
      onAnalyticsEvent: () => new Promise<void>((resolve) => resolve()),
    },
  };

  function checkAnswer() {
    if (!rendererRef.current) return;

    const score = rendererRef.current.scoreInput();

    setCheckState(
      score.empty ? "invalid" : score.correct ? "correct" : "incorrect"
    );
  }

  function getCorrectnessMessage() {
    if (checkState === "no attempt") return "No attempt yet";
    return `Last attempt was: ${checkState}`;
  }

  return (
    <>
      <PerseusI18nContextProvider locale={"en"} strings={mockStrings}>
        <ServerItemRenderer
          ref={(node) => {
            rendererRef.current = node;
          }}
          item={itemData}
          apiOptions={apiOptions}
          dependencies={dependencies}
        />
      </PerseusI18nContextProvider>
      <p>{getCorrectnessMessage()}</p>
      <Button onClick={checkAnswer}>Check</Button>
    </>
  );
}

export default PerseusChrome;
