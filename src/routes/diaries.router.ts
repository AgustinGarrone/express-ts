import express from "express";
import * as diaryServices from "../services/diaryServices";
import toNewDiaryEntry from "../utils";
const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.get("/:id", (req, res) => {
  //Parseamos el diary id del req que viene con string con el operator + o Number()
  const diary = diaryServices.findById(+req.params.id);
  return diary != null ? res.send(diary) : res.sendStatus(404);
});

router.post("/", (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);
    diaryServices.addDiary(newDiaryEntry);

    res.json(newDiaryEntry);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

export default router;
