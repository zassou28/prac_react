import React from 'react';

type SquareProps = {
    num: number
}

const Square: React.FC<SquareProps> = prrops => {
    return (
    <button className="square" onClick={() => alert('click')}>
        {prrops.num}
    </button>
    );
}

export default Square;
