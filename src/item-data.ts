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
          placeholder: "greater/less than or equal to",
          choices: [
            {
              content: "greater than or equal to",
              correct: false,
            },
            {
              content: "less than or equal to",
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
