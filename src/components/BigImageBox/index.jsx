const BigImageBox = ({ children, image }) => {
    const divStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        position: "relative",
    };

    return (
        <div style={divStyle} className="pb-3">
                {children}
        </div>
    );
};


    

export default BigImageBox;