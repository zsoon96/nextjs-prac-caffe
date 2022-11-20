import Header from "../components/Header";
import Head from "next/head";

export default function Hiring() {
    return (
        <div className='container'>

            <Head>
                <title>Caffe 채용</title>
            </Head>

            <Header/>
            <h1 className='font-bold'>Hiring!</h1>
            <p>Caffe에서는 언제나 새로운 직원을 채용하고 있습니다!</p>

        </div>
    )
}