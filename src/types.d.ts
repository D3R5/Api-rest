import {Weather, Visibility } from './enums'

export interface DiaryEntry {
    id: number
    date: string
    weather: Weather
    visibility: Visibility
    comment: string
}

export type NonSenstiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>