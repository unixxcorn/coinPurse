import { Coin } from './Coin'

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

    public get(value: number) {
        const index = this.coins.findIndex((coin) => coin.getValue() == value)
        const coin = this.coins[index]
        if (index >= 0) {
            this.coins.splice(index, 1)
        }
        return coin
    }
}
