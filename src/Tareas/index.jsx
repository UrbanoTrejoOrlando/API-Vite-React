import React from 'react'

const Tareas = () => {
  return (
    <section className='flex flex-column justify-content-center align-items-center
    p-4 col-9'>
        <div className="card col-12 p-2 shadow-sm flex-row justify-content-between">
            <div className="col-8">
                <h3 className='text-primary'>Detonar</h3>
                <p className='text-secondary'> Desplegar app en Netlify</p>
            </div>
                <i className='bi bi-journal-check text-success fs-4 '></i>
           
        </div>

    </section>
  )
}

export default Tareas
