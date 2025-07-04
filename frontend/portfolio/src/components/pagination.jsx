import React, { useEffect, useState } from 'react';
import Arrow_icon from '../assets/icons/arrowdown.svg'

export default function Pagination() {

    const [active, setActive] = useState('top-screen');

    useEffect(() => {
        setActive('top-section');
      }, []);

    const scrollTo = (id) => {
        setActive(id);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="pagination-container">
                <div
                    className={`pagination-dot ${active === 'top-section' ? 'active' : ''}`}
                    onClick={() => scrollTo('top-section')}>
                </div>
                <div
                    className={`pagination-dot ${active === 'middle-section' ? 'active' : ''}`}
                    onClick={() => scrollTo('middle-section')}>
                </div>
                <div
                    className={`pagination-dot ${active === 'bottom-section' ? 'active' : ''}`}
                    onClick={() => scrollTo('bottom-section')}>
                </div>
                <img
                    src={Arrow_icon}
                    alt="arrow_down_icon"
                    onClick={() => scrollTo('bottom-section')}
                />
            </div>
        </>
    )
}