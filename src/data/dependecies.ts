import { PerseusDependencies } from "@khanacademy/perseus";

const noop = () => {};

type TeXProps = {
  children: string;
};

function TeX(props: TeXProps) {
  return props.children;
}

function staticUrl(maybeRelativeUrl: string): string;
function staticUrl(maybeRelativeUrl?: undefined | null): undefined | null;
function staticUrl(maybeRelativeUrl?: string | undefined | null) {
  return maybeRelativeUrl;
}

const dependencies: PerseusDependencies = {
  JIPT: {
    useJIPT: false,
  },
  isDevServer: false,
  kaLocale: "en",
  isMobile: false,
  Log: {
    log: noop,
    error: noop,
  },
  staticUrl,
  useVideo: noop,
  InitialRequestUrl: {
    origin: "",
    host: "",
    protocol: "",
  },
  rendererTranslationComponents: {
    addComponent: () => 0,
    removeComponentAtIndex: noop,
  },
  svgImageJiptLabels: {
    addLabel: noop,
  },
  graphieMovablesJiptLabels: {
    addLabel: noop,
  },
  TeX,
};

export default dependencies;
