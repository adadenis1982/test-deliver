import { useState, useEffect } from 'react';
import { Form, Table, Button, Modal } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import { getData, createDeliver, deleteDeliver, updateDeliver } from '../../redux/actionCreators/deliversAC';

function Deliver() {
  const dispatch = useDispatch();

  const subjects = useSelector((state) => state.deliversReducer.subjects);
  const delivers = useSelector((state) => state?.deliversReducer?.delivers);

  const [show, setShow] = useState(false);
  const [data, setData] = useState(delivers);
  const [value, setValue] = useState('');
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState();
  const [deliver, setDeliver] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    setData(delivers);
  }, [delivers]);

  const handleAdd = (event) => {
    event.preventDefault();

    handleClose();

    const body = {
      deliver_id: +event.target.deliver_id.value,
      name_org: event.target.name_org.value,
      address_fact: event.target.address_fact.value,
      inn: event.target.inn.value,
      plazma_max: +event.target.plazma_max.value,
      plazma_cena: +event.target.plazma_cena.value,
      erm_max: +event.target.erm_max.value,
      erm_cena: +event.target.erm_cena.value,
      immg_max: +event.target.immg_max.value,
      immg_cena: +event.target.immg_cena.value,
      alb_max: +event.target.alb_max.value,
      alb_cena: +event.target.alb_cena.value,
    };

    dispatch(createDeliver(body));
  };

  const handleGetId = (event) => {
    event.target.parentElement.classList.toggle('table-active');
    const idDeliver = event.target.parentElement.dataset.value;
    setId(idDeliver);
  };

  const handleDelete = () => {
    dispatch(deleteDeliver(id));
  };

  const handleShowEdit = () => {
    const deliverFind = delivers.find(el => el.id === +id);
    setDeliver(deliverFind)
    setEdit(true);
  }

  const handleCloseEdit = () => setEdit(false);

  const handleEdit = (event) => {
    event.preventDefault();

    handleCloseEdit();

    const body = {
      deliver_id: +event.target.deliver_id.value,
      name_org: event.target.name_org.value,
      address_fact: event.target.address_fact.value,
      inn: event.target.inn.value,
      plazma_max: +event.target.plazma_max.value,
      plazma_cena: +event.target.plazma_cena.value,
      erm_max: +event.target.erm_max.value,
      erm_cena: +event.target.erm_cena.value,
      immg_max: +event.target.immg_max.value,
      immg_cena: +event.target.immg_cena.value,
      alb_max: +event.target.alb_max.value,
      alb_cena: +event.target.alb_cena.value,
    };

    dispatch(updateDeliver(id, body));
  };

  const handleFilter = (event) => {
    setValue(event.target.value)
    if(event.target.value !== '?????? ???????????????? ????') {
      const filterDelivers = delivers.filter((el) => `${el.deliver_id}00000000` === event.target.value);
      setData(filterDelivers);
    } else {
      setData(delivers);
    }
  };

  return (
    <>
      <div className="d-flex flex-column w-100">
        <div className="h5 m-3 text-info">
          ?????????? ?????? - ?????????????????????????? ?????????????????? ?? ?????????????????????? ???????????????????????????????? ?????????????????????? ???? ?????????????????? ?????????????????????? ?????????????????? ??????????
          <br />
          <div className="h6 mt-2 fw-lighter">
          ?????????? ???????????? - ???????????? ???????????????? ????, ???????????? ???????????????? ?????????????????????? ?????????? ????????????????
          </div>
        </div>
        <div className="d-flex flex-row">
          <div className="w-25 h-25 m-3">
            <label htmlFor="group_select_title" className="form-label">
              ?????????????? ????
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={handleFilter}
              value={value}
            >
            <option>?????? ???????????????? ????</option>
            {subjects?.map((el) => (
                <option key={uuidv4()} value={el.code}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex flex-column m-3">
            <div className="mb-2">
              <Button variant="primary" onClick={handleShow}>
                ????????????????
              </Button>{' '}
              <Button variant="primary" onClick={handleShowEdit}>
                ????????????????
              </Button>{' '}
              <Button variant="primary" onClick={handleDelete}>
                ??????????????
              </Button>{' '}
            </div>
            <div>
              <Table bordered hover size="sm" className='text-center'>
                <thead>
                  <tr>
                    <th colSpan="3">??????????????????????-??????????????????????</th>
                    <th colSpan="2">???????????? ??????????????????????????????????</th>
                    <th colSpan="2">???????????????????????????? ??????????</th>
                    <th colSpan="2">???????????????????????????? ????????????????</th>
                    <th colSpan="2">???????????????? 10-????????????????????</th>
                  </tr>
                  <tr>
                    <th>????????????????????????</th>
                    <th>??????????????????????????????</th>
                    <th>??????</th>
                    <th>????????.????. (??????. ????????????)</th>
                    <th>???????? (??????. ??????. ???? ???????? ????????)</th>
                    <th>????????.????. (??????. ????????????)</th>
                    <th>???????? (??????. ??????. ???? ???????? ????????)</th>
                    <th>????????.????. (??????. ????????????)</th>
                    <th>???????? (??????. ??????. ???? ???????? ????????)</th>
                    <th>????????.????. (??????. ????????????)</th>
                    <th>???????? (??????. ??????. ???? ???????? ????????)</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((el) => (
                    <tr key={uuidv4()} onClick={handleGetId} data-value={el.id}>
                      <td>{el.name_org}</td>
                      <td>{el.address_fact}</td>
                      <td>{el.inn}</td>
                      <td>{el.plazma_max}</td>
                      <td>{el.plazma_cena}</td>
                      <td>{el.erm_max}</td>
                      <td>{el.erm_cena}</td>
                      <td>{el.immg_max}</td>
                      <td>{el.immg_cena}</td>
                      <td>{el.alb_max}</td>
                      <td>{el.alb_cena}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>???????????????? ????????????????</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAdd}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>?????? ???????????????? ????</Form.Label>
              <Form.Control
                type="text"
                name="deliver_id"
                placeholder="01"
                maxLength={2}
                minLength={2}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>????????????????????????</Form.Label>
              <Form.Control
                type="text"
                name="name_org"
                placeholder="????????????????????????"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>??????????????????????????????</Form.Label>
              <Form.Control
                type="text"
                name="address_fact"
                placeholder="??????????????????????????????"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>??????</Form.Label>
              <Form.Control
                type="text"
                name="inn"
                placeholder="??????"
                maxLength={10}
                minLength={10}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>???????????? ??????????????????????????????????</Form.Label>
              <Form.Control
                type="number"
                name="plazma_max"
                min="1"
                placeholder="????????.????. (??????. ????????????)"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>???????????? ??????????????????????????????????</Form.Label>
              <Form.Control
                type="number"
                name="plazma_cena"
                min="1"
                placeholder="???????? (??????. ??????. ???? ???????? ????????)"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
              <Form.Label>???????????????????????????? ??????????</Form.Label>
              <Form.Control
                type="number"
                name="erm_max"
                min="1"
                placeholder="????????.????. (??????. ????????????)"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
              <Form.Label>???????????????????????????? ??????????</Form.Label>
              <Form.Control
                type="number"
                name="erm_cena"
                min="1"
                placeholder="???????? (??????. ??????. ???? ???????? ????????)"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput9">
              <Form.Label>???????????????????????????? ????????????????</Form.Label>
              <Form.Control
                type="number"
                name="immg_max"
                min="1"
                placeholder="????????.????. (??????. ????????????)"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput10">
              <Form.Label>???????????????????????????? ????????????????</Form.Label>
              <Form.Control
                type="number"
                name="immg_cena"
                min="1"
                placeholder="???????? (??????. ??????. ???? ???????? ????????)"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput11">
              <Form.Label>???????????????? 10-????????????????????</Form.Label>
              <Form.Control
                type="number"
                name="alb_max"
                min="1"
                placeholder="????????.????. (??????. ????????????)"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput12">
              <Form.Label>???????????????? 10-????????????????????</Form.Label>
              <Form.Control
                type="number"
                name="alb_cena"
                min="1"
                placeholder="???????? (??????. ??????. ???? ???????? ????????)"
                required
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              ??????????????
            </Button>{' '}
            <Button variant="primary" type="submit">
              ??????????????????
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={edit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title> ???????????????? ????????????????</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEdit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>?????? ???????????????? ????</Form.Label>
              <Form.Control
                type="text"
                name="deliver_id"
                defaultValue={deliver.deliver_id}
                maxLength={2}
                minLength={2}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>????????????????????????</Form.Label>
              <Form.Control
                type="text"
                name="name_org"
                defaultValue={deliver.name_org}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>??????????????????????????????</Form.Label>
              <Form.Control
                type="text"
                name="address_fact"
                defaultValue={deliver.address_fact}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>??????</Form.Label>
              <Form.Control
                type="text"
                name="inn"
                defaultValue={deliver.inn}
                maxLength={10}
                minLength={10}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>???????????? ??????????????????????????????????</Form.Label>
              <Form.Control
                type="number"
                name="plazma_max"
                min="1"
                defaultValue={deliver.plazma_max}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>???????????? ??????????????????????????????????</Form.Label>
              <Form.Control
                type="number"
                name="plazma_cena"
                min="1"
                defaultValue={deliver.plazma_cena}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
              <Form.Label>???????????????????????????? ??????????</Form.Label>
              <Form.Control
                type="number"
                name="erm_max"
                min="1"
                defaultValue={deliver.erm_max}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
              <Form.Label>???????????????????????????? ??????????</Form.Label>
              <Form.Control
                type="number"
                name="erm_cena"
                min="1"
                defaultValue={deliver.erm_max}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput9">
              <Form.Label>???????????????????????????? ????????????????</Form.Label>
              <Form.Control
                type="number"
                name="immg_max"
                min="1"
                defaultValue={deliver.immg_max}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput10">
              <Form.Label>???????????????????????????? ????????????????</Form.Label>
              <Form.Control
                type="number"
                name="immg_cena"
                min="1"
                defaultValue={deliver.immg_cena}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput11">
              <Form.Label>???????????????? 10-????????????????????</Form.Label>
              <Form.Control
                type="number"
                name="alb_max"
                min="1"
                defaultValue={deliver.alb_max}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput12">
              <Form.Label>???????????????? 10-????????????????????</Form.Label>
              <Form.Control
                type="number"
                name="alb_cena"
                min="1"
                defaultValue={deliver.alb_cena}
                required
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleCloseEdit}>
              ??????????????
            </Button>{' '}
            <Button variant="primary" type="submit">
              ????????????????
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Deliver;
