import "./Featured.css"

function Featured() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/619676.jpg?k=d6fff74c6fd1f22c63e757d3e0ed79b22ac5986625f3a4abb7564543e8ea62b5&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Singapore</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/688201.jpg?k=586e76aa55aa92d886eaf5837e288d77e15c9b81534bd4c7121d0d020e99064d&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Dhaka</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/620029.jpg?k=2b3fb39970f71c5190270e70dd344cac77a2cd8b17c2f25f1a394d1c6e23ecc1&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Bangkok</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured