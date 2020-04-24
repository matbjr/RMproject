import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit'
import { Modal, Button } from 'react-bootstrap'
import { get_service_config } from './Config'

function ResultsTable() {
  const jsonStrRes = useSelector((state) => state.results_json.data)
  const jsonStrSam = useSelector((state) => state.sample_json.data)
  const jsonStrIn = useSelector((state) => state.input_json.data)
  const showResTable = useSelector((state) => state.results_json.table)
  const showTableInput = useSelector((state) => state.input_json.table)
  //const showTableSam = useSelector((state) => state.sample_json.table)
  const { ExportCSVButton } = CSVExport
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  let exam_name = showTableInput
    ? jsonStrIn.exam.name
    : jsonStrSam.Input.exam.name
  console.log('ResultsTable -> exam_name', exam_name)
  let rm_keys = [
    get_service_config(1, 'short_name'),
    get_service_config(5, 'short_name'),
    get_service_config(8, 'short_name')
  ]
  console.log('ResultsTable -> rm_keys', rm_keys)
  let columns = rm_keys.map((val) => ({ dataField: val, text: val }))
  console.log('ResultsTable -> columns', columns)
  let results = showResTable ? jsonStrRes.analysis : jsonStrSam.analysis
  console.log('ResultsTable -> results', results)
  let rm_results = [
    {
      [rm_keys[0]]: results[get_service_config(1, 'short_name')],
      [rm_keys[1]]: results[get_service_config(5, 'short_name')],
      [rm_keys[2]]: results[get_service_config(8, 'short_name')]
    }
  ]
  console.log('ResultsTable -> rm_results', rm_results)
  let table_data = rm_results
  //   let item_keys = [
  //     get_service_config(2, 'short_name'),
  //     get_service_config(3, 'short_name'),
  //     get_service_config(12, 'short_name')
  //   ]

  //   let idrs =
  //     showResTable || showTableSam ? Object.values(results[item_keys[0]]) : ''
  //   let diff =
  //     showResTable || showTableSam ? Object.values(results[item_keys[1]]) : ''
  //   let item_id =
  //     showResTable || showTableSam ? Object.keys(results[item_keys[1]]) : ''
  //   let num_correct =
  //     showResTable || showTableSam ? Object.values(results[item_keys[2]]) : ''

  //   let table_data = []
  //   for (let i = 0; i < item_id.length; i++) {
  //     let idr = idrs[i]
  //     if (typeof idr === 'string') {
  //       idr = 'NA'
  //     }
  //     table_data.push([item_id[i], idr, diff[i], num_correct[i]])
  //   }
  console.log(table_data)
  return (
    <div>
      <h1 style={{ backgroundColor: '#e9ecef' }}>Results</h1>
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
              condensed
              bordered={false}
              caption={
                <Button
                  variant='danger'
                  onClick={handleShow}
                  data-toggle='tooltip'
                  data-placement='top'
                  title='Double click on a cell to edit'>
                  Remove Selected Items
                </Button>
              }
              bootstrap4={true}
              columns={columns}
              data={table_data}
              keyField='id'
            />
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Remove Selected Items</Modal.Title>
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
      {/* {showTableInput ? (
        <button type='button' className='btn btn-success'>
          Recalculate
        </button>
      ) : (
        <div></div>
      )} */}
    </div>
  )
}

export default ResultsTable
