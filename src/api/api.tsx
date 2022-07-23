import { IQuestion } from "../interfaces/interfaces";

//Основной URL
const apiURL =
  "https://hire-it-f351a-default-rtdb.europe-west1.firebasedatabase.app";

//Запрос всех данных с BD
export const getAllTask = async (): Promise<any> => {
  let res = await fetch(`${apiURL}.json`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${apiURL}, status: ${res.status}`);
  }
  return await res.json();
};

//Запрос конкретной таски по ID
export const getTask = async (indexTask: number = 0): Promise<IQuestion> => {
  let res = await fetch(`${apiURL}/task/js/${indexTask}.json`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${apiURL}, status: ${res.status}`);
  }
  return await res.json();
};

export const getQuestion = async (indexQuestion: number = 0): Promise<IQuestion> => {
  let res = await fetch(`${apiURL}/question/js/${indexQuestion}.json`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${apiURL}, status: ${res.status}`);
  }
  return await res.json();
};


// Examples:
// https://hire-it-f351a-default-rtdb.europe-west1.firebasedatabase.app
// https://hire-it-f351a-default-rtdb.europe-west1.firebasedatabase.app/task/js/0
// https://hire-it-f351a-default-rtdb.europe-west1.firebasedatabase.app/question/js/1
// https://hire-it-f351a-default-rtdb.europe-west1.firebasedatabase.app/question/ts/1
