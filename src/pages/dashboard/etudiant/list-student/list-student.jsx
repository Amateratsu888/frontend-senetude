import React from 'react';
import Table from '../../../../components/table/table';

const ListStudents = () => {

  return (
    <div className='student-list py-10 px-8'>
      <h1 className='text-4xl'>
        Liste des étudiants
      </h1>
      <div className='tableContainer mt-6'>
        <Table />
      </div>
    </div>
  )
}

export default ListStudents