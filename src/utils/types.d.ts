//Types.d because D is for DEFINITION. Here we defined our data objects
export interface DiaryEntry {
    id: number , 
    date: string ,
    weather : Weather , 
    visibility : Visibility , 
    comment: string
}

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry , 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry , 'id'>