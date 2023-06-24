import React/*, { useRef }*/ from 'react';
import { svgIconInfoNotPoint } from '../sass/assets/svgInfoNotPoint';

const NotFound = () => {

    // let cursorRef = useRef();

    // const mousePos = e => {
    //     cursorRef.current.setAttribute(
    //         'style', 
    //         `top:${ e.pageY}px; left:${e.pageX}px`)
    // };

    // function mouseOver(e) {
    //     e.classList.toggle("persoCursor")
    // }

    return (
        <div /*onMouseMove={ mousePos }*/ className="bloc-error">
            {/* <div ref={ cursorRef } className="persoCursor"></div> */}
            <div className="error">
                <div className="text-title-error">
                    <h1>Erreur 404</h1>
                </div>
                <div className="text-error">
                    <div className="text-error-page">
                        <div className="bg-point-icon-info" /*onDragOver={ mouseOver }*/>
                            <div className="point-icon-info">
                                <div className="point-info"></div>
                            </div>
                            { svgIconInfoNotPoint }
                        </div>
                        <h2>The page cannot be found</h2>
                    </div>
                    <h3>Possible causes:</h3>
                    <h4>Explication complotiste:</h4>
                    <p>C'est le gouvernement qui a bloqué le lien pour protéger un secret.</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;