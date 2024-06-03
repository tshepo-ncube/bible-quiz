import { UserDB } from "../database_layer/UserDB";
export default class QuizRetrieval {
  static RetrieveQuizes = async (setList) => {
    const savedList = localStorage.getItem("AllCompleteTheVerseQuestions");
    if (savedList) {
      setList(JSON.parse(savedList));
    }
  };

  static removeQuestionFromLocalStorage = async () => {};

  static addQuestionIDToFirebaseUserCollection = async () => {};

  static DoesLocalStorageHaveEnoughQuizes = () => {
    return true;
  };
}
