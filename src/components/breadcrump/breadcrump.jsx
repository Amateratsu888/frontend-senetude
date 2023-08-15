import { Breadcrumbs } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrump = ({childrens}) => {
  return (
    <Breadcrumbs fullWidth>
        {
            childrens && childrens.map((children,index) => (
                <Link key={index} className="opacity-60">{children.libelle}</Link>
            ))
        }
    </Breadcrumbs>
  )
}

export default Breadcrump;