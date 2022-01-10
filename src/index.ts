import { Coin } from "./Models/Coin";
import { Purse } from "./Models/CoinPurse";

const jobPurse = new Purse(5)
const canePurse = new Purse(5)

console.table([jobPurse, canePurse])

// จ็อบได้เงินมาเป็นเหรียญ 5 หน่วย, 10 หน่วย, 10 หน่วย และ 1 หน่วย
jobPurse.insert(new Coin(5))
jobPurse.insert(new Coin(10))
jobPurse.insert(new Coin(10))
jobPurse.insert(new Coin(1))

console.log('จ็อบมีเงินรวม', jobPurse.getBalance())

// จ็อบจ่ายค่าต๊งเคน 10 หน่วย
const coinInJobHand = jobPurse.get(10)
console.log(`จ็อบถือ ${coinInJobHand}`)

// จ็อบเอาเงินไปจ่ายค่าต๊งเคน
canePurse.insert(coinInJobHand)

// สรุปผล
console.log('เคนมีเงินรวม', canePurse.getBalance())
console.table([jobPurse, canePurse])