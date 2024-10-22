import {
  ServerItemRenderer,
  PerseusI18nContextProvider,
} from "@khanacademy/perseus";
import type {
  APIOptions,
  ServerItemRendererComponent,
} from "@khanacademy/perseus";
import Button from "@khanacademy/wonder-blocks-button";
import { dropdownItemData } from "./item-data";
import { mockStrings } from "./mock-strings";
import { useRef, useState } from "react";

function PerseusChrome() {
  const rendererRef = useRef<ServerItemRendererComponent | null>(null);
  const [correct, setCorrect] = useState<boolean | null>(null);

  const apiOptions: APIOptions = {};
  const dependencies = {
    analytics: {
      onAnalyticsEvent: () => new Promise<void>((resolve) => resolve()),
    },
  };

  function checkAnswer() {
    if (!rendererRef.current) return;

    const score = rendererRef.current.scoreInput();

    setCorrect(score.correct);
  }

  function getCorrectnessMessage() {
    if (correct == null) return "No attempt yet";
    if (correct === false) return "Last attempt was incorrect";
    if (correct === true) return "Last attempt was correct";
  }

  return (
    <>
      <PerseusI18nContextProvider locale={"en"} strings={mockStrings}>
        <ServerItemRenderer
          ref={(node) => {
            rendererRef.current = node;
          }}
          item={dropdownItemData}
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
