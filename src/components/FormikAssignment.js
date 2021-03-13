import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';


const FormikAssignment = () => {

    const [initialState, setInitialState] = useState({
        firstName: "",
        lastName: "",
        gender: "male",
        age: "",
        mobileNumber: "",
        countryCity: "",
        documentType: "",
        documentNumber: "",
        document: "",
        twoWayActive: false,
        returnDate: "",
        returnFrom: "",
        returnTo: "",

    })

    const { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
        enableReinitialize: true,
        initialValues: initialState,
        validationSchema: Yup.object({
            firstName: Yup.string().required("First Name is required"),
            lastName: Yup.string().required("Last Name is required"),
            gender: Yup.string().required("Gender is required"),
            age: Yup.string().min(2, "Must be atleast 2 digit").max(3, "Only 3 digits allowed").required("Age is required"),
            mobileNumber: Yup.number().required("Mobile Number is required"),
            countryCity: Yup.string().required("Country and city is required"),
            documentType: Yup.string().required("Document Type is required"),
            documentNumber: Yup.string().required("Document Number is required"),
            document: Yup.string().required("Attach a document"),
            twoWayActive: Yup.boolean(),
            returnDate: Yup.string().when("twoWayActive", {
                is: true,
                then: Yup.string().required("Return Date is required")
            }),
            returnFrom: Yup.string().when("twoWayActive", {
                is: true,
                then: Yup.string().required("Return From is required")
            }),
            returnTo: Yup.string().when("twoWayActive", {
                is: true,
                then: Yup.string().required("Return To is required")
            }),

        }),
        onSubmit: (values) => {
            console.log(values)
            alert('Hooray!!! Form Submitted!!')
        }
    })


    return (
        <>
            <div className="row mx-5 my-3 ">
                {console.log(errors)}
                <div className="col-12 my-5">
                    <h5 className="font-weight-bold">ASSIGNMENT THREE:</h5>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="row align-items-center">
                        <div className="col-6 form-group">
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter First Name"
                                id="firstName"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.firstName && touched.firstName &&
                                <small className="text-danger font-weight-bold mt-2">{errors.firstName}</small>
                            }

                        </div>
                        <div className="col-6 form-group">
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Last Name"
                                id="lastName"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.lastName && touched.lastName &&
                                <small className="text-danger font-weight-bold mt-2">{errors.lastName}</small>
                            }

                        </div>
                        <div className="col-3 form-group">
                            <label htmlFor="gender">Gender:</label>
                            <select value={values.gender} onChange={handleChange} name="gender" id="gender" className="form-control">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            {
                                errors.gender && touched.gender &&
                                <small className="text-danger font-weight-bold mt-2">{errors.gender}</small>
                            }

                        </div>
                        <div className="col-3 form-group">
                            <label htmlFor="mobileNumber">Age:</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter Age"
                                id="mobileNumber"
                                name="age"
                                value={values.age}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <small>Format: 98XX-XXXXXX</small>
                            {
                                errors.age && touched.age &&
                                <small className="text-danger font-weight-bold mt-2">{errors.age}</small>
                            }

                        </div>
                        <div className="col-3 form-group">
                            <label htmlFor="mobileNumber">Mobile Number:</label>
                            <input
                                type="tel"
                                className="form-control"
                                placeholder="Enter Mobile Number"
                                id="mobileNumber"
                                name="mobileNumber"
                                pattern="[0-9]{10}"
                                value={values.mobileNumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <small>Format: 98XX-XXXXXX</small>
                            {
                                errors.mobileNumber && touched.mobileNumber &&
                                <small className="text-danger font-weight-bold mt-2">{errors.mobileNumber}</small>
                            }

                        </div>
                        <div className="col-3 form-group">
                            <label htmlFor="countryCity">Country, City:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Country, City"
                                id="countryCity"
                                name="countryCity"
                                value={values.countryCity}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.countryCity && touched.countryCity &&
                                <small className="text-danger font-weight-bold mt-2">{errors.countryCity}</small>
                            }

                        </div>
                        <div className="col-6 form-group">
                            <label htmlFor="documentType">Document Type:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Document Type"
                                id="documentType"
                                name="documentType"
                                value={values.documentType}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.documentType && touched.documentType &&
                                <small className="text-danger font-weight-bold mt-2">{errors.documentType}</small>
                            }

                        </div>
                        <div className="col-6 form-group">
                            <label htmlFor="documentNumber">Document Number:</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter Document Number"
                                id="documentNumber"
                                name="documentNumber"
                                value={values.documentNumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.documentNumber && touched.documentNumber &&
                                <small className="text-danger font-weight-bold mt-2">{errors.documentNumber}</small>
                            }

                        </div>
                        <div className="col-12 form-group">
                            <label htmlFor="document">Document: </label>
                            <input
                                type="file"
                                className="form-control"
                                placeholder="Add Document Here"
                                id="document"
                                name="document"
                                value={values.document}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.document && touched.document &&
                                <small className="text-danger font-weight-bold mt-2">{errors.document}</small>
                            }

                        </div>
                        <div className="col-12 form-group">
                            <div className="custom-control custom-checkbox mt-4">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="twoWayActive"
                                    name="twoWayActive"
                                    checked={values.twoWayActive}
                                    onChange={handleChange}
                                />
                                <label
                                    className="custom-control-label"
                                    for="twoWayActive"
                                >
                                    Is Two Way ?
                                </label> <br />
                                <small>Select for entering returning details</small>
                            </div>

                        </div>

                        {
                            values.twoWayActive &&
                            <>

                                <div className="col-2 form-group">
                                    <label htmlFor="returnDate">Return Date: </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder="Enter Return Date"
                                        id="returnDate"
                                        name="returnDate"
                                        value={values.returnDate}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {
                                        errors.returnDate && touched.returnDate &&
                                        <small className="text-danger font-weight-bold mt-2">{errors.returnDate}</small>
                                    }

                                </div>
                                <div className="col-5 form-group">
                                    <label htmlFor="returnFrom">Return From: </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Return From"
                                        id="returnFrom"
                                        name="returnFrom"
                                        value={values.returnFrom}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {
                                        errors.returnFrom && touched.returnFrom &&
                                        <small className="text-danger font-weight-bold mt-2">{errors.returnFrom}</small>
                                    }

                                </div>
                                <div className="col-5 form-group">
                                    <label htmlFor="returnTo">Return To: </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Return To"
                                        id="returnTo"
                                        name="returnTo"
                                        value={values.returnTo}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {
                                        errors.returnTo && touched.returnTo &&
                                        <small className="text-danger font-weight-bold mt-2">{errors.returnTo}</small>
                                    }

                                </div>
                            </>
                        }
                        <div className="col-12">
                            <button className="btn  mx-auto btn-primary" type="submit" >Submit</button>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default FormikAssignment
