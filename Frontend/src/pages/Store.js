import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import compasso from '../assets/images/compasso.png';
import borracha from '../assets/images/borracha.png';
import grampeador from '../assets/images/agrafador.png';
import caderno from '../assets/images/caderno.png';
import lapis from '../assets/images/lapis.png';
import esferografica from '../assets/images/esferografica.png';

import afiadeira from '../assets/images/afiadeira.png';
import estojo from '../assets/images/estojo.png';
import Furador from '../assets/images/Furador.png';

import styles from '../pages/Store.module.css';

function Store() {
  return (
    <Container className={styles.container}>
      <h5 className="display-4 my-4 h5" style={{textAlign:'center'}}>Loja</h5>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} columns={24}>
          <Grid xs={8}>
            <Card sx={{ maxwidth: 345 }}>
              <img className={styles.compasso} alt="foto" src={compasso}/>     
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Compasso
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rotring
                </Typography>
                <h4 className={styles.h4}>14,50€</h4>
              </CardContent>
              <CardActions>
                <Button variant="warning"><ShoppingCartIcon />&nbsp;Adicionar</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={8}>
            <Card sx={{ maxwidth: 345 }}>  
              <img className={styles.borracha} alt="foto" src={borracha}/>     
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Borracha
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mercur
                </Typography>
                <h4 className={styles.h4}>1,50€</h4>
              </CardContent>
              <CardActions>
                <Button variant="warning"><ShoppingCartIcon />&nbsp;Adicionar</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={8}>
            <Card sx={{ maxwidth: 345 }}> 
              <img className={styles.grampeador} alt="foto" src={grampeador}/>     
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Grampeador
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Grampeador escolar
                </Typography>
                <h4 className={styles.h4}>6,00€</h4>
              </CardContent>
              <CardActions>
                <Button variant="warning"><ShoppingCartIcon />&nbsp;Adicionar</Button>
              </CardActions>
            </Card>
        </Grid>
        <Grid xs={8}>
            <Card sx={{ maxwidth: 345 }}>   
              <img className={styles.caderno} alt="foto" src={caderno}/>     
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Caderno A5
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Oxford
                </Typography>
                <h4 className={styles.h4}>10,50€</h4>
              </CardContent>
              <CardActions>
                <Button variant="warning"><ShoppingCartIcon />&nbsp;Adicionar</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={8}>
            <Card sx={{ maxwidth: 345 }}>   
              <img className={styles.lapis} alt="foto" src={lapis}/>     
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lápis
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Faber-Castell
                </Typography>
                <h4 className={styles.h4}>1,80€</h4>
              </CardContent>
              <CardActions>
                <Button variant="warning"><ShoppingCartIcon />&nbsp;Adicionar</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={8}>
            <Card sx={{ maxwidth: 345 }}>   
              <img className={styles.esferografica} alt="foto" src={esferografica}/>     
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Esferográfica
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  BIC
                </Typography>
                <h4 className={styles.h4}>2,00€</h4>
              </CardContent>
              <CardActions>
                <Button variant="warning"><ShoppingCartIcon />&nbsp;Adicionar</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={8}>
            <Card sx={{ maxwidth: 345 }}>   
              <img className={styles.afiadeira} alt="foto" src={afiadeira}/>     
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Apontador
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ambar
                </Typography>
                <h4 className={styles.h4}>2,80€</h4>
              </CardContent>
              <CardActions>
                <Button variant="warning"><ShoppingCartIcon />&nbsp;Adicionar</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={8}>
            <Card sx={{ maxwidth: 345 }}>   
              <img className={styles.estojo} alt="foto" src={estojo}/>     
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Estojo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Art Creation
                </Typography>
                <h4 className={styles.h4}>3,50€</h4>
              </CardContent>
              <CardActions>
                <Button variant="warning"><ShoppingCartIcon />&nbsp;Adicionar</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid xs={8}>
            <Card sx={{ maxwidth: 345 }}>   
              <img className={styles.Furador} alt="foto" src={Furador}/>     
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Furador
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Leitz
                </Typography>
                <h4 className={styles.h4}>14,00€</h4>
              </CardContent>
              <CardActions>
                <Button variant="warning"><ShoppingCartIcon />&nbsp;Adicionar</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>   
  )  
}

export default Store;