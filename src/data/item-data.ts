import { PerseusItem } from "@khanacademy/perseus";

const itemData: PerseusItem = {
  question: {
    content:
      "This is an example of a built-in Perseus widget:\n\n[[☃ dropdown 1]]\n\nThis is an example of a custom Perseus widget:\n\n[[☃ custom 1]]\n\nThey have to both be correct for this to count as correct.",
    images: {},
    widgets: {
      "dropdown 1": {
        type: "dropdown",
        alignment: "default",
        static: false,
        graded: true,
        options: {
          static: false,
          placeholder: "pick an answer",
          choices: [
            {
              content: "this is the incorrect answer",
              correct: false,
            },
            {
              content: "this is the correct answer",
              correct: true,
            },
          ],
        },
        version: {
          major: 0,
          minor: 0,
        },
      },
      // @ts-expect-error - PerseusWidgetsMap is too strongly typed for custom widgets
      "custom 1": {
        type: "custom",
        alignment: "default",
        static: false,
        graded: true,
        options: {
          buttons: [
            {
              content: "Incorrect",
              variation: "destructive",
              correct: false,
            },
            {
              content: "Correct",
              correct: true,
            },
          ],
        },
        version: {
          major: 0,
          minor: 0,
        },
      },
    },
  },
  answer: null,
  answerArea: null,
  itemDataVersion: {
    major: 0,
    minor: 1,
  },
  hints: [],
};

export default itemData;
