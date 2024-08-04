import React from 'react';
import { useState } from 'react';

function PasswordChange({ id }) {
    const [nowPass, setNowPass] = useState("");
    const [newPass, setNewPass] = "";

    return (
        <div className='passwordChange'>
            <form className='passwordChangeForm'>
                <input 
                type='text'
                value={nowPass}/>
            </form>
        </div>
    );
};

export default PasswordChange;