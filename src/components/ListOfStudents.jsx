import React, { useState } from 'react'
import { StudentForm } from './StudentForm'

const ListOfStudents = () => {

    const onAddStudent = (event) => {
        event.preventDefault();
        if (name && lastName) {
            const student = {
                name,
                lastName
            }
            setList([...list, student])
        }
    }

    const [list, setList] = useState([])
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

    const addName = (event) => {
        setName(event.target.value)
    }

    const addLastName = (event) => {
        setLastName(event.target.value)
    }

    const delStudent = (event, index) => {
        event.preventDefault()
        let newList = list.filter((e, ind) => ind !== index)
        setList(newList)
    }

    return (
        <div>
            <StudentForm
                addName={addName}
                addLastName={addLastName}
                onAddStudent={onAddStudent}
            />


            <div>
                <table className="table table-hover p-5">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((student, index) =>
                            <tr key={index}>
                                <td>{student.name}</td>
                                <td>{student.lastName}</td>
                                <td><button onClick={(e) => {delStudent(e, index)}} type="button" name="btnDelRow" className="btn btn-danger">
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListOfStudents
