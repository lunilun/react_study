import React, { useState } from "react";
import InputField from "./inputField";

const MovieForm = (props) => {
    const [movieTitle, setmoiveTitle] = useState('');
    const [movieYear, setmoiveYear] = useState('');

    const [TitleError, setTitleError] = useState('');
    const [YearError, setYearError] = useState('');

    const ResetForm =() => {
        setmoiveTitle('');
        setmoiveYear('');
    };

    const ResetErrForm =() => {
        setTitleError('');
        setYearError('');
    };

    const validateFrom = () => {
        ResetErrForm();
        let validated = true;
        if (!movieTitle) {
            setTitleError("영화제목을 입력해주세요.");
            validated = false;
        }

        if (!movieYear) {
            setYearError("개봉년도를 입력해주세요.");
            validated = false;
        }
        return validated
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (validateFrom()) {
            props.addMoive({
                id: Date.now(), title: movieTitle, year: movieYear
            });
            ResetErrForm();
            ResetForm();
        }
    };

    return (
        <form onSubmit={onSubmit}>
            {/* <input type="text" value={movieTitle} placeholder='영화 제목' onChange={e => setmoiveTitle(e.target.value)} />
            <div style={{color:'red'}}>{TitleError}</div>
            <br />
            <input type="number" value={movieYear} placeholder='개봉년도' onChange={e => setmoiveYear(e.target.value)} />
            <div style={{color:'red'}}>{YearError}</div>
            <br /> */}
            <InputField
                type="text"
                value={movieTitle}
                placeholder="영화제목"
                onchange={e => setmoiveTitle(e.target.value)}
                errMsg={TitleError}
            />

            <InputField
                type="number"
                value={movieYear}
                placeholder="개봉년도"
                onchange={e => setmoiveYear(e.target.value)}
                errMsg={YearError}
            />
            <button type='submit'>추가</button>
        </form>
    );
};

export default MovieForm;