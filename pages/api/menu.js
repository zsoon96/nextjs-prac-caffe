import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
    // csv 파일 읽기
    const file = fs.readFileSync(path.resolve('./assets/menu.csv'), 'utf-8')
    // 줄바꿈 기준으로 분리
    const rows = file.split('\n')
    const json = []
    rows.forEach( row => {
        const item = row.split(',')
        // name, price 값으로 데이터 담아주기
        json.push({
            name: item[0],
            price: parseInt(item[1], 10)
        })
    })
    res.status(200).json(json)
}
