const BigWhiteBox = ({ children, image }) => {
    const divStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
    };
    const secondStyle={
        position: "relative",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
    };

    return (
        <div style={divStyle} className="rounded-5 shadow-lg">
            <div style={secondStyle} className="rounded-5">
                {children}
            </div>
        </div>
    );
};


    

export default BigWhiteBox;