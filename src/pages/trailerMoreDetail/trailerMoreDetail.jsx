import "./trailerMoreDetail.scss"
import Posterlist from "../../component/posterList/posterList";
import { useParams, useSearchParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import Poster from "../../component/poster/poster";
import { useCallback } from "react";

function Trailermoredetail() {
    const { movieId } = useParams();
    const [searchParams] = useSearchParams();
    const gener = searchParams.get("gener");
    const { loading, data } = useRequest(`${gener}/${movieId}`);
    
    if (loading) {
        return <div>Loading...</div>
    }
    console.log(data);

    return <>
        <div className="detail" style={{ backgroundImage: `url(${data.posterURL})` }}>
            <div className="text">
                <h1>{data.title}</h1>
                <p>Trapped in a hostage crisis inside a hospital, Vivaan will move mountains for his wife, Anshika. But will they survive this race against time?</p>
                <p>{gener}</p>
                <div className="lang">
                    <button>Hindi <span>Original</span></button>
                    <button>Telugu</button>
                    <button>English</button>
                </div>

                <button className="watch">Watch for Begining</button>
                <div className="btn">
                    <button className="resume"> Resume</button>
                    <button className="watchlist"> + </button>
                </div>
            </div>
        </div>
        <div className="movieslist">
            <Posterlist title="More Likes This" gener={gener} bypassid={movieId} />
         </div>

    </>
}
 
export default Trailermoredetail;