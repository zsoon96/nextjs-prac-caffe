import Header from "../components/Header";
import Head from "next/head";

export default function Introduce() {
    return (
        <div className='container'>

            <Head>
                <title>Caffe 소개</title>
            </Head>

            <Header/>
            <h1 className="font-bold">Introduce</h1>
            <p>Caffe 서비스를 이용해서 온라인으로 주문하고 편하게 현장에서 수령하세요!</p>

        </div>
    )
}