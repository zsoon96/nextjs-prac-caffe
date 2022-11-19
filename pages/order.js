import Header from "../components/Header";
import {useState, useMemo} from "react";

// 화폐단위로 형식 변환
const formatter = Intl.NumberFormat('ko-KR')

export default function Order() {
    // [ 읽기전용, 쓰기전용 ] = useState(기본값)
    const [hasEspresso, setEspresso] = useState(false)
    const [hasAmericano, setAmericano] = useState(false)
    const [hasLatte, setLatte] = useState(false)

    // 필요할 때만 해당 연산을 기억하여 실행하는 hook
    // 해당 hook을 사용하지 않을 경우, 렌더링 될 때마다 아래의 연산이 불필요하게 실행됨
    const sum = useMemo( () => {
        let value = 0
        value += hasEspresso ? 2800 : 0
        value += hasAmericano ? 3200 : 0
        value += hasLatte ? 3800 : 0
        return value
    },[hasEspresso, hasAmericano, hasLatte])

    const handleEspresso = () => {
        setEspresso(!hasEspresso)
    }

    const handleAmericano = () => {
        setAmericano(!hasAmericano)
    }

    const handleLatte = () => {
        setLatte(!hasLatte)
    }

    const hanleOrder = () => {
        confirm(`주문 합계는 ${formatter.format(sum)}입니다. 주문하시겠습니까?`)
    }

    return (
        <div className='container'>

            <Header/>
            <h1 className="font-bold">Order</h1>
            <h2 className="text-xl font-bold">메뉴판</h2>
            <dl>
                <dt>에스프레소</dt>
                <dd>
                    2,800원
                    <button className='btn btn-outline-secondary btn-sm ml-2' onClick={handleEspresso}>{ hasEspresso ? '선택 해제' : '선택' }</button>
                </dd>

                <dt>아메리카노</dt>
                <dd>
                    3,200원
                    <button className='btn btn-outline-secondary btn-sm ml-2' onClick={handleAmericano}>{ hasAmericano ? '선택 해제' : '선택' }</button>
                </dd>

                <dt>카페라떼</dt>
                <dd>
                    3,800원
                    <button className='btn btn-outline-secondary btn-sm ml-2' onClick={handleLatte}>{ hasLatte ? '선택 해제' : '선택' }</button>
                </dd>
            </dl>

            <hr />

            <h2 className="text-xl font-bold">주문서</h2>
            <ul className="list-unstyled">
                { hasEspresso && <li>에스프레소</li>}
                { hasAmericano && <li>아메리카노</li>}
                { hasLatte && <li>카페라떼</li>}
            </ul>
            <p>합계: { formatter.format(sum) }원</p>
            <button className='btn btn-primary btn-lg' onClick={hanleOrder}>주문하기</button>


        </div>
    )
}