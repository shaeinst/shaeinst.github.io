export default function Btn(parms: { icon: string, link: string, alt: string }) {
    return (
        <a href={parms.link} target="_blank" >
            <img src={parms.icon} alt={parms.alt} />
        </a>
    )
}
