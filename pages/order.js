import Header from "../components/Header";
import {useState, useMemo, useEffect} from "react";
import Head from "next/head";
import axios from "axios";

// 화폐단위로 형식 변환
const formatter = Intl.NumberFormat('ko-KR')

// 메뉴 데이터
// const menuData = [
//     {name: '에스프레소', price: 2800},
//     {name: '아메리카노', price: 3200},
//     {name: '카페라떼', price: 3800},
//     {name: '카페모카', price: 4200},
//     {name: '바닐라라떼', price: 4200}
// ]

export default function Order(props) {
    // [ 읽기전용, 쓰기전용 ] = useState(기본값)
    const [selected, setSelected] = useState([])
    // const [menu, setMenu] = useState([])

    // 메뉴 데이터 페칭 (csr)
    // useEffect(() => {
    //    axios.get('/api/menu')
    //        .then((response) => setMenu(response.data))
    //        .catch((error) => console.error(error))
    // },[])

    // 필요할 때만 해당 연산을 기억하여 실행하는 hook
    // 해당 hook을 사용하지 않을 경우, 렌더링 될 때마다 아래의 연산이 불필요하게 실행됨
    const sum = useMemo(() => {
        // 배열의 값 연산 방법 1 - forEach 활용
        let value = 0
        selected.forEach( item => value += item.price)
        return value
        // 배열의 값 연산 방법 2 - reduce 활용
        // selected.reduce( (previousValue, item) ) => previous + item.price, 0 )
    }, [selected])

    const hanleOrder = () => {
        confirm(`주문 합계는 ${formatter.format(sum)}입니다. 주문하시겠습니까?`)
    }

    return (
        <div className='container'>

            <Head>
                <title>Caffe 주문</title>
            </Head>

            <Header/>
            <h1 className="font-bold">Order</h1>
            <h2 className="text-xl font-bold">메뉴판</h2>
            <dl>
                {props.menu.map(item => (
                    <>
                        <dt key={item.name}>{item.name}</dt>
                        <dd>
                            {formatter.format(item.price)}원
                            <button className='btn btn-outline-secondary btn-sm ml-2'
                                    onClick={() => {
                                        if ( selected.includes( item ) ) {
                                            setSelected(selected.filter( i => i !== item))
                                        } else {
                                            setSelected( [...selected, item] )
                                        }
                                    }}>{selected.includes(item) ? '선택 해제' : '선택'}</button>
                        </dd>
                    </>
                ))}
            </dl>

            <hr/>

            <h2 className="text-xl font-bold">주문서</h2>
            <ul className="list-unstyled">
                { selected.map( item => (
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>
            <p>합계: {formatter.format(sum)}원</p>
            <button className='btn btn-primary btn-lg' onClick={hanleOrder}>주문하기</button>


        </div>
    )
}

export async function getServerSideProps(context) {
    const response = await axios.get('http://localhost:3000/api/menu')
    return {
        props : {
            menu: response.data
        }
    }
}