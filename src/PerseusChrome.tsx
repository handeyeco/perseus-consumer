import {
  ServerItemRenderer,
  PerseusI18nContextProvider,
} from "@khanacademy/perseus";
import type { APIOptions } from "@khanacademy/perseus";
import { dropdownItemData } from "./item-data";
import { mockStrings } from "./mock-strings";

function PerseusChrome() {
  const apiOptions: APIOptions = {};
  const dependencies = {
    analytics: {
      onAnalyticsEvent: () => new Promise<void>((resolve) => resolve()),
    },
  };
  return (
    <PerseusI18nContextProvider locale={"en"} strings={mockStrings}>
      <ServerItemRenderer
        item={dropdownItemData}
        apiOptions={apiOptions}
        dependencies={dependencies}
      />
    </PerseusI18nContextProvider>
  );
}

export default PerseusChrome;
