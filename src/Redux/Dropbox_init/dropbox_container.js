import React from 'react'
import { useDispatch } from 'react-redux'
import { FileSuccess, FileFailure } from './dropbox_actions'
import { Dropbox } from 'dropbox'
import { cloud_provider, set_config } from '../../Components/Config'

function DropboxContainer() {
  const dispatch = useDispatch()
  let dbx = new Dropbox({
    accessToken: cloud_provider.cloud_access_key
  })
  dbx
    .filesDownload({ path: '/' + cloud_provider.cloud_config_file })
    .then((response) => {
      response.fileBlob.text().then((res) => {
        set_config(JSON.parse(res))
        dispatch(FileSuccess())
      })
    })
    .catch((error) => {
      dispatch(FileFailure(error))
    })
  return <div></div>
}

export default DropboxContainer
