function Card(props){
    let tittle=props.tittle;
    let About=props.about;
    let src=props.src;
    return(<div className={"Card"} >
        <img src={src} className={"card-img"}/>
        <div class={"tittle"}>{tittle}</div>
        <p class={"about"}>{About}</p>
        <div className={"footer-card"}><button className={"Explor"}>{"Explor"}</button></div>
    </div>);
}
export default Card;