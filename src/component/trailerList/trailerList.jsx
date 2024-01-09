import "./trailerList.scss"
import Posterlist from "../posterList/posterList";

function Trailerlist() {
    return <>
        <div className="trailerlist">
            <h2>Watch New Movie & TV Trailers</h2>

            <Posterlist title="Family" gener="family"/>
            <Posterlist title="Western Movies" gener="western"/>
            <Posterlist title="Comedy Movies" gener="comedy" />
            <Posterlist title="Horror Movies" gener="horror"/>
            
        </div>
    </>
}

export default Trailerlist;

