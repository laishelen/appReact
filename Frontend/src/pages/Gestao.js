import React from 'react';
import Container from '@mui/material/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./Gestao.module.css";

function Gestao() {
  return (
    <Container className={styles.container}>
      <h5 className={styles.h5}>Gestão</h5>
      <Row>
          <Col>
            <h5 className={styles.h5}>Clientes</h5>
          </Col>

          <Col>
            <h5 className={styles.h5}>Fornecedores</h5>
          </Col>
        </Row> 
        <Row>
          <Col>    
            <h5 className={styles.h5}>Produtos</h5>
          </Col>

          <Col>
            <h5 className={styles.h5}>Utilizadores</h5>
          </Col>
        </Row>    
    </Container>
  );   
}

export default Gestao;