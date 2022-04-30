import React from 'react'

const StudentForm = (props) => {
    const { addName, addLastName, onAddStudent } = props

    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input className="form-control" onChange={addName} type="text" name="name" />
            </div>
            <div className="mb-3">
                <label className="form-label">Last name</label>
                <input className="form-control" onChange={addLastName} type="text" name="lastName" />
            </div>
            <button className="btn btn-primary" onClick={onAddStudent}>Add new student</button>
        </form>
    )
}

export { StudentForm }
