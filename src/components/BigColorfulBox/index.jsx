const BigColorfulBox = ({ children, image }) => {
    const divStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
    };
    const secondStyle={
        position: "relative",
        backgroundColor: "rgba(0, 118, 252, 0.6)",
    };

    return (
        <div style={divStyle} className="rounded">
            <div style={secondStyle} className="rounded">
                {children}
            </div>
        </div>
    );
};


    

export default BigColorfulBox;