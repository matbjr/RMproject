import React from 'react'
import { useSelector } from 'react-redux'
import InputTable from './Input_table'
import Loader from 'react-loader-spinner'

function Crinputtable() {
  const showTableSam = useSelector((state) => state.sample_json.table)
  const showTableInput = useSelector((state) => state.input_json.table)
  const errorRes = useSelector((state) => state.results_json.error)
  const isloadingSam = useSelector((state) => state.sample_json.loading)
  const errorSam = useSelector((state) => state.sample_json.error)
  return (
    <div>
      {isloadingSam ? (
        <div>
          <Loader type='Puff' color='#00BFFF' height={100} width={100} />
        </div>
      ) : errorRes ? (
        <h2>{JSON.stringify(errorRes)}</h2>
      ) : errorSam ? (
        <h2>{JSON.stringify(errorRes)}</h2>
      ) : (
        <div></div>
      )}
      {showTableInput || showTableSam ? (
        <div>
          <InputTable />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default Crinputtable
