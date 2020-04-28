import React from 'react'
import { useSelector } from 'react-redux'
import ResultsTable from './results_table'
import Loader from 'react-loader-spinner'

function Crresultstable() {
  const showResTable = useSelector((state) => state.results_json.table)
  const showTableSam = useSelector((state) => state.sample_json.table)
  const isloadingRes = useSelector((state) => state.results_json.loading)
  return (
    <div>
      {isloadingRes ? (
        <div>
          <Loader type='Puff' color='#00BFFF' height={100} width={100} />
        </div>
      ) : (
        <div></div>
      )}
      {showResTable || showTableSam ? <ResultsTable /> : <div></div>}
    </div>
  )
}

export default Crresultstable
