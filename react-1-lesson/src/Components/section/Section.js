import React from "react";
const Section = ({ children, title, isNew = false }) => {
  return (
    <section>
      <h2>{title}</h2>
      {isNew ? (
        <>
          <p>New category</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </>
      ) : (
        <p>Old category</p>
      )}
      {children}
    </section>
  );
};

export default Section;
