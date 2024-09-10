const BigPhrase = ({ children, as}) => {
  return (
    <section id="bigPhrase" className="d-flex justify-content-center align-items-center h-100">
      <h3 className={as}>
        {children}
      </h3>
    </section>
  );
};

export default BigPhrase;

