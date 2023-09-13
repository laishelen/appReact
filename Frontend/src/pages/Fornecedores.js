import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Pagination, Box, Container } from '@mui/material';
import { Button, Modal, Form, InputGroup, Alert } from 'react-bootstrap';
import styles from "./Fornecedores.module.css";
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DoneIcon from '@mui/icons-material/Done';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';
import RememberMeIcon from '@mui/icons-material/RememberMe';

const API_URL = 'http://localhost:3001';

const columns = [
  { field: 'id', headerName: 'Nº Fornecedor', width: 150 },
  { field: 'nome', headerName: 'Nome', width: 300 },
  {
    field: 'nipc',
    headerName: 'NIPC',
    type: 'number',
    width: 120,
  },
  { field: 'actions', width: 120, },
];

function Fornecedores() {
  const [rows, setRows] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [editing, setEditing] = useState(false); 
  const [formData, setFormData] = useState({
    id: null,
    nome: '',
    nipc: '',
  });
  const [shouldReload, setShouldReload] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/fornecedores`)
      .then((response) => response.json())
      .then((data) => setRows(data))
      .catch((error) => console.error('Erro ao buscar dados:', error));

    if (shouldReload) {
      window.location.reload(); // Atualiza a página após fechar o modal
      setShouldReload(false); // Redefine shouldReload para false após a atualização da página
    }
  }, [shouldReload]); // Dependência adicionada ao useEffect 
  
  const handleCreateFornecedor = () => {
    fetch(`${API_URL}/fornecedores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao criar fornecedor.');
        }
        return response.json();
      })
      .then((data) => {
        setRows((prevRows) => [...prevRows, data]);
        setAlertMessage('Fornecedor criado com sucesso!');
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
        console.error('Erro ao criar fornecedor:', error);
        setAlertMessage('Erro ao criar fornecedor. Por favor, tente novamente.');
        setAlertType('danger');
        setShowAlert(true);

        // Ocultar o alerta após 5 segundos
        setTimeout(() => {
          setModalShow(false);
          setShowAlert(false);
        }, 1000);
      });
  };

  const handleEditFornecedor = () => {
    fetch(`${API_URL}/fornecedores/${formData.id}`, {
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
        setAlertMessage('Fornecedor atualizado com sucesso!');
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
        console.error('Erro ao atualizar fornecedor:', error);
        setAlertMessage('Erro ao atualizar fornecedor. Por favor, tente novamente.');
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

  const handleDeleteFornecedor = () => {
    fetch(`${API_URL}/fornecedores/${formData.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setRows((prevRows) => prevRows.filter((row) => row.id !== formData.id));
          setAlertMessage('Fornecedor deletado com sucesso!');
          setAlertType('success');
          setShowAlert(true);
        } else {
          throw new Error('Falha ao deletar fornecedor.');
        }
      })
      .catch((error) => {
        console.error('Erro ao deletar fornecedor:', error);
        setAlertMessage('Erro ao deletar fornecedor. Por favor, tente novamente.');
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
        nome: row.nome,
        nipc: row.nipc,
      });
    } else {
      setFormData({
        id: null,
        nome: '',
        nipc: '',
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
    width: '362px',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    zIndex: 9999, // Certifique-se de que o zIndex seja maior do que outros elementos na tela
  };

  return (
    <Container className={styles.container}>
      <div style={{ overflowX: 'auto', width: '70%', marginLeft: '15%' }}>
        <h5 className={styles.h5}>Fornecedores</h5>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.field}>{column.headerName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                {columns.map(column => (
                  <TableCell key={column.field}>
                    {column.field === 'actions' ? renderActions(row) : row[column.field]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button className={styles.button} variant="success" type="button" onClick={() => handleOpenModal(false)}><AddIcon /></Button>
        <div className={styles.pagination}>
          <Pagination count={10} />
        </div>
      </div>

      {/* MODAL */}

      <div>
        <Modal show={modalShow} onHide={() => setModalShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Fornecedor:</Modal.Title>
          </Modal.Header>
          <Modal.Body>             
            {showAlert && (
              <div className={`alert alert-${alertType}`} role="alert">
                {alertMessage}
              </div>
            )}
            <div>              
              <Form.Group controlId="formNome">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1"><PersonIcon /></InputGroup.Text>
                  <Form.Control
                    placeholder="Nome"
                    aria-label="nome"
                    aria-describedby="basic-addon1"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    />
                </InputGroup> 
              </Form.Group>
              <Form.Group controlId="formNIPC">
                <InputGroup>
                  <InputGroup.Text id="basic-addon1"><RememberMeIcon />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="NIPC"
                      aria-label="nipc"
                      aria-describedby="basic-addon1"
                      name="nipc"
                      value={formData.nipc}
                      onChange={handleInputChange}
                      />
                  </InputGroup>                      
              </Form.Group>           
            </div>              
         
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={editing ? handleEditFornecedor : handleCreateFornecedor}>
              <DoneIcon />&nbsp;{editing ? 'Editar' : 'Criar'}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* Alert de confirmação de exclusão */}
      {showDeleteAlert && (
        <Alert style={alertStyle} variant="warning">
          Tem certeza que deseja deletar este forncedor?
          <Button className='mt-2' variant="outline-danger" onClick={handleDeleteFornecedor}>
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

export default Fornecedores;