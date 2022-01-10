import { Database } from '../database'
import { Coin } from './Coin'

/**
 * เป๋าตังใส่เหรียญ
 * ตอนสร้างให้ระบุจำนวนเหรียญที่ใส่ได้
 * ถ้าไม่ใส่จะเป็น 50
 */
export class Purse {
    private coins: Array<Coin> = []
    private capacity: number

    constructor(capacity: number = 50) {
        this.capacity = capacity
    }

    public count(): number {
        return this.coins.length
    }

    public getBalance(): number {
        let balance = 0
        for (const coin of this.coins) {
            balance += coin.getValue()
        }
        return balance
    }

    public getCapacity(): number {
        return this.capacity
    }

    public isFull(): boolean {
        return this.capacity <= this.coins.length
    }

    public insert(coin: Coin): boolean {
        if (this.isFull()) throw new Error('PurseIsFull')
        this.coins.push(coin)
        return true
    }

    public sortCoins(desc:boolean = false): void {
        this.coins.sort((a, b) => {
            if(desc) return b.compareTo(a)
            else return a.compareTo(b)
        })
    }

    public getCoin(value: number): Coin {
        const index = this.coins.findIndex((coin) => coin.getValue() == value)
        const coin = this.coins[index]
        if (index >= 0) {
            this.coins.splice(index, 1)
        }
        return coin
    }

    public printCoinList(){
        console.log(this.coins.map(coin => coin.getValue()))
    }

    /**
     * ดึงข้อมูลเป๋าตังจากฐานข้อมูล
     * โดยระบุชื่อเจ้าของ
     * @var owner ชื่อเจ้าของ
     */
    public static find(owner: string): Purse{
        const purse = Database[owner]
        if(!purse) throw new Error("PurseNotFound");
        return purse
    }
}
