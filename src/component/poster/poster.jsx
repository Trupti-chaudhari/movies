import { Link} from "react-router-dom";
import "./poster.scss"

function Poster(props) {
    return <Link to={`/${props.id}?gener=${props.gener}`} className="poster">

        <img src={props.posterURL} alt="h" />
        <h3>{props.title}</h3>
        {/* <div className="zoomposter">
            <img src={props.posterURL} alt="h" />
            <h3>{props.title}</h3>
            <p className="truncate">{props.description}</p>

        </div> */}
    </Link>

}

export default Poster;