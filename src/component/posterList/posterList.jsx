import { useCallback, useState } from "react";
import Poster from "../poster/poster";
import "./posterList.scss"
import Carousel from "react-simply-carousel";
import useRequest from "../../hooks/useRequest";

function Posterlist(props) {
    const [activeSlide, setActiveSlide] = useState(0);
    const { loading, data } = useRequest(props.gener, []);
    const renderPoster = useCallback((movie) =>
        movie.id != props.bypassid &&
        <Poster key={movie.id}{...movie} gener={props.gener} />
        , [props.bypassid,props.gener]);

    return <div>
        <h3 className="title">{props.title}</h3>

        {loading
            ? <div className="loading">Loading..</div>
            : <Carousel
                activeSlideIndex={activeSlide}
                onRequestChange={setActiveSlide}
                infinite={false}
                containerProps={{
                    className: "list"
                }}
                forwardBtnProps={{
                    children: ">",
                }}
                backwardBtnProps={{
                    children: "<",
                }}
                itemsToShow={5}
                speed={400}
                preventScrollOnSwipe
                swipeTreshold={60}
            >
                {
                    data.map(renderPoster)
                }

            </Carousel>
        }
    </div>

}
export default Posterlist;
