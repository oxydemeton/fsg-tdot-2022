export interface Station {
    solution?: (string) => boolean,
    pos: {x: number, y:number}
    name: string
    status: number
    desc?: (number) => string
    floor: number
}