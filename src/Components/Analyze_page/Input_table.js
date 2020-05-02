import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit'
import cellEditFactory from 'react-bootstrap-table2-editor'
import { fetchInput } from '../../Redux/Send_input/send_input_actions'

function InputTable() {
  const jsonStrSam = useSelector((state) => state.sample_json.data)
  const jsonStrIn = useSelector((state) => state.input_json.data)
  const showTableInput = useSelector((state) => state.input_json.table)
  const input = useSelector((state) => state.input_json.data)
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  let jsonStr = showTableInput ? jsonStrIn : jsonStrSam.Input
  let jsonStrCopy = JSON.parse(JSON.stringify(jsonStr))
  let exam_name = showTableInput
    ? jsonStrIn.exam.name
    : jsonStrSam.Input.exam.name
  for (let i = 0; i < jsonStrCopy.student_list.length; i++) {
    let items = jsonStrCopy.student_list[i].item_responses
    let responses = []
    items.map((value) => responses.push(value.response))
    let item_id = []
    items.map((value) => item_id.push(value.item_id))
    delete jsonStrCopy.student_list[i].item_responses
    jsonStrCopy.student_list[i].responses = responses.toString()
  }
  console.log(jsonStrCopy)
  let table_data = jsonStrCopy.student_list
  let table_headers = Object.keys(table_data[0])
  let columns = table_headers.map((val) => ({ dataField: val, text: val }))
  //TODO validate cell edit, create variable and store changes in to dispatch fetchInput()
  const cellEdit = cellEditFactory({
    mode: 'dbclick',
    afterSaveCell: (oldValue, newValue, row, column) => {
      console.log(row)
    }
  })

  const { ExportCSVButton } = CSVExport
  return (
    <div>
      <ToolkitProvider
        bootstrap4={true}
        keyField='id'
        data={table_data}
        columns={columns}
        exportCSV={{
          fileName: exam_name + '.csv',
          noAutoBOM: false
        }}>
        {(props) => (
          <div>
            <hr />
            <div className='text-center h3'>{exam_name}</div>
            <BootstrapTable
              hover
              bordered={false}
              caption={
                <Button
                  variant='success'
                  onClick={handleShow}
                  data-toggle='tooltip'
                  data-placement='top'
                  title='Double click on a cell to edit'>
                  Edit cell
                </Button>
              }
              bootstrap4={true}
              data={table_data}
              columns={columns}
              keyField='id'
              {...props.baseProps}
              cellEdit={cellEdit}
            />
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Cell</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Double click on a cell to edit then press enter to save<br></br>
                Student ID can not be changed
              </Modal.Body>
              <Modal.Footer>
                <Button variant='success' onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            <ExportCSVButton className='' {...props.csvProps}>
              Export CSV <i className='fas fa-file-excel text-success'></i>
            </ExportCSVButton>
          </div>
        )}
      </ToolkitProvider>
      {showTableInput ? (
        <button
          type='button'
          className='btn btn-success'
          onClick={() => dispatch(fetchInput(input))}>
          Get results
        </button>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default InputTable
