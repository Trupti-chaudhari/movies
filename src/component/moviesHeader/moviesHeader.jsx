import "./moviesHeader.scss"
import Diseney from "../../images/Disney+.webp"

function Moviesheader() {
    return <>
        <div className="header">
            <img src={Diseney} alt="" />

            <select>Language
                <option value="Langauge">Gujarati</option>
                <option value="Gujarati">Hindi</option>
                <option value="Gujarati">English</option>
                <option value="Gujarati">Marathi</option>

            </select>
            <div className="tool">
                <button>My Space</button>
                <button>Home</button>
                <button>Search</button>
                <button>TV</button>
                <button>Movies</button>
                <button>Sports</button>
                <button>Categories</button>
                <button>Subscribe</button>

            </div>
        </div>

    </>
}

export default Moviesheader;