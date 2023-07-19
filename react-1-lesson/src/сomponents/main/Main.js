import React from "react";
import ireland from "../../images/main/main.jpg";
import toys from "../../data/toys/toys.json";
import tools from "../../data/tools/tools.json";
import ProductList from "./productList/ProductList";
import Section from "../materials/Section";

const Main = () => {
  return (
    <main>
      <div>
        <Section title="Toys" isNew={true}>
          <ProductList arr={toys} />
        </Section>
      </div>
      <div>
        <Section title="Tools">
          <ProductList arr={tools} />
        </Section>
      </div>

      <p className="test">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum eveniet
        neque consequuntur distinctio tempora expedita atque, eum sint ullam
        quam. Eos repellendus nemo incidunt iste. Sapiente a aut voluptates
        exercitationem voluptate perferendis aliquid accusantium quibusdam vitae
        animi natus repudiandae velit illo numquam at tempore tenetur doloribus
        recusandae quaerat, repellendus officia voluptas incidunt? Nesciunt
        magni ullam tempore temporibus! Velit dolores dolorum quasi fuga
        voluptates cupiditate beatae doloremque, facere eum, officiis dolorem
        repudiandae quas atque inventore nostrum unde ipsam et obcaecati aliquid
        totam aliquam accusamus. Adipisci tenetur similique numquam atque dicta
        eveniet, cum mollitia recusandae, nulla qui omnis sunt labore. Deserunt,
        a.
      </p>
      <img src={ireland} alt="Hello Ireland"></img>
    </main>
  );
};

export default Main;
