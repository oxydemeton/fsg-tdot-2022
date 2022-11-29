export interface Station {
    solution?: string,
    pos: {x: number, y:number}
    name: string
    status: number
    desc?: (number) => string
    floor: number
}