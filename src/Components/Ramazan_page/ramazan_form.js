import React from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { fetchRamadanResultsIndivisual } from '../../Redux/Ramadan_quiz_results/indivisual_actions'
import { Row, Col } from 'react-bootstrap'
import Loader from 'react-loader-spinner'

function RamazanForm() {
  const error = useSelector((state) => state.ramadan_ind_results.error)
  const data_loaded = useSelector((state) => state.ramadan_ind_results.loaded)
  const data_loading = useSelector((state) => state.ramadan_ind_results.loading)
  const dispatch = useDispatch()
  const initialValues = {
    name: '',
    age: ''
  }
  const onSubmit = (values) => {
    console.log(values)
    dispatch(fetchRamadanResultsIndivisual(values))
  }
  //console.log(redirect)
  // const validate = (values) => {
  //   let errors = {}

  //   if (!values.name) {
  //     errors.name = 'Required'
  //   }
  // }

  const formik = useFormik({
    initialValues,
    onSubmit
    //validate
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>
            <h4>Individual Results</h4>
            <small id='namehelp' className='form-text text-muted'>
              Please use the same name and age used for the quiz.
            </small>
          </label>
          <Row>
            <Col xs='6'>
              Name
              <input type='text' id='name' name='name' className='form-control' onChange={formik.handleChange} value={formik.values.name} />
            </Col>
            <Col xs='6'>
              Age
              <input type='number' id='age' name='age' className='form-control' onChange={formik.handleChange} value={formik.values.age} />
            </Col>
          </Row>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
      {data_loading ? (
        <div>
          <Loader type='Puff' color='#00BFFF' height={100} width={100} />
        </div>
      ) : null}
      {error && !data_loading ? <div style={{ color: 'red' }}>No quizzes found</div> : !error && data_loaded ? <Redirect to='/ramazanresults' /> : null}
    </div>
  )
}

export default RamazanForm
