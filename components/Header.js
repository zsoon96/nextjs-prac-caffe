import Link from "next/link";

export default function Header() {
    return (
        <div className="flex flex-row py-2 -mx-3 justify-between">
            <div>
                <Link href="/">
                    <div className="btn btn-link" style={{color: 'black'}}>Caffe</div>
                </Link>
            </div>
            <div>
                <Link href="/introduce">
                    <div className="btn btn-link" style={{color: 'black'}}>Introduce</div>
                </Link>
                <Link href="/order">
                    <div className="btn btn-link" style={{color: 'black'}}>Order</div>
                </Link>
                <Link href="/hiring">
                    <div className="btn btn-link" style={{color: 'black'}}>Hiring!</div>
                </Link>
                <Link href="/contact">
                    <div className="btn btn-link" style={{color: 'black'}}>Contact us</div>
                </Link>
            </div>
        </div>
    )
}