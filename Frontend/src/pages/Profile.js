import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import quemSomos from '../assets/images/quemsomos.jpg';

import styles from '../pages/Profile.module.css';

function Profile() {
  return (
    <Container className={styles.container}>  
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <div className={styles.grid}>    
            <img className={styles.quemSomos} alt="foto" src={quemSomos}/>            
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className={styles.lorem}>
            <h2>Quem somos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sapiente soluta repudiandae, voluptatibus fugit expedita non commodi fugiat et, provident ab nemo ipsam, beatae ut hic dignissimos corporis voluptates! Dicta.
            Neque tempora esse quisquam incidunt mollitia cum adipisci corporis natus consequuntur similique labore vitae quos quod amet in, debitis deleniti recusandae maiores quia. Ducimus animi corrupti enim blanditiis odit recusandae.</p>

            <p>Nam officia perspiciatis minima. Voluptatem inventore alias quam dolorem sapiente quod dolorum, eum in officiis, est fugiat facilis reiciendis eius. Est hic neque perferendis adipisci non dignissimos sapiente sequi necessitatibus.
            Sit aperiam recusandae ipsam voluptatum? Ducimus beatae eius esse iusto nam cumque dolorem provident laboriosam rem soluta inventore cum tempora in exercitationem quaerat consequatur voluptatibus expedita, accusamus itaque possimus maxime.</p>

            <p>Nam officia perspiciatis minima. Voluptatem inventore alias quam dolorem sapiente quod dolorum, eum in officiis, est fugiat facilis reiciendis eius. Est hic neque perferendis adipisci non dignissimos sapiente sequi necessitatibus.
            Sit aperiam recusandae ipsam voluptatum? Ducimus beatae eius esse iusto nam cumque dolorem provident laboriosam rem soluta inventore cum tempora in exercitationem quaerat consequatur voluptatibus expedita, accusamus itaque possimus maxime.</p>

            <p>Nam officia perspiciatis minima. Voluptatem inventore alias quam dolorem sapiente quod dolorum, eum in officiis, est fugiat facilis reiciendis eius. Est hic neque perferendis adipisci non dignissimos sapiente sequi necessitatibus.
            Sit aperiam recusandae ipsam voluptatum.</p>
          </div>          
        </Grid>
      </Grid>
    </Container>
  );    
}

export default Profile;