import React from 'react';
import Container from 'react-bootstrap/Container';
import Grid from '@mui/material/Grid';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

import styles from '../pages/Home.module.css';
import slide1 from '../assets/images/slide1.png';
import slide2 from '../assets/images/slide2.png';
import slide3 from '../assets/images/slide3.png';
import slide4 from '../assets/images/slide4.png';
import imagem1 from '../assets/images/imagem1.jpg';
import imagem2 from '../assets/images/imagem2.jpg';
import imagem3 from '../assets/images/imagem3.jpg';
import imagem4 from '../assets/images/imagem4.jpg'

function Home() {
  return (
    <Container fluid>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={2000}>
        <div>
          <img className={styles.slide1} src={slide1} alt="slide1" />
        </div>
        <div>
          <img className={styles.slide2} src={slide2} alt="slide2" />
        </div>
        <div>
          <img className={styles.slide3} src={slide3} alt="slide3" />
        </div>
        <div>
          <img className={styles.slide4} src={slide4} alt="slide4" />
        </div>
      </Carousel> 
        
      <Container className={styles.container} maxwidth="xs">
        <Grid container spacing={3} columns={16}>        
          <Grid item xs={8}>
            <div>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/DzF_UvNlmRU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className={styles.news}>
              <h1>Novidades</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sapiente soluta repudiandae, voluptatibus fugit expedita non commodi fugiat et, provident ab nemo ipsam, beatae ut hic dignissimos corporis voluptates! Dicta.
              Neque tempora esse quisquam incidunt mollitia cum adipisci corporis natus consequuntur similique labore vitae quos quod amet in, debitis deleniti recusandae maiores quia. Ducimus animi corrupti enim blanditiis odit recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas unde vel non incidunt laborum veritatis voluptatem nisi repellat, possimus necessitatibus porro ipsam rerum, voluptatum cupiditate molestiae id sed adipisci reiciendis.</p>
            </div>
          </Grid>          
        </Grid>
      </Container>

      <Container className={styles.container} maxwidth="xs">
        <Grid container spacing={4} columns={32}>
          <Grid item xs={8}>
            <img className={styles.imagem2} src={imagem2} alt="imagem2" />
            <h4>Experiência</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero dolore natus alias veritatis eius nesciunt quae, tempore cumque eveniet facilis obcaecati fugit ad perspiciatis distinctio dolor laborum possimus tempora.</p>
          </Grid>
          <Grid item xs={8}>
            <img className={styles.imagem3} src={imagem3} alt="imagem2" />
            <h4>Qualidade</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero dolore natus alias veritatis eius nesciunt quae, tempore cumque eveniet facilis obcaecati fugit ad perspiciatis distinctio dolor laborum possimus tempora.</p>
          </Grid>
          <Grid item xs={8}>
            <img className={styles.imagem4} src={imagem4} alt="imagem4" />
            <h4>Conhecimento</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero dolore natus alias veritatis eius nesciunt quae, tempore cumque eveniet facilis obcaecati fugit ad perspiciatis distinctio dolor laborum possimus tempora.</p>
          </Grid>
          <Grid item xs={8}>
            <img className={styles.imagem1} src={imagem1} alt="imagem1" />
            <h4>Confiança</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero dolore natus alias veritatis eius nesciunt quae, tempore cumque eveniet facilis obcaecati fugit ad perspiciatis distinctio dolor laborum possimus tempora.</p>
          </Grid>
        </Grid>
      </Container>

    </Container>
  );   
}

export default Home;
