import React, {useRef} from 'react'
import {  useFormik } from 'formik'

function YoutubeForm() {
    const yourRef = useRef(null)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: ''
        },
        onSubmit: values => {
            console.log('Form data', values);
        }
    })

  return (
    <div>
        <form action="" onSubmit={formik.handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" id='name' name='name' placeholder='name' onChange={formik.handleChange} value={formik.values.name} />

        <label htmlFor="">E-mail</label>
        <input type="text" id='email' name='email' placeholder='email' onChange={formik.handleChange} value={formik.values.email} />


        <label htmlFor="">Channel</label>
        <input type="text" id='channel' name='channel' placeholder='channel' onChange={formik.handleChange} value={formik.values.channel} />

        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default YoutubeForm