import React from 'react'

const Formulario = () => {
  return (
    <>
    <form className='flex flex-column col-9 shadow p-3 rounded mt-4'>
        <h2 className='text-center'>To - do list</h2>
        <div className='input-group mb-3 col-12'>
            <label className='input-group-text'>
                <i className='bi bi-list-task me-1'></i>
                </label>
            <input type="text" 
                placeholder='Tarea' 
                className='form-control'/>
        </div>

        <div className='input-group mb-3 col-12'>
            <label className='input-group-text'>
                <i className="bi bi-chat me-1"></i>
                </label>
            <input 
                type="text" 
                placeholder='Detonar'
                className='form-control'
                required/>
        </div>


        <button className='btn btn-primary col-12'>Agregar</button>
    </form>
    <div className='btn-group mt-3 col-9'>
        <button className='btn btn-outline-primaty border-secondary'>Todos</button>
        <button className='btn btn-primary'>Pendientes</button>
        <button className='btn btn-primary'>Completados</button>

    </div>

    </>
  )
}

export default Formulario
