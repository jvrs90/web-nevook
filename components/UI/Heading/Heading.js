
const Heading = ({ children, className, as, ...other }) => {
  const component = { as: as };

  return (<component.as {...other} className={`${className}`}>
    {children}
  </component.as>);
};


export default Heading
