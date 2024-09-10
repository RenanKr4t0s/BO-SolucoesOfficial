const BigImageBox = ({ children, image }) => {
    const divStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        position: "relative",
    };
    const secondStyle={
        width: "100vw",
        height: "100vh",
        position: "relative",
        backgroundColor: "rgba(255, 255, 255, 0)",
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