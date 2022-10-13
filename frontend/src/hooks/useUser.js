import { useEffect } from "react";

const useUser = (setCurrentStudent, setExists) => {

    useEffect(() => {
        const findUser = (surname) => {
            let group = require('../public/group.json');

            group.find(student => { 
                if(student.surname.toLowerCase() === surname.toLowerCase()){
                    setExists(true);
                    surname = `${student.surname} ${student.name}`;
                    const currentStudent = {
                        name: student.name,
                        surname: student.surname,
                        subjects: student.subjects
                    };
                    console.log(currentStudent);
                    setCurrentStudent(currentStudent);
                }
        });
        }
        console.log(localStorage.getItem('name'));
        if(localStorage.getItem('name') ? findUser(localStorage.getItem('name')) : false);

    }, [setCurrentStudent, setExists]);
}

export { useUser };