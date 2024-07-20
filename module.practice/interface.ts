export interface EntryTest {
    isPassed: boolean,
    obtainedMark: number,
    totalMark: number
}

export interface Student {
    id: number,
    name: string,
    phoneNumber: number,
    isOnsite: boolean,
    classDay: string,
    email: string
    entryTest: EntryTest
}