import Header from "../components/Header";

export default function Contact() {
    return (
        <div className='container'>

            <Header/>
            <h1 className='font-bold'>Contact us</h1>
            <form>
                <div className="mb-3 mt-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">이메일</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                           placeholder="이메일을 입력해주세요." />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">제목</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                           placeholder="제목을 입력해주세요." />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">내용</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="내용을 입력해주세요."></textarea>
                </div>
                <button className='btn btn-primary btn-lg'>문의하기</button>
            </form>

        </div>
    )
}