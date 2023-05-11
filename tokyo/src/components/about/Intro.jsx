import React from "react";

const Intro = () => {
  const introContent = {
    image: "assets/img/slider/1.jpg",
    name: "Tom Box",
    designation: "Fabricantes de cajas en Méxixo",
    text: (
      <>
        <p>
        Somos una empresa mexicana con más de 15 años de experiencia en la fabricación de cajas. 
        Nos enorgullece ofrecer productos de alta calidad y durabilidad, adaptados a las necesidades específicas de cada uno de nuestros clientes.
        </p>
        <p>
        Nos enfocamos en ofrecer un servicio excepcional, trabajando de manera cercana y colaborativa con nuestros clientes para asegurarnos de que todas sus necesidades sean satisfechas.
        Estamos comprometidos con la satisfacción de nuestros clientes y nuestra amplia experiencia nos permite ofrecer soluciones confiables y eficientes.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
