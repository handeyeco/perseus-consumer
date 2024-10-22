import { PerseusItem } from "@khanacademy/perseus";

export const dropdownItemData: PerseusItem = {
  question: {
    content: "[[☃ dropdown 1]]",
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
