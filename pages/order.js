import Header from "../components/Header";

export default function Order() {
    return (
        <div className='container'>

            <Header/>
            <h1 className="font-bold">Order</h1>
            <h2 className="text-xl font-bold">메뉴판</h2>
            <dl>
                <dt>에스프레소</dt>
                <dd>
                    2,800원
                    <button className='btn btn-outline-secondary btn-sm ml-2'>선택</button>
                </dd>

                <dt>아메리카노</dt>
                <dd>
                    3,200원
                    <button className='btn btn-outline-secondary btn-sm ml-2'>선택</button>
                </dd>

                <dt>카페라떼</dt>
                <dd>
                    3,800원
                    <button className='btn btn-outline-secondary btn-sm ml-2'>선택</button>
                </dd>
            </dl>

            <hr />

            <h2 className="text-xl font-bold">주문서</h2>
            <p>합계: {'0'}원</p>
            <button className='btn btn-primary btn-lg'>주문하기</button>


        </div>
    )
}