import { Component } from "react";
import Button from "@khanacademy/wonder-blocks-button";
import { WidgetExports } from "@khanacademy/perseus";

type ButtonOptions = {
  content: string;
  correct: boolean;
  variation?: "destructive";
};

type Props = {
  buttons: ReadonlyArray<ButtonOptions>;
};

type State = {
  lastClickedIndex: number;
};

function validator(userInput: number, rubric: Props) {
  if (userInput < 0) {
    return {
      type: "invalid",
      message: null,
    };
  }

  const correct = rubric.buttons[userInput].correct;
  return {
    type: "points",
    earned: correct ? 1 : 0,
    total: 1,
    message: null,
  };
}

class CustomWidget extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { lastClickedIndex: -1 };
  }

  getUserInput() {
    return this.state.lastClickedIndex;
  }

  render() {
    return (
      <>
        {this.props.buttons.map((button, index) => (
          <Button
            color={button.variation}
            kind={
              this.state.lastClickedIndex === index ? "primary" : "secondary"
            }
            onClick={() => this.setState({ lastClickedIndex: index })}
          >
            {button.content}
          </Button>
        ))}
      </>
    );
  }
}

export default {
  name: "custom",
  displayName: "Custom",

  widget: CustomWidget,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validator: validator as any,
} as WidgetExports<typeof CustomWidget>;
