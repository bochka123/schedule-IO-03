import { useEffect } from "react";

const useUser = (setCurrentStudent, setExists, setSurname, setModal) => {

    useEffect(() => {
        const findUser = (surname) => {
            let group = require('../public/group.json');

            group.find(student => { 
                if(student.surname.toLowerCase() === surname.toLowerCase()){
                    setExists(true);
                    setModal(false);
                    surname = `${student.surname} ${student.name}`;
                    const currentStudent = {
                        name: student.name,
                        surname: student.surname,
                        subjects: student.subjects
                    };
                    setCurrentStudent(currentStudent);
                    setSurname(`${currentStudent.surname} ${currentStudent.name}`);
                }
        });
        }
        
        if(localStorage.getItem('name') ? findUser(localStorage.getItem('name')) : false);

    }, [setCurrentStudent, setExists, setModal, setSurname]);
}

export { useUser };