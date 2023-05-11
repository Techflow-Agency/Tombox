import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="container">
        <div className="tokyo_tm_news">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Blog</span>
                <h3>Temas de interés</h3>
              </div>
            </div>
          </div>
          {/* END TITLE */}

          <ul>
            <li data-aos="fade-right" data-aos-duration="1200">
              <div className="list_inner">
                <div className="image" onClick={toggleModalOne}>
                  <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(assets/img/news/1.jpg)",
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}
                <div className="details">
                  <div className="extra">
                    <p className="date">
                      By <a href="#">Tom Box</a>
                      <span>05 Mayo 2023</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={toggleModalOne}>
                  Industria de las cajas de cartón
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={toggleModalOne}>
                      <span>Leer más</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
                {/* END DETAILS */}

                {/* START MODAL */}
                <Modal
                  isOpen={isOpen}
                  onRequestClose={toggleModalOne}
                  contentLabel="My dialog"
                  className="mymodal"
                  overlayClassName="myoverlay"
                  closeTimeoutMS={500}
                >
                  <div className="tokyo_tm_modalbox_news">
                    <button className="close-modal" onClick={toggleModalOne}>
                      <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* END CLOSE ICON */}
                    <div className="box_inner">
                      <div className="description_wrap scrollable">
                        <div className="image">
                          <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(assets/img/news/1.jpg)",
                            }}
                          ></div>
                        </div>
                        {/* END IMAGE */}
                        <div className="details">
                          <div className="extra">
                            <p className="date">
                            By <a href="#">Tom Box</a>
                                <span>05 Mayo 2023</span>
                            </p>
                          </div>
                          <h3 className="title">
                          Industria de las cajas de cartón
                          </h3>
                        </div>
                        {/* END DETAILS */}
                        <div className="main_content ">
                          <div className="descriptions">
                            <p className="bigger">
                            La industria de las cajas de cartón ha sido un pilar importante de la economía mundial durante décadas. Las cajas de cartón se utilizan en una variedad de industrias, desde la alimentaria hasta la farmacéutica, y son esenciales para el transporte y almacenamiento de productos. La demanda de cajas de cartón sigue creciendo a medida que más empresas se dan cuenta de su utilidad y de los beneficios que aportan. Las fábricas de cajas de cartón están en constante evolución para mejorar su tecnología y ofrecer productos de alta calidad que satisfagan las necesidades de sus clientes.
                            </p>
                            <p>
                            Las cajas de cartón ofrecen numerosos beneficios en comparación con otros materiales de embalaje, como el plástico y el vidrio. En primer lugar, son mucho más económicas, lo que las hace una opción más asequible para empresas de todos los tamaños. Además, las cajas de cartón son mucho más sostenibles que otros materiales de embalaje, ya que se pueden reciclar fácilmente y se descomponen mucho más rápido que el plástico y el vidrio.
                            </p>
                            <p>
                            La demanda de cajas de cartón sigue creciendo a medida que más empresas se dan cuenta de los beneficios que aportan. Las cajas de cartón son cada vez más populares debido a su versatilidad y durabilidad, y son ideales para transportar productos de todos los tamaños y formas. Desde alimentos y bebidas hasta productos farmacéuticos y electrónicos, las cajas de cartón son una solución de embalaje rentable y eficaz que puede adaptarse a una amplia variedad de necesidades.
                            </p>
                            <div className="quotebox">
                              <div className="icon">
                                <img
                                  className="svg"
                                  src="assets/img/svg/quote.svg"
                                  alt="tumb"
                                />
                              </div>
                              <p>
                              Las fábricas de cajas de cartón también están mejorando sus procesos de producción y trabajando para reducir el impacto ambiental de su actividad.
                              </p>
                            </div>
                            {/* END QUOTEBOX */}

                          </div>
                          {/* END DESCRIPTION */}
                          <div className="news_share">
                            <span>Share:</span>
                            <Social />
                            {/* END SOCIAL SHARE */}
                          </div>
                          {/* END NEWS SHARE */}
                        </div>
                      </div>
                    </div>
                    {/* END BOX INNER */}
                  </div>
                  {/* END MODALBOX NEWS */}
                </Modal>
                {/* END MODAL */}
              </div>
            </li>
            {/* END SINGLE BLOG */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="list_inner">
                <div className="image" onClick={toggleModalTwo}>
                  <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(assets/img/news/2.jpg)",
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                    By <a href="#">Tom Box</a>
                      <span>05 Mayo 2023</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={toggleModalTwo}>
                  Cajas de cartón decoradas
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={toggleModalTwo}>
                      <span>Leer más
                      </span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>

                <Modal
                  isOpen={isOpen2}
                  onRequestClose={toggleModalTwo}
                  contentLabel="My dialog"
                  className="mymodal"
                  overlayClassName="myoverlay"
                  closeTimeoutMS={500}
                >
                  <div className="tokyo_tm_modalbox_news">
                    <button className="close-modal" onClick={toggleModalTwo}>
                      <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* END CLOSE MODAL */}
                    <div className="box_inner">
                      <div className="description_wrap scrollable">
                        <div className="image">
                          <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(assets/img/news/2.jpg)",
                            }}
                          ></div>
                        </div>
                        {/* END IMAGE */}
                        <div className="details">
                          <div className="extra">
                            <p className="date">
                            By <a href="#">Tom Box</a>
                      <span>05 Mayo 2023</span>
                            </p>
                          </div>
                          <h3 className="title">
                          Cajas de cartón decoradas
                          </h3>
                        </div>
                        {/* END DETAILS */}
                        <div className="main_content ">
                          <div className="descriptions">
                            <p className="bigger">
                            Las cajas de cartón decoradas son una excelente opción para aquellos que buscan un toque extra de estilo y personalidad en sus cajas. Estas cajas pueden ser personalizadas con patrones, diseños y colores únicos para que se ajusten perfectamente a cualquier evento o necesidad. Las cajas de cartón decoradas pueden ser utilizadas en una variedad de ocasiones, desde bodas y cumpleaños hasta ferias y eventos corporativos. Además, estas cajas son una opción más ecológica y económica que las cajas de regalo tradicionales.
                            </p>
                            <p>
                            Las cajas de cartón decoradas son una excelente opción para aquellos que buscan un toque extra de estilo y personalidad en sus cajas. Estas cajas pueden ser personalizadas con patrones, diseños y colores únicos para que se ajusten perfectamente a cualquier evento o necesidad. Las cajas de cartón decoradas pueden ser utilizadas en una variedad de ocasiones, desde bodas y cumpleaños hasta ferias y eventos corporativos. Además, estas cajas son una opción más ecológica y económica que las cajas de regalo tradicionales.
                            </p>
        
                            <div className="quotebox">
                              <div className="icon">
                                <img
                                  className="svg"
                                  src="assets/img/svg/quote.svg"
                                  alt="quote"
                                />
                              </div>
                              <p>
                              Las cajas de cartón decoradas pueden ser utilizadas en una variedad de ocasiones, desde bodas y cumpleaños hasta ferias y eventos corporativos. Además, estas cajas son una opción más ecológica y económica que las cajas de regalo tradicionales.
                              </p>
                            </div>
                            {/* END QUOTEBOX */}

        
                          </div>
                          <div className="news_share">
                            <span>Share:</span>
                            <Social />
                            {/* END SOCIAL */}
                          </div>
                          {/* END NEWS SHARE */}
                        </div>
                        {/* END MAIN CONTENT */}
                      </div>
                    </div>
                  </div>
                </Modal>
                {/* END MODAL */}
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="list_inner">
                <div className="image" onClick={toggleModalThree}>
                  <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(assets/img/news/3.jpg)",
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                    By <a href="#">Tom Box</a>
                      <span>05 Mayo 2023</span>
                    </p>
                  </div>

                  <h3 className="title" onClick={toggleModalThree}>
                  Cajas de cartón para regalo
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={toggleModalThree}>
                      <span>Leer más</span>
                    </a>
                  </div>
                </div>
                {/* END DETAILS */}

                {/* START MODAL */}
                <Modal
                  isOpen={isOpen3}
                  onRequestClose={toggleModalThree}
                  contentLabel="My dialog"
                  className="mymodal"
                  overlayClassName="myoverlay"
                  closeTimeoutMS={500}
                >
                  <div className="tokyo_tm_modalbox_news">
                    <button className="close-modal" onClick={toggleModalThree}>
                      <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    <div className="box_inner">
                      <div className="description_wrap scrollable">
                        <div className="image">
                          <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(assets/img/news/3.jpg)",
                            }}
                          ></div>
                        </div>
                        <div className="details">
                          <div className="extra">
                            <p className="date">
                            By <a href="#">Tom Box</a>
                            <span>05 Mayo 2023</span>
                            </p>
                          </div>
                          <h3 className="title">
                          Cajas de cartón para regalo
                          </h3>
                        </div>
                        <div className="main_content ">
                          <div className="descriptions">
                            <p className="bigger">
                            Las cajas de cartón para regalo son una excelente opción para aquellos que desean presentar sus regalos de una manera elegante y atractiva. Estas cajas vienen en una variedad de tamaños y diseños, desde las clásicas cajas rectangulares hasta cajas con formas creativas y colores brillantes. Las cajas de cartón para regalo pueden personalizarse con impresiones personalizadas y otros detalles para hacer que el regalo sea aún más especial. Además, estas cajas son resistentes y duraderas, lo que garantiza que el regalo llegue en perfectas condiciones.
                            </p>
                            <p>
                            Las cajas de cartón para regalo son una excelente opción para aquellos que desean presentar sus regalos de una manera elegante y atractiva. Estas cajas vienen en una variedad de tamaños y diseños, desde las clásicas cajas rectangulares hasta cajas con formas creativas y colores brillantes. Las cajas de cartón para regalo pueden personalizarse con impresiones personalizadas y otros detalles para hacer que el regalo sea aún más especial. Además, estas cajas son resistentes y duraderas, lo que garantiza que el regalo llegue en perfectas condiciones.
                            </p>

                            <div className="quotebox">
                              <div className="icon">
                                <img
                                  className="svg"
                                  src="assets/img/svg/quote.svg"
                                  alt="quore"
                                />
                              </div>
                              <p>
                              Las cajas de cartón para regalo pueden personalizarse con impresiones personalizadas y otros detalles para hacer que el regalo sea aún más especial. Además, estas cajas son resistentes y duraderas, lo que garantiza que el regalo llegue en perfectas condiciones.
                              </p>
                            </div>
                            {/* END QUOTEBOX */}

                          </div>
                          <div className="news_share">
                            <span>Share:</span>
                            <Social />
                            {/* END SCCIAL SHARE */}
                          </div>
                        </div>
                        {/* END MAIN CONTENT */}
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="list_inner">
                <div className="image" onClick={toggleModalFour}>
                  <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(assets/img/news/4.jpg)",
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                    By <a href="#">Tom Box</a>
                      <span>05 Mayo 2023</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={toggleModalFour}>
                  Venta de cajas de cartón
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={toggleModalFour}>
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
                {/* END DETAILS */}
                <Modal
                  isOpen={isOpen4}
                  onRequestClose={toggleModalFour}
                  contentLabel="My dialog"
                  className="mymodal"
                  overlayClassName="myoverlay"
                  closeTimeoutMS={500}
                >
                  <div className="tokyo_tm_modalbox_news">
                    <button className="close-modal" onClick={toggleModalFour}>
                      <img src="assets/img/svg/cancel.svg" alt="close icon" />
                    </button>
                    {/* END CLOSE ICON */}
                    <div className="box_inner">
                      <div className="description_wrap scrollable">
                        <div className="image">
                          <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(assets/img/news/4.jpg)",
                            }}
                          ></div>
                        </div>
                        {/* END IMAGE */}

                        <div className="details">
                          <div className="extra">
                            <p className="date">
                            By <a href="#">Tom Box</a>
                             <span>05 Mayo 2023</span>
                            </p>
                          </div>
                          <h3 className="title">
                          Venta de cajas de cartón
                          </h3>
                        </div>
                        {/* END DETAILS */}

                        <div className="main_content ">
                          <div className="descriptions">
                            <p className="bigger">
                            La venta de cajas de cartón es una actividad importante para muchas empresas y emprendedores. Las cajas de cartón son esenciales para el transporte y almacenamiento de productos, y se utilizan en una variedad de industrias. La venta de cajas de cartón puede ser una excelente oportunidad de negocio para aquellos que buscan una industria en crecimiento y en constante demanda. Las empresas de venta de cajas de cartón pueden ofrecer una amplia variedad de productos, desde cajas estándar hasta cajas personalizadas y con diseños únicos.
                            </p>
                            <p>
                            La venta de cajas de cartón es una actividad importante para muchas empresas y emprendedores. Las cajas de cartón son esenciales para el transporte y almacenamiento de productos, y se utilizan en una variedad de industrias. La venta de cajas de cartón puede ser una excelente oportunidad de negocio para aquellos que buscan una industria en crecimiento y en constante demanda. Las empresas de venta de cajas de cartón pueden ofrecer una amplia variedad de productos, desde cajas estándar hasta cajas personalizadas y con diseños únicos.
                            </p>

                            <div className="quotebox">
                              <div className="icon">
                                <img
                                  className="svg"
                                  src="assets/img/svg/quote.svg"
                                  alt="quote"
                                />
                              </div>
                              <p>
                              Las empresas de venta de cajas de cartón pueden ofrecer una amplia variedad de productos, desde cajas estándar hasta cajas personalizadas y con diseños únicos.
                              </p>
                            </div>
                            {/* END QUOTEBOX */}
                            <p>

                            </p>

                          </div>
                          <div className="news_share">
                            <span>Share:</span>
                            <Social />
                            {/* END SOCIAL SHARE */}
                          </div>
                        </div>
                        {/* END MAIN CONTENT */}
                      </div>
                    </div>
                  </div>
                </Modal>
                {/* END MODAL */}
              </div>
              {/* END LIST INNER */}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default News;
