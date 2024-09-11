import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importar imagens
// import gato1 from '../../assets/gato1.png';
// import gato2 from '../../assets/gato2.png';
// import gato3 from '../../assets/gato3.jpg';

function Carousel() {
    useEffect(() => {
        console.log('Initializing Swiper');
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal', // Use 'horizontal' para um carrossel horizontal, ou 'vertical' se preferir vertical
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });

        return () => {
            if (swiper) swiper.destroy();
        };
    }, []);

    return (
        <div className="swiper" style={{ height: '300px', width: '100%' }}> {/* Defina a altura e largura adequadas */}
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src={gato1} alt="Slide 1" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="swiper-slide">
                    <img src={gato2} alt="Slide 2" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="swiper-slide">
                    <img src={gato3} alt="Slide 3" style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>

            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-scrollbar"></div>
        </div>
    );
}

export default Carousel;
