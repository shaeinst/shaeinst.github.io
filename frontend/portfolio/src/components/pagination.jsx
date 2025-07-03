import Arrow_icon from '../assets/icons/arrowdown.svg'

export default function Pagination() {
    return (
        <>
            <div className="pagination-container">
                <div className="pagination-dot"></div>
                <div className="pagination-dot"></div>
                <div className="pagination-dot"></div>
                <img src={Arrow_icon} alt="arrow_down_icon" />
            </div>
        </>
    )
}