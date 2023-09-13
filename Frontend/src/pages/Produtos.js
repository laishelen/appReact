import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Pagination, Box, Container } from '@mui/material';
import { Button, Modal, Form, InputGroup, Alert } from 'react-bootstrap';
import styles from "./Produtos.module.css";
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DoneIcon from '@mui/icons-material/Done';
import DescriptionIcon from '@mui/icons-material/Description';
import SellIcon from '@mui/icons-material/Sell';

const API_URL = 'http://localhost:3001';

const columns = [
  { field: 'id', headerName: 'Nº Produto', width: 150 },
  { field: 'designacao', headerName: 'Designação', width: 300 },
  {
    field: 'precoUnitario', // Campo referente ao preço vindo do backend
    headerName: 'Preço Unitário',
    type: 'number',
    width: 150,
    renderCell: (params) => (
      <span>{params.value} €</span>
    ),
  },
  { field: 'actions', width: 120, },
];

function Produtos() {
  const [rows, setRows] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [editing, setEditing] = useState(false); 
  const [formData, setFormData] = useState({
    id: null,
    designacao: '',
    precoUnitario: '',
  });
  const [shouldReload, setShouldReload] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/produtos`)
      .then((response) => response.json())
      .then((data) => setRows(data))
      .catch((error) => console.error('Erro ao buscar dados:', error));

    if (shouldReload) {
      window.location.reload(); // Atualiza a página após fechar o modal
      setShouldReload(false); // Redefine shouldReload para false após a atualização da página
    }
  }, [shouldReload]); // Dependência adicionada ao useEffect  

  const handleCreateProduto = () => {
    fetch(`${API_URL}/produtos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao criar produto.');
        }
        return response.json();
      })
      .then((data) => {
        setRows((prevRows) => [...prevRows, data]);
        setAlertMessage('Produto criado com sucesso!');
        setAlertType('success');
        setShowAlert(true);

        // Ocultar o alerta após 5 segundos
        setTimeout(() => {
          setModalShow(false);
          setShowAlert(false);
        }, 1000);
      })
      .catch((error) => {
        console.error('Erro ao criar produto:', error);
        setAlertMessage('Erro ao criar produto. Por favor, tente novamente.');
        setAlertType('danger');
        setShowAlert(true);

        // Ocultar o alerta após 5 segundos
        setTimeout(() => {
          setModalShow(false);
          setShowAlert(false);
        }, 1000);
      });
  };

  const handleEditProduto = () => {
    fetch(`${API_URL}/produtos/${formData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setRows((prevRows) =>
          prevRows.map((row) => (row.id === data.id ? data : row))
        );
        setAlertMessage('Produto atualizado com sucesso!');
        setAlertType('success');
        setShowAlert(true);

        // Ocultar o alerta após 5 segundos
        setTimeout(() => {
          setModalShow(false);
          setShowAlert(false);
          setShouldReload(true);   
        }, 1000);
      })
      .catch((error) => {
        console.error('Erro ao atualizar produto:', error);
        setAlertMessage('Erro ao atualizar produto. Por favor, tente novamente.');
        setAlertType('danger');
        setShowAlert(true);

        // Ocultar o alerta após 5 segundos
        setTimeout(() => {
          setModalShow(false);
          setShowAlert(false);
        }, 1000);
      });
  };

  const handleDeleteRow = (rowId) => {
    setShowDeleteAlert(true);
    setFormData({ ...formData, id: rowId });
  };

  const handleDeleteProduto = () => {
    fetch(`${API_URL}/produtos/${formData.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setRows((prevRows) => prevRows.filter((row) => row.id !== formData.id));
          setAlertMessage('Produto deletado com sucesso!');
          setAlertType('success');
          setShowAlert(true);
        } else {
          throw new Error('Falha ao deletar produto.');
        }
      })
      .catch((error) => {
        console.error('Erro ao deletar produto:', error);
        setAlertMessage('Erro ao deletar produto. Por favor, tente novamente.');
        setAlertType('danger');
        setShowAlert(true);
      })
      .finally(() => {
        // Ocultar o alerta após 5 segundos
        setTimeout(() => {
          setModalShow(false);
          setShowAlert(false);
          setShowDeleteAlert(false);
        }, 1000);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleOpenModal = (editing, row) => {
    setEditing(editing);
    setModalShow(true);
    if (editing && row) {
      setFormData({
        id: row.id,
        designacao: row.designacao,
        precoUnitario: row.precoUnitario,
      });
    } else {
      setFormData({
        id: null,
        designacao: '',
        precoUnitario: '',
      });
    }
  };

  const renderActions = (row) => (
    <Box className={styles.actionsContainer}>
      <Button variant="warning" onClick={() => handleOpenModal(true, row)} style={{ backgroundColor: '#e5cc19' }}>
        <EditOutlinedIcon />
      </Button>
      &nbsp;
      <Button variant="danger" onClick={() => handleDeleteRow(row.id)}>
        <DeleteOutlineOutlinedIcon />
      </Button>
    </Box>
  );

  const alertStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#2d3530', // Cor de fundo personalizada (amarelo)
    color: 'white',
    width: '350px',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    zIndex: 9999, // Certifique-se de que o zIndex seja maior do que outros elementos na tela
  };

  return (
    <Container className={styles.container}>
      <div style={{ overflowX: 'auto', width: '70%', marginLeft: '15%' }}>
        <h5 className={styles.h5}>Produtos</h5>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field}>{column.headerName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={column.field}>
                    {column.field === 'actions'
                      ? renderActions(row) // Renderiza os botões de ação
                      : column.renderCell ? column.renderCell({ value: row[column.field] }) : row[column.field]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button className={styles.button} variant="success" type="button" onClick={() => handleOpenModal(false)}>
          <AddIcon />
        </Button>
        <div className={styles.pagination}>
          <Pagination count={10} />
        </div>
      </div>

      {/* MODAL */}

      <div>
        <Modal show={modalShow} onHide={() => setModalShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Produto:</Modal.Title>
          </Modal.Header>
          <Modal.Body>   
            {showAlert && (
              <div className={`alert alert-${alertType}`} role="alert">
                {alertMessage}
              </div>
            )}
            <div>              
              <Form.Group controlId="formDesignacao">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1"><DescriptionIcon /></InputGroup.Text>
                  <Form.Control
                    placeholder="Designação"
                    aria-label="designacao"
                    aria-describedby="basic-addon1"
                    name="designacao"
                    value={formData.designacao}
                    onChange={handleInputChange}
                    />
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="formPreçoUnitario">
                <InputGroup>
                  <InputGroup.Text id="basic-addon1"><SellIcon /></InputGroup.Text>
                  <Form.Control
                    placeholder="Preço Unitário"
                    aria-label="precoUnitario"
                    aria-describedby="basic-addon1"
                    name="precoUnitario"
                    value={formData.precoUnitario}
                    onChange={handleInputChange}
                    />
                </InputGroup>                
              </Form.Group>           
            </div>              

          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={editing ? handleEditProduto : handleCreateProduto}>
              <DoneIcon />&nbsp;{editing ? 'Editar' : 'Criar'}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* Alert de confirmação de exclusão */}
      {showDeleteAlert && (
        <Alert style={alertStyle} variant="warning">
          Tem certeza que deseja deletar este produto?
          <Button className='mt-2' variant="outline-danger" onClick={handleDeleteProduto}>
            Confirmar
          </Button>&nbsp;
          <Button className='mt-2' variant="outline-secondary" onClick={() => setShowDeleteAlert(false)}>
            Cancelar
          </Button>
        </Alert>
      )}
    </Container>
  );   
}

export default Produtos;
