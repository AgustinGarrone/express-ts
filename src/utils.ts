import { NewDiaryEntry } from "./utils/types";
import { Visibility, Weather} from "./utils/enums"

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error("Incorrect or missing comment");
  }
  return commentFromRequest
};
const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error("Incorrect or missing date");
  }
  return dateFromRequest
};

const parseWeather = (wheatherFromRequest: any): Weather => {
  if (!isWeather(wheatherFromRequest)) {
    throw new Error("Incorrect weather type");
  }
  return wheatherFromRequest
};

const parseVisibility = (visibilityFromRequest : any) : Visibility => {
    if (!isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect visibility type');
    }
    return visibilityFromRequest
}

const isString = (string: any): boolean => {
  return typeof string === "string" || string instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};
const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param);
};

const isVisibility = (param : any ) : boolean => {
    return Object.values(Visibility).includes(param)
}

//Le pasamos un object de tipo any por param ya que el user puede ingresar cualquier cosa
const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather : parseWeather(object.weather),
    visibility : parseVisibility(object.visibility)
  };
  return newEntry
};

export default toNewDiaryEntry