import React, { useEffect, useState } from 'react'

import '../css/Imprints.css';
import { NavLink, useLocation } from 'react-router-dom';
import whiteLogo from '../images/white_logo.png';

export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

const Imprints = () => {
    const [language,setLanguage] = useState(false);

    return (
        <>
            <ScrollToTop />
            
            <div className='container-fluid p-0 m-0' style={{ overflowX: 'hidden' }}>
            {
                language === false ? (
                    <div className='container-fluid mt-5 mb-5 text-white ' style={{ background: '#609D9F', borderRadius: '10%', fontSize: 'larger', fontFamily: 'cursive' }}>
                    {/* font-size: larger; */}
                    {/* font-family: cursive; */}
                    <p className='p-4'>
                        
                        <div className='h2 mb-4 text-center'> IMPRINT  
                        <center>
                        <button className='btn btn-dark m-3' onClick={() => setLanguage(true)}> Translate to German </button>

                        </center>

                        </div>

                        Telemedia law based in Germany is subject to the legal notice requirement in accordance with Section 5 TMG. Because of the so-called country of origin principle, providers from other EU member states do not have to adhere to the legal notice requirement under German law, but only according to the relevant regulations from their country of residence.
                        <br />
                        <br />
                        <b>Rusanov Logistics UG (hb) , HRB114200 </b>
                        <br />
                        <div className='h3 mb-4 mt-4 text-center'> Terms and conditions </div>
                        <center>
                            <hr style={{ border: '2px solid white', width: '13.5vw' }} />

                        </center>

                        <div className='h4 mt-4 mb-4'>   1. Disclaimer </div>
                        Although the pages were created with the greatest care, no guarantee can be given that the information provided is correct, complete or up-to-date. The operator of the website endeavors to correct errors or errors when he becomes aware of them - thank you for any information in this regard. There is also no guarantee for the availability or operation of this website and its contents. Any liability for direct, indirect or other damage, regardless of the cause, arising from the use or unavailability of the website and the information provided on this website is - to the extent legally permissible - excluded.
                        <div className='h4 mt-4 mb-4'> 2. Copyright </div>
                        The content of this website is protected by copyright. The information is intended for personal use only. Any further use, in particular storage in databases, reproduction and any form of commercial use as well as passing on to third parties - even in parts or in revised form, in particular photos, images and texts - is prohibited without the consent of the website operator.
                        <div className='h4 h4 mt-4 mb-4'> 3. Liability for links </div>
                        This website may contain links to external websites, but the website operator has no influence on these target pages. Therefore, no liability is assumed for this third-party content; the respective provider of the pages is always responsible for this.
                    </p>
                </div>


                ) :(
                    <div className='container-fluid mt-5 mb-5 text-white ' style={{ background: '#609D9F', borderRadius: '10%', fontSize: 'larger', fontFamily: 'cursive' }}>
                    {/* font-size: larger; */}
                    {/* font-family: cursive; */}
                    <p className='p-4'>
                        
                        <div className='h2 mb-4 text-center'> IMPRESSUM  
                        <center>
                        <button className='btn btn-dark m-3' onClick={() => setLanguage(false)}>Translate to English </button>

                        </center>

                        </div>

                        Telemedienrechts mit Sitz in Deutschland unterliegen der Impressumspflicht nach § 5 TMG. Anbieter aus anderen EU-Mitgliedstaaten müssen sich wegen des sog. Herkunftslandprinzips nicht an die Impressumspflicht nach deutschem Recht halten, sondern alleine nach den entsprechenden Vorschriften aus ihrem Sitzstaat.
                        <br />
                        <br />
                        <b>Rusanov Logistics UG (hb) , HRB114200 </b>
                        <br />
                        <div className='h3 mb-4 mt-4 text-center'> Allgemeine Nutzungsbedingungen </div>
                        <center>
                            <hr style={{ border: '2px solid white', width: '13.5vw' }} />

                        </center>

                        <div className='h4 mt-4 mb-4'> 1. Haftungsausschluss </div>
                        Obwohl die Seiten mit größter Sorgfalt erstellt wurden, kann keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen übernommen werden. Der Betreiber der Website bemüht sich darum, Fehler oder Irrtümer zu berichtigen, wenn er Kenntnis davon erhält – danke für diesbezügliche Hinweise. Es wird auch keine Gewähr für die Verfügbarkeit oder den Betrieb der gegenständlichen Website und ihrer Inhalte übernommen. Jede Haftung für unmittelbare, mittelbare oder sonstige Schäden, unabhängig von deren Ursachen, die aus der Benutzung oder Nichtverfügbarkeit der Website sowie der bereitgestellten Informationen auf dieser Website erwachsen, wird – soweit rechtlich zulässig – ausgeschlossen.
                        <div className='h4 mt-4 mb-4'> 2. Copyright </div>
                        Der Inhalt dieser Website ist urheberrechtlich geschützt. Die Informationen sind nur für die persönliche Verwendung bestimmt. Jede weitergehende Nutzung, insbesondere die Speicherung in Datenbanken, Vervielfältigung und jede Form von gewerblicher Nutzung sowie die Weitergabe an Dritte – auch in Teilen oder in überarbeiteter Form, insbesondere von Fotos, Abbildungen und Texten – ohne Zustimmung des Betreibers der Website ist untersagt.
                        <div className='h4 h4 mt-4 mb-4'> 3. Haftung für Links  </div>
                        Diese Website kann Links zu externen Websites enthalten, jedoch hat der Betreiber der Website keinen Einfluss auf diese Zielseiten. Deshalb wird für diese fremden Inhalte auch keine Gewähr übernommen, dafür ist stets der jeweilige Anbieter der Seiten verantwortlich.
                    </p>
                </div>
                )
            }
                

                                    {/* Footer Section */}


                {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
                <div class="container-fluid p-0 m-0">
                    {/* <!-- Footer --> */}
                    <div
                        class="text-center text-lg-start text-white" style={{ background: "rgb(104, 170, 171)" }}>
                        {/* <!-- Grid container --> */}
                        <div class="container pt-3 pb-2">
                            <h2>Contact Us </h2>
                            <center>
                                <hr style={{ border: '2px solid white', width: '8.5vw' }} />
                            </center>
                            {/* <!-- Section: Links --> */}
                            <section class="">
                                {/* <!--Grid row--> */}
                                <div class="row">
                                    {/* <!-- Grid column --> */}
                                    <div class="col-md-2 col-lg-3 col-xl-3  mt-3 " style={{ textAlign: 'left' }}>
                                        <img src={whiteLogo} height={120} alt="" />
                                        {/* <h6 class="text-uppercase mb-4 font-weight-bold">
                                        Company name
                                    </h6> */}
                                        <NavLink to='/' style={{ cursor: 'pointer', userSelect: 'none', textDecoration: 'none', color: 'white' }} >
                                            <p className='pl-4'> Home  </p>
                                        </NavLink>
                                        <NavLink to='/' style={{ cursor: 'pointer', userSelect: 'none', textDecoration: 'none', color: 'white' }} >
                                            <p className='pl-4'> How it Works  </p>
                                        </NavLink>
                                        <NavLink to='/' style={{ cursor: 'pointer', userSelect: 'none', textDecoration: 'none', color: 'white' }} >
                                            <p className='pl-4'> Plans  </p>
                                        </NavLink>
                                        <a className='mb-1 pl-4' href="https://wa.me/+4917647268120?text=Hello+I+Want+To+Become+Your+Partner" style={{ textDecoration: 'none', color: 'white' }} target="_blank">
                                            Become Partner
                                        </a>


                                        <NavLink to='/imprints' style={{ cursor: 'pointer', userSelect: 'none', textDecoration: 'none', color: 'white' }} >
                                            <p className='mt-3 pl-4'> Imprints  </p>
                                        </NavLink>
                                        {/* <p>
                                        Here you can use rows and columns to organize your div
                                        content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit
                                    </p> */}
                                    </div>
                                    {/* <!-- Grid column --> */}

                                    {/* <!-- Grid column --> */}
                                    <div class=" col-md-4 col-lg-3 pt-3 col-xl-3 mx-auto mt-3 mb-4">
                                        <p class="h4 mb-3 font-weight-normal">Get in touch </p>
                                        <center>

                                        <hr style={{ border: '2px solid white', width: '4.5vw', }} />
                                        </center>
                                        <div className=' ml-5' style={{ textAlign: 'left', }}>
                                            <a href="mailto:nutribite@protonmail.com" className='black-panther p-0 m-0' style={{ textDecoration: 'none' }}>   <i class="fa-solid fa-envelope"> </i> &nbsp;nutribite@protonmail.com  </a>
                                            <br />
                                            <a href="https://wa.me/+4917662020701?text=Hello+I+Want+To+Order+Tiffin" target='_blank' className=' black-panther p-0 m-0' style={{ textDecoration: 'none' }}>   <i class="fa-brands fa-whatsapp"> </i> &nbsp;+49-176-47268120 </a>
                                            <div>
                                                <i class="fa-solid fa-house p-0"> </i> &nbsp; Rusanov Logistics UG (hb) , HRB114200
                                            </div>
                                        </div>

                                    </div>
                                    {/* <!-- Grid column --> */}
                                </div>
                                {/* <!--Grid row--> */}
                            </section>
                        </div>
                        {/* <!-- Grid container --> */}
                    </div>
                    {/* <!-- Footer --> */}
                </div>
                {/* <!-- End of .container --> */}
            </div>
        </>

    )
}














// <div class="container-fluid mt-4">
//         <h1 class="text-center">Terms and Conditions</h1>

//         <div class="row">
//             <div class="col-md-12">
//                 <p>
//                     Please read these terms and conditions carefully before using this website. By accessing and using this website, you agree to be bound by the terms and conditions described below. If you do not agree with these terms and conditions, please do not use this website.
//                 </p>

//                 <h2>1. Use of the Website</h2>
//                 <p>
//                     You agree to use this website only for lawful purposes and in a way that does not infringe on the rights of, or restrict or inhibit the use and enjoyment of this website by any third party.
//                 </p>

//                 <h2>2. Intellectual Property</h2>
//                 <p>
//                     The content, design, and all intellectual property rights on this website are owned by the website owner. You may not use, reproduce, modify, distribute, or display any part of this website without prior written consent.
//                 </p>

//                 <h2>3. Limitation of Liability</h2>
//                 <p>
//                     The website owner shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with your use of this website.
//                 </p>

//                 <h2>4. Governing Law</h2>
//                 <p>
//                     These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction].
//                 </p>
//             </div>
//         </div>
export default Imprints
