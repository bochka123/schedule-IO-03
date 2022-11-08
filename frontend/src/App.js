import React, { useEffect } from "react";
import "./commonStyles.scss";
import { Content } from "./components/content/Content";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubjects } from './store/subjects/actions';

function App() {
    const { subjects, status } = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSubjects());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <Content/>
    );
}

export default App;
