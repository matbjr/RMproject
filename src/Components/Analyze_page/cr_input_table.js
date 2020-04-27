import React from 'react'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import InputTable from './Input_table'

function Crinputtable() {
  const showTableSam = useSelector((state) => state.sample_json.table)
  const showTableInput = useSelector((state) => state.input_json.table)
  const isloadingRes = useSelector((state) => state.results_json.loading)
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
      {isloadingRes ? (
        <div>
          <Loader type='Puff' color='#00BFFF' height={100} width={100} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default Crinputtable
