import { Link } from "react-router-dom";
import ArrowButton from "../ArrowButton";
import "./Buttons.scss"
import { string } from "prop-types";

// Classes for Nav buttons -- button(is default styles) green||yellow||yellow-on-green||transparent (for modify nav button)
export function NavButton({to, text, className}) {
    return (
        <Link to={to} className={className}>
            {text} <ArrowButton/>
        </Link>
    )
}

NavButton.propTypes = {
    to: string.isRequired,
    text: string.isRequired,
    className: string.isRequired,

}

//Classes for Pagination Button -- pag-btn(is default styles) btn-active||btn-nonactive (Classes for useState), need modify this component later
export function PaginationButton({text, className}) {
    return (
        <button type="button" className={className}>{text}</button>
    )
}
PaginationButton.propTypes ={
    text:string.isRequired,
    className:string.isRequired
}

export function FormButton({text}) {
    return (
        <button type="button" className="button form-button">
            {text}
        </button>
    )
}
FormButton.propTypes = {
    text:string.isRequired
}