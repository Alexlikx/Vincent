import React from 'react';
import { HomeStyled } from './Home.styled';
import Container from '../../GlobalStyles/Container.styled';
import card1img from '../../img/1.png';
import { Link } from 'react-router-dom';
import card2img from '../../img/2.png';
import card3img from '../../img/3.png';
import card4img from '../../img/4.png';
import card5img from '../../img/5.png';
import card6img from '../../img/6.png';
import worksImg1 from '../../img/Rectangle 2.png';
import worksImg2 from '../../img/Rectangle 3.png';

const Home = () => {

    function ScrollToTop(e) {
        e.preventDefault();
        window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    }
    
    return (
        <HomeStyled>
            <Container>
                <h1 className='home-title'>
                    Vincent Van Gogh. post-impressionist painter and artist
                </h1>
                <div className='home-grid'>
                    <Link className='home-card card1' to='/protfolio'>
                        <img src={card1img} alt='' className='home-card-img'/>
                        <h3 className='home-card-name'>
                            <span className='card-name-number'>1</span>The Starry Night
                            <svg className='card-arrow' width="16" height="9" viewBox="0 0 16 9" fill='black' xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7724 0.477089L15.858 3.9339C16.0473 4.14603 16.0473 4.48996 15.858 4.70208L12.7724 8.1589C12.5831 8.37102 12.2761 8.37102 12.0868 8.1589C11.8974 7.94677 11.8974 7.60284 12.0868 7.39072L14.3446 4.86118H0V3.77481H14.3446L12.0868 1.24527C11.8974 1.03314 11.8974 0.689216 12.0868 0.477089C12.2761 0.264961 12.5831 0.264961 12.7724 0.477089Z"/>
                            </svg>
                        </h3>
                    </Link>
                    <Link className='home-card card2' to='/protfolio'>
                        <img src={card2img} alt='' className='home-card-img'/>
                        <h3 className='home-card-name'>
                            <span className='card-name-number'>2</span>The Night Café
                            <svg className='card-arrow' width="16" height="9" viewBox="0 0 16 9" fill='black' xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7724 0.477089L15.858 3.9339C16.0473 4.14603 16.0473 4.48996 15.858 4.70208L12.7724 8.1589C12.5831 8.37102 12.2761 8.37102 12.0868 8.1589C11.8974 7.94677 11.8974 7.60284 12.0868 7.39072L14.3446 4.86118H0V3.77481H14.3446L12.0868 1.24527C11.8974 1.03314 11.8974 0.689216 12.0868 0.477089C12.2761 0.264961 12.5831 0.264961 12.7724 0.477089Z"/>
                            </svg>
                        </h3>
                    </Link>
                    <Link className='home-card card3' to='/protfolio'>
                        <img src={card3img} alt='' className='home-card-img'/>
                        <h3 className='home-card-name'>
                            <span className='card-name-number'>3</span>The Red Vineyard
                            <svg className='card-arrow' width="16" height="9" viewBox="0 0 16 9" fill='black' xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7724 0.477089L15.858 3.9339C16.0473 4.14603 16.0473 4.48996 15.858 4.70208L12.7724 8.1589C12.5831 8.37102 12.2761 8.37102 12.0868 8.1589C11.8974 7.94677 11.8974 7.60284 12.0868 7.39072L14.3446 4.86118H0V3.77481H14.3446L12.0868 1.24527C11.8974 1.03314 11.8974 0.689216 12.0868 0.477089C12.2761 0.264961 12.5831 0.264961 12.7724 0.477089Z"/>
                            </svg>
                        </h3>
                    </Link>
                    <Link className='home-card card4' to='/protfolio'>
                        <img src={card4img} alt='' className='home-card-img'/>
                        <h3 className='home-card-name'>
                            <span className='card-name-number'>4</span>Ward in the Hospital in Arles
                            <svg className='card-arrow' width="16" height="9" viewBox="0 0 16 9" fill='black' xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7724 0.477089L15.858 3.9339C16.0473 4.14603 16.0473 4.48996 15.858 4.70208L12.7724 8.1589C12.5831 8.37102 12.2761 8.37102 12.0868 8.1589C11.8974 7.94677 11.8974 7.60284 12.0868 7.39072L14.3446 4.86118H0V3.77481H14.3446L12.0868 1.24527C11.8974 1.03314 11.8974 0.689216 12.0868 0.477089C12.2761 0.264961 12.5831 0.264961 12.7724 0.477089Z"/>
                            </svg>
                        </h3>
                    </Link>
                    <Link className='home-card card5' to='/protfolio'>
                        <img src={card5img} alt='' className='home-card-img'/>
                        <h3 className='home-card-name'>
                            <span className='card-name-number'>5</span>Ploughman in the Fields near Arles
                            <svg className='card-arrow' width="16" height="9" viewBox="0 0 16 9" fill='black' xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7724 0.477089L15.858 3.9339C16.0473 4.14603 16.0473 4.48996 15.858 4.70208L12.7724 8.1589C12.5831 8.37102 12.2761 8.37102 12.0868 8.1589C11.8974 7.94677 11.8974 7.60284 12.0868 7.39072L14.3446 4.86118H0V3.77481H14.3446L12.0868 1.24527C11.8974 1.03314 11.8974 0.689216 12.0868 0.477089C12.2761 0.264961 12.5831 0.264961 12.7724 0.477089Z"/>
                            </svg>
                        </h3>
                    </Link>
                     <Link className='home-card card6' to='/protfolio'>
                        <img src={card6img} alt='' className='home-card-img'/>
                        <h3 className='home-card-name'>
                            <span className='card-name-number'>6</span>Ploughman in the Fields near Arles
                            <svg className='card-arrow' width="16" height="9" viewBox="0 0 16 9" fill='black' xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7724 0.477089L15.858 3.9339C16.0473 4.14603 16.0473 4.48996 15.858 4.70208L12.7724 8.1589C12.5831 8.37102 12.2761 8.37102 12.0868 8.1589C11.8974 7.94677 11.8974 7.60284 12.0868 7.39072L14.3446 4.86118H0V3.77481H14.3446L12.0868 1.24527C11.8974 1.03314 11.8974 0.689216 12.0868 0.477089C12.2761 0.264961 12.5831 0.264961 12.7724 0.477089Z"/>
                            </svg>
                        </h3>
                    </Link>
                </div>
                <div className='works'>
                    <div className='works-title'>
                        Van Gogh painted several landscapes with flowers, roses, lilacs, and sunflowers.
                    </div>
                    <div className='works-subtitle'>
                        Some reflect his interests in the language of colour, and also in Japanese ukiyo-e. There are two series of dying sunflowers. The first was painted in Paris in 1887 and shows flowers lying on the ground.
                    </div>
                    <div className='works-block'>
                        <div className='works-imgs'>
                            <img src={worksImg1} alt='' />
                            <img src={worksImg2} alt='' className='central-img'/>
                        </div>  
                        <div className='works-info'>
                            <div className='works-item'>
                                <div className='works-author'>
                                    <h4>Nuenen and Antwerp</h4>
                                    <h5>painting intern</h5>   
                                </div>
                                <h6>1883</h6>
                            </div>
                            <div className='works-item'>
                                <div className='works-author'>
                                    <h4>paris</h4>
                                    <h5>junior painter</h5>   
                                </div>
                                <h6>1886</h6>
                            </div>
                            <div className='works-item'>
                                <div className='works-author'>
                                    <h4>Gauguin's visit</h4>
                                    <h5>Experimental artist</h5>   
                                </div>
                                <h6>1888</h6>
                            </div>
                            <div className='works-item'>
                                <div className='works-author'>
                                    <h4>Saint-Rémy</h4>
                                    <h5>Senior Painter</h5>   
                                </div>
                                <h6>1889</h6>
                            </div>
                            <div className='works-item'>
                                <div className='works-author'>
                                    <h4>Auvers-sur-Oise</h4>
                                    <h5>painting studio manager</h5>   
                                </div>
                                <h6>1890</h6>
                            </div>
                        </div>
                    </div>
                </div>
            <footer>
                <div className='main-contact'>
                    <a href='https://youtube.com' className='main-contact-link'>
                        ☻@vangogh.com
                    </a>
                </div>
                <div className='other-footer-links'>
                    <a href='https://youtube.com' className='footer-link'>
                        Linkedin
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.82117 0.192789L11.5923 0.732544C11.8851 0.765667 12.1493 1.02986 12.1824 1.32265L12.7222 6.09381C12.7553 6.38659 12.5448 6.59709 12.252 6.56396C11.9593 6.53084 11.6951 6.26664 11.6619 5.97386L11.267 2.48255L1.43115 12.3184L0.59662 11.4838L10.4324 1.64802L6.94112 1.25305C6.64833 1.21992 6.38414 0.955727 6.35101 0.662945C6.31789 0.370163 6.52839 0.159667 6.82117 0.192789Z"/>
                        </svg>
                    </a>
                    <a href='https://youtube.com' className='footer-link'>
                        Dribbble
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.82117 0.192789L11.5923 0.732544C11.8851 0.765667 12.1493 1.02986 12.1824 1.32265L12.7222 6.09381C12.7553 6.38659 12.5448 6.59709 12.252 6.56396C11.9593 6.53084 11.6951 6.26664 11.6619 5.97386L11.267 2.48255L1.43115 12.3184L0.59662 11.4838L10.4324 1.64802L6.94112 1.25305C6.64833 1.21992 6.38414 0.955727 6.35101 0.662945C6.31789 0.370163 6.52839 0.159667 6.82117 0.192789Z"/>
                        </svg>
                    </a>
                    <a href='https://youtube.com' className='footer-link'>
                        myspace
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.82117 0.192789L11.5923 0.732544C11.8851 0.765667 12.1493 1.02986 12.1824 1.32265L12.7222 6.09381C12.7553 6.38659 12.5448 6.59709 12.252 6.56396C11.9593 6.53084 11.6951 6.26664 11.6619 5.97386L11.267 2.48255L1.43115 12.3184L0.59662 11.4838L10.4324 1.64802L6.94112 1.25305C6.64833 1.21992 6.38414 0.955727 6.35101 0.662945C6.31789 0.370163 6.52839 0.159667 6.82117 0.192789Z"/>
                        </svg>
                    </a>
                    <a href='https://youtube.com' className='footer-link'>
                        GITHUB
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.82117 0.192789L11.5923 0.732544C11.8851 0.765667 12.1493 1.02986 12.1824 1.32265L12.7222 6.09381C12.7553 6.38659 12.5448 6.59709 12.252 6.56396C11.9593 6.53084 11.6951 6.26664 11.6619 5.97386L11.267 2.48255L1.43115 12.3184L0.59662 11.4838L10.4324 1.64802L6.94112 1.25305C6.64833 1.21992 6.38414 0.955727 6.35101 0.662945C6.31789 0.370163 6.52839 0.159667 6.82117 0.192789Z"/>
                        </svg>
                    </a>
                    <a href='https://youtube.com' className='footer-link'>
                        Instagram
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.82117 0.192789L11.5923 0.732544C11.8851 0.765667 12.1493 1.02986 12.1824 1.32265L12.7222 6.09381C12.7553 6.38659 12.5448 6.59709 12.252 6.56396C11.9593 6.53084 11.6951 6.26664 11.6619 5.97386L11.267 2.48255L1.43115 12.3184L0.59662 11.4838L10.4324 1.64802L6.94112 1.25305C6.64833 1.21992 6.38414 0.955727 6.35101 0.662945C6.31789 0.370163 6.52839 0.159667 6.82117 0.192789Z"/>
                        </svg>
                    </a>
                    <a href='/' onClick={ScrollToTop} className='scroll-top'>
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.158912 3.47757L3.61573 0.392008C3.82785 0.202663 4.17178 0.202663 4.38391 0.392008L7.84072 3.47757C8.05285 3.66691 8.05285 3.9739 7.84072 4.16324C7.62859 4.35259 7.28467 4.35259 7.07254 4.16324L4.543 1.90538L4.543 11.25L3.45663 11.25L3.45663 1.90538L0.927093 4.16324C0.714966 4.35259 0.371039 4.35259 0.158912 4.16324C-0.0532153 3.9739 -0.0532153 3.66691 0.158912 3.47757Z"/>
                        </svg>
                    </a>
                </div>
            </footer>
            </Container>
        </HomeStyled>
    );
}

export default Home;
