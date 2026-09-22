import PageContainer from "./PageContainer";

const Section = ({ children, id, ariaLabelledby, className = "", containerClassName = "", style }) => (
  <section id={id} aria-labelledby={ariaLabelledby} className={`content-section ${className}`} style={style}>
    <PageContainer className={containerClassName}>{children}</PageContainer>
  </section>
);

export default Section;
