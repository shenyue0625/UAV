import React from 'react';
import { Navigate } from 'react-router-dom';


// once login is good: use imperative redirect
// https://dev.to/emreloper/react-router-v6-in-two-minutes-2i96 (网页素材名字写反了)
function GoTo(props) {
    return <Navigate to={props.target} replace />;
}

//

export default GoTo;