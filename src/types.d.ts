interface IEmployee {
    _id: string;
    name: string;
    dateOfBirth: string;
    gender: string;
    salary: number;
}

interface IPopuate {
    name: string;
    dateOfBirth: string;
    gender: string;
    salary: string;
}

interface IData {
    error: null | string;
    data: IEmployee[]
}

interface initialState {

}

type payload = {
    type: string,
    payload: {
        data: IEmployee,
        value: boolean
    }
}