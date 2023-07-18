import React from "react";
const Section = ({ children, title, isNew = false }) => {
  return (
    <section>
      <h2 className="test">{title}</h2>
      {isNew ? (
        <>
          <p className="test">New category</p>
          <p className="test">Lorem ipsum dolor sit amet.</p>
        </>
      ) : (
        <p className="test">Old category</p>
      )}
      {children}
    </section>
  );
};

export default Section;
