import React from 'react'
import { useSelector } from 'react-redux'
import ResultsTable from './results_table'

function Crresultstable() {
  const showResTable = useSelector((state) => state.results_json.table)
  const showTableSam = useSelector((state) => state.sample_json.table)
  return (
    <div>{showResTable || showTableSam ? <ResultsTable /> : <div></div>}</div>
  )
}

export default Crresultstable
