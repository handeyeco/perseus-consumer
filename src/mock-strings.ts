import { PerseusStrings } from "@khanacademy/perseus/strings";

/**
 * Mock strings for the Perseus package, to be used for tests and Storybook.
 */
export const mockStrings: PerseusStrings = {
  closeKeypad: "close math keypad",
  openKeypad: "open math keypad",
  mathInputBox: "Math input box",
  removeHighlight: "Remove highlight",
  addHighlight: "Add highlight",
  hintPos: ({ pos }) => `Hint #${pos}`,
  errorRendering: ({ error }) => `Error rendering: ${error}`,
  APPROXIMATED_PI_ERROR:
    "Your answer is close, but you may " +
    "have approximated pi. Enter your " +
    "answer as a multiple of pi, like " +
    "<code>12\\ \\text{pi}</code> or " +
    "<code>2/3\\ \\text{pi}</code>",
  EXTRA_SYMBOLS_ERROR:
    "We could not understand your " +
    "answer. Please check your answer for extra " +
    "text or symbols.",
  NEEDS_TO_BE_SIMPLFIED_ERROR:
    "Your answer is almost correct, " + "but it needs to be simplified.",
  MISSING_PERCENT_ERROR:
    "Your answer is almost correct, " +
    "but it is missing a " +
    "<code>\\%</code> at the end.",
  MULTIPLICATION_SIGN_ERROR:
    "I'm a computer. I only understand " +
    "multiplication if you use an asterisk " +
    "(*) as the multiplication sign.",
  WRONG_CASE_ERROR:
    "Your answer includes use of a variable with the wrong case.",
  WRONG_LETTER_ERROR: "Your answer includes a wrong variable letter.",
  invalidSelection: "Make sure you select something for every row.",
  ERROR_TITLE: "Oops!",
  ERROR_MESSAGE: "Sorry, I don't understand that!",
  hints: "Hints",
  getAnotherHint: "Get another hint",
  deprecatedStandin:
    "Sorry, this part of the question is no longer available. 😅 Don't worry, you won't be graded on this part. Keep going!",
  keepTrying: "Keep trying",
  tryAgain: "Try again",
  check: "Check",
  correctExcited: "Correct!",
  nextQuestion: "Next question",
  skipToTitle: ({ title }) => `Skip to ${title}`,
  current: "Current",
  correct: "Correct",
  correctSelected: "Correct (selected)",
  correctCrossedOut: "Correct (but you crossed it out)",
  incorrect: "Incorrect",
  incorrectSelected: "Incorrect (selected)",
  hideExplanation: "Hide explanation",
  explain: "Explain",
  INVALID_MESSAGE_PREFIX: "We couldn't grade your answer.",
  DEFAULT_INVALID_MESSAGE_1: "It looks like you left something blank or ",
  DEFAULT_INVALID_MESSAGE_2: "entered in an invalid answer.",
  integerExample: "an integer, like $6$",
  properExample: "a *proper* fraction, like $1/2$ or $6/10$",
  simplifiedProperExample: "a *simplified proper* fraction, like $3/5$",
  improperExample: "an *improper* fraction, like $10/7$ or $14/8$",
  simplifiedImproperExample: "a *simplified improper* fraction, like $7/4$",
  mixedExample: "a mixed number, like $1\\ 3/4$",
  decimalExample: "an *exact* decimal, like $0.75$",
  percentExample: "a percent, like $12.34\\%$",
  piExample: "a multiple of pi, like $12\\ \\text{pi}$ or $2/3\\ \\text{pi}$",
  yourAnswer: "**Your answer should be** ",
  yourAnswerLabel: "Your answer:",
  addPoints: "Click to add points",
  addVertices: "Click to add vertices",
  tapMultiple: "Tap each dot on the image to select all answers that apply.",
  tapSingle: "Tap each dot on the image to select an answer.",
  clickMultiple:
    "Click each dot on the image to select all answers that apply.",
  clickSingle: "Click each dot on the image to select an answer.",
  choices: "Choices:",
  answers: ({ num }) => (num === 1 ? `${num} answer` : `${num} answers`),
  hideAnswersToggleLabel: "Hide answer choices",
  moves: ({ num }) => (num === 1 ? `Moves: ${num}` : `Moves: ${num}`),
  clickTiles: "Click on the tiles to change the lights.",
  turnOffLights: "You must turn on all of the lights to continue.",
  fillAllCells: "Make sure you fill in all cells in the matrix.",
  molecularDrawing: ({ content }) =>
    `A molecular structure drawing. SMILES notation: ${content}`,
  switchDirection: "Switch direction",
  circleOpen: "Make circle open",
  circleFilled: "Make circle filled",
  numDivisions: "Number of divisions:",
  divisions: ({ divRangeString }) =>
    `Please make sure the number of divisions is in the range ${divRangeString}.`,
  lineRange: ({ lineRange }: { lineRange: string }) => `lines ${lineRange}`,
  lineNumber: ({ lineNumber }: { lineNumber: string }) => `line ${lineNumber}`,
  symbolPassage: ({ questionSymbol, questionNumber }) =>
    `The symbol ${questionSymbol} indicates that question ${questionNumber} references this portion of the passage.`,
  symbolQuestion: ({ sentenceSymbol }) =>
    ` The symbol ${sentenceSymbol} indicates that the following sentence is referenced in a question.`,
  lineLabel: "Line",
  beginningPassage: "Beginning of reading passage.",
  beginningFootnotes: "Beginning of reading passage footnotes.",
  endPassage: "End of reading passage.",
  questionMarker: ({ number }) => `[Marker for question ${number}]`,
  circleMarker: ({ number }) => `[Circle marker ${number}]`,
  sentenceMarker: ({ number }) => `[Sentence ${number}]`,
  dragHandles: "Drag handles to make graph",
  tapAddPoints: "Tap to add points",
  false: "False",
  true: "True",
  no: "No",
  yes: "Yes",
  chooseCorrectNum: "Please choose the correct number of answers.",
  notNoneOfTheAbove:
    "'None of the above' may not be selected when other answers are selected.",
  noneOfTheAbove: "None of the above",
  chooseNumAnswers: ({ numCorrect }) => `Choose ${numCorrect} answers:`,
  chooseAllAnswers: "Choose all answers that apply:",
  chooseOneAnswer: "Choose 1 answer:",
  choiceCheckedCorrect: ({ letter }) => `(Choice ${letter}, Checked, Correct)`,
  choiceCrossedOutCorrect: ({ letter }) =>
    `(Choice ${letter}, Crossed out, Correct)`,
  choiceCorrect: ({ letter }) => `(Choice ${letter}, Correct)`,
  choiceCheckedIncorrect: ({ letter }) =>
    `(Choice ${letter}, Checked, Incorrect)`,
  choiceCrossedOutIncorrect: ({ letter }) =>
    `(Choice ${letter}, Crossed out, Incorrect)`,
  choiceIncorrect: ({ letter }) => `(Choice ${letter}, Incorrect)`,
  choiceChecked: ({ letter }) => `(Choice ${letter}, Checked)`,
  choiceCrossedOut: ({ letter }) => `(Choice ${letter}, Crossed out)`,
  choice: ({ letter }) => `(Choice ${letter})`,
  crossOut: "Cross out",
  crossOutOption: "Cross out option",
  crossOutChoice: ({ letter }) => `Cross out Choice ${letter}`,
  bringBack: "Bring back",
  openMenuForChoice: ({ letter }) => `Open menu for Choice ${letter}`,
  letters: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
  rightArrow: "Reaction arrow pointing to the right.",
  dontUnderstandUnits: "I couldn't understand those units.",
  checkSigFigs: "Check your significant figures.",
  answerNumericallyIncorrect: "That answer is numerically incorrect.",
  checkUnits: "Check your units.",
  dontUnderstand: "I don't understand that",
  loading: "Loading...",
  videoTranscript: "See video transcript",
  somethingWrong: "Something went wrong.",
  videoWrapper: "Khan Academy video wrapper",
  mathInputTitle: "mathematics keyboard",
  mathInputDescription:
    "Use keyboard/mouse to interact with math-based input fields",
  sin: "sin",
  cos: "cos",
  tan: "tan",
  simulationLoadFail: "Sorry, this simulation cannot load.",
  simulationLocaleWarning:
    "Sorry, this simulation isn't available in your language.",
  addPoint: "Add Point",
  removePoint: "Remove Point",
  graphKeyboardPrompt: "Press Shift + Enter to interact with the graph",
};
