import { Comparable } from "../Interfaces/Currency"

export class Coin implements Comparable{
    private value: number

    constructor(value:number){
        this.value = value
    }

    public getValue(){
        return this.value
    }

    public toString(){
        return this.value + ' Coins'
    }

    public equals(other: Coin){
        return this.value == other.value
    }

    public compareTo(other: Coin){
        return this.value - other.value
    }
}