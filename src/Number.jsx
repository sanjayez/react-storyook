import React, {useState} from 'react';

function Number(props) {

    const [num, setNum] = useState(false)

    return (
        <div className="block">
          <label htmlFor="num">Number</label>
          <input type="number" name="num" id="num" onChange={(e) => setNum(e.target.value)}/>
        </div>
    );
}

export default Number;