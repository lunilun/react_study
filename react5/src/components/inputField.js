import React from "react";

const InputField = (props) => {
    return (
        <React.Fragment> 
            {/* <></>로 써도 같은 결과 ---> 인스펙터창에 root(여기선 input을 감싸는 root태그)태그가 안보이게 설정 */}
            <input style={{borderColor:'red'}} type={props.type} value={props.value} placeholder={props.placeholder} onChange={props.onchange} />
                <div style={{color:'red'}}>{props.errMsg}</div>
            <br />  
        </React.Fragment>
    );
};

export default InputField;