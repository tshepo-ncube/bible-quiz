import { UserDB } from "../database_layer/UserDB";
export default class QuizRetrieval {
  static RetreieveQuizesToLocal = async () => {
    try {
      // Retrieve the list of questions done by the user
      const userQuestionsDone = await UserDB.getQuestionsDone();

      // Retrieve the list of all quiz questions excluding the user's done questions
      const allQuizQuestions =
        await QuizRetrievalDB.getQuestionsFromExcludedUserQuestionsArray(
          userQuestionsDone
        );

      // Convert the list of objects to a JSON string
      const quizQuestionsJSON = JSON.stringify(allQuizQuestions);

      // Save the JSON string to localStorage
      localStorage.setItem("QuizQuestions", quizQuestionsJSON);

      console.log("Quiz questions saved to localStorage successfully.");
    } catch (error) {
      console.error("Error saving quiz questions to localStorage:", error);
    }
  };

  static removeQuestionFromLocalStorage = async () => {};

  static addQuestionIDToFirebaseUserCollection = async () => {};

  static DoesLocalStorageHaveEnoughQuizes = () => {
    return true;
  };


}
