function Image(props) {
    return(
        <>
            <img src={props.src} height={props.height} width={props.width} />
        </>
    )
}

export default Image