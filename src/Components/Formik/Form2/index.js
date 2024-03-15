import React from "react";
import {Formik} from 'formik'

const Form2 ()=> {
    return(
        <Formik
            initialValues={{
            firstName: '',
            email: ''
            }}
        validationSchema={ Yup.object({
            firstName: Yup.string().max(10, "minimum 10"). required("Required"),
            email: Yup.string().email("invalid").required("Required")
        })}
        onSubmit= {(values, {setSunbmitting}) => {
            alert(JSON.stringify(values, null,2))
        }}
        >{(formik)=>(
            <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">FirstName</label>
            <input 
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? <div>Error</div> : null}
            <label htmlFor="email">Email</label>
            <input 
                id="email"
                name="email"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? <div>Error</div> : null}
            <button type="submit">Submit</button>
        </form>
        )}</Formik>
    )
}