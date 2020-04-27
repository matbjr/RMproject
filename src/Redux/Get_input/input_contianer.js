import React from 'react'
import Dropzone from 'react-dropzone'
import { useDispatch } from 'react-redux'
import { getInputSuccess } from './input_actions'
import { convertToArrayOfObjects } from '../../Components/Config'
import csv from 'csv'
import { sampleTableOff } from '../Sample_test/sample_actions'
import '../../Components/Components.css'

function GetInputContainer() {
  const dispatch = useDispatch()
  const GetInput = (acceptedFiles) => {
    const reader = new FileReader()
    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading failed')
    reader.onload = () => {
      csv.parse(reader.result, (err, data) => {
        let jsonStr = null
        if (err) {
          //alert("File not in CSV format");
          // try JSON format
          try {
            jsonStr = JSON.parse(reader.result)
          } catch (err) {
            alert('The file is not in a valid CSV or JSON format!') //FIXME
          }
        } else {
          let obj = convertToArrayOfObjects(data)
          for (let i = 0; i < obj.length; i++) {
            let item = obj[i]
            let keys = Object.keys(item)
            let items = []
            keys.forEach(function get_key(key) {
              if (!isNaN(parseInt(key))) {
                items.push({
                  item_id: parseInt(key),
                  response: parseInt(item[key])
                })
                delete item[key]
              }
            })
            item['item_responses'] = items
          }
          jsonStr = {
            student_list: obj,
            exam: { name: acceptedFiles[0].name.split('.')[0] }
          }
        }
        console.log(jsonStr)
        dispatch(getInputSuccess(jsonStr))
        dispatch(sampleTableOff())
      })
    }
    acceptedFiles.forEach((file) => reader.readAsBinaryString(file))
  }

  return (
    <div>
      <Dropzone onDrop={GetInput} accept='.csv,.txt,.json'>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Drag'n'drop a CSV or JSON file, or click to select a file</p>
          </div>
        )}
      </Dropzone>
      <br></br>
    </div>
  )
}

export default GetInputContainer
