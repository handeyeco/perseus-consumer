import { useRef, useState } from "react";
import {
  ServerItemRenderer,
  PerseusI18nContextProvider,
  ServerItemRendererComponent,
} from "@khanacademy/perseus";
import Button from "@khanacademy/wonder-blocks-button";

import { mockStrings } from "./data/mock-strings";
import itemData from "./data/item-data";
import { sirDependencies } from "./data/dependencies";

type CheckState = "no attempt" | "invalid" | "incorrect" | "correct";

function PerseusChrome() {
  const rendererRef = useRef<ServerItemRendererComponent | null>(null);
  const [checkState, setCheckState] = useState<CheckState>("no attempt");

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
          dependencies={sirDependencies}
        />
      </PerseusI18nContextProvider>
      <p>{getCorrectnessMessage()}</p>
      <Button onClick={checkAnswer}>Check</Button>
    </>
  );
}

export default PerseusChrome;
