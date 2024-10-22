import { useEffect, useState } from "react";
import { Dependencies, Widgets } from "@khanacademy/perseus";

import PerseusChrome from "./PerseusChrome";
import CustomWidget from "./CustomWidget";
import { perseusDependencies } from "./data/dependencies";

Dependencies.setDependencies(perseusDependencies);

Widgets.registerWidget("custom", CustomWidget);

function App() {
  const [mounted, setMounted] = useState<boolean>(false);

  // there seems to be a problem with Perseus
  // having stale state when mounting
  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted, setMounted]);

  return <PerseusChrome />;
}

export default App;
