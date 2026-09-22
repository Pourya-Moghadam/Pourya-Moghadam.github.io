const SectionHeading = ({ title, description, headingLevel = 2, id, className = "" }) => {
  const Heading = `h${headingLevel}`;
  return (
    <div className={`section-heading ${className}`}>
      <Heading id={id}>{title}</Heading>
      {description && <p>{description}</p>}
    </div>
  );
};

export default SectionHeading;
