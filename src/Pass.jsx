import React, {useState} from 'react';

function Pass(props) {

    const [pass, setPass] = useState(false)
    return (
        <div className="block">
          <label htmlFor="pass">password</label>
          <input type="password" name="pass" id="pass" onChange={(e) => setPass(e.target.value)}/>
        </div>
    );
}

export default Pass;