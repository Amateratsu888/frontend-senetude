import React from 'react'
import AddStudentForm from '../../../../components/addStudentForm/add-student-form';
import { ToastContainer } from 'react-toastify';

const AddStudent = () => {
  return (
    <div className='add-form py-10 px-8'>
      <h1 className='text-4xl'>
        Ajouter un nouveau étudiant
      </h1>
      <div className='form-container mt-6'>
        <AddStudentForm />
      </div>
      <ToastContainer />
    </div>
  )
}

export default AddStudent;