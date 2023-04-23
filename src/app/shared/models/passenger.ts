export interface Ipassanger {
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate: number | null;
    children: Array<Ichild> | null;
}


export interface Ichild {
    name: string;
    age: number;
}