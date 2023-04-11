import "./MailList.css"

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save Time, save money</h1>
        <span className="mailDesc">Sign up and we'llsend the best deals to you</span>
        <div className="mailInputContainer">
            <input type="mail" placeholder="Your Email" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList