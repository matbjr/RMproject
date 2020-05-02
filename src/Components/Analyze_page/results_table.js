import React from 'react'
import { useSelector } from 'react-redux'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit'
import { get_service_config } from '../Config'

function ResultsTable() {
  const jsonStrRes = useSelector((state) => state.results_json.data)
  const jsonStrSam = useSelector((state) => state.sample_json.data)
  const jsonStrIn = useSelector((state) => state.input_json.data)
  const showResTable = useSelector((state) => state.results_json.table)
  const showTableInput = useSelector((state) => state.input_json.table)
  const { ExportCSVButton } = CSVExport
  let exam_name = showTableInput
    ? jsonStrIn.exam.name
    : jsonStrSam.Input.exam.name
  let rm_keys = [
    get_service_config(1, 'short_name'),
    get_service_config(5, 'short_name'),
    get_service_config(8, 'short_name')
  ]
  let columns = rm_keys.map((val) => ({ dataField: val, text: val }))
  let results = showResTable ? jsonStrRes.analysis : jsonStrSam.analysis
  console.log('ResultsTable -> results', results)
  let rm_results = [
    {
      [rm_keys[0]]: results[get_service_config(1, 'short_name')],
      [rm_keys[1]]: results[get_service_config(5, 'short_name')],
      [rm_keys[2]]: results[get_service_config(8, 'short_name')]
    }
  ]
  let table_data = rm_results

  return (
    <div>
      <h1 style={{ backgroundColor: '#e9ecef' }}>Results</h1>
      <ToolkitProvider
        bootstrap4={true}
        keyField='results'
        data={table_data}
        columns={columns}
        exportCSV={{
          fileName: exam_name + 'results.csv',
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
              bootstrap4={true}
              columns={columns}
              data={table_data}
              keyField='results'
            />
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
