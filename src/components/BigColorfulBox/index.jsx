const BigImageBox = ({ children, image }) => {
    const divStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
    };
    const secondStyle={
        position: "relative",
        backgroundColor: "rgba(0, 118, 252, 0.5)",
    };

    return (
        <div style={divStyle}>
            <div style={secondStyle}>
                {children}
            </div>
        </div>
    );
};


    

export default BigImageBox;