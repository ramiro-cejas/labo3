function Item(props) {
    const style = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "10px",
        padding: "10px",
    };

    const styleDescription = {
        marginLeft: "15px",
    };

    return (
        <div className="Item" style={style}>
            <img src={props.avatar} alt="avatar" />
            <div className="descriptionContainer" style={styleDescription}>
                <h1>{props.name}</h1>
                <h2>{props.email}</h2>
            </div>
        </div>
    );
}

export default Item;