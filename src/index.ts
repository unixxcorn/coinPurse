import { Database } from "./database";
import { Coin } from "./Models/Coin";
import { Purse } from "./Models/Purse";

// สมมุติว่ามีฐานข้อมูล
Database['job'] = new Purse(5)
Database['cane'] = new Purse(5)

// เริ่มโปรแกรม
const jobPurse = Purse.find('job')
const canePurse = Purse.find('cane')

// จ็อบได้เงินมาเป็นเหรียญ 5 หน่วย, 10 หน่วย, 10 หน่วย และ 1 หน่วย
jobPurse.insert(new Coin(5))
jobPurse.insert(new Coin(10))
jobPurse.insert(new Coin(1))
jobPurse.insert(new Coin(10))
jobPurse.printCoinList()
console.log(jobPurse)

// จ็อบกลัวตังค์หาย จ็อบเลยเรียงเหรียญ
jobPurse.sortCoins()
jobPurse.printCoinList()


console.log('จ็อบมีเงินรวม', jobPurse.getBalance())

// จ็อบจ่ายค่าต๊งเคน 10 หน่วย
const coinInJobHand = jobPurse.getCoin(10)
console.log(`จ็อบถือ ${coinInJobHand}`)

// จ็อบเอาเงินไปจ่ายค่าต๊งเคน
canePurse.insert(coinInJobHand)

// สรุปผล
console.log('เคนมีเงินรวม', canePurse.getBalance())
console.table([jobPurse, canePurse])