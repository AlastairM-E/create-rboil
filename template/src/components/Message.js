/*IMPORTS*/
import React from 'react'; 

/*COMPONENT*/
function Message({ message }) {

    return (
        <div className="Message" test-id='Message'>{message}</div>
    ); 

};
export default Message;