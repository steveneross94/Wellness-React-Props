import React from 'react';


function GuidanceItem ({title,image,description,isPriority,stars}) {
    return (
        <tr>
            <td>{title}</td>
            <td><img src={image} alt={title}/></td>
            <td>{description}</td>
            <td>{'⭐️'.repeat(stars)}</td>
            <td>{isPriority ? 'YES' : 'NO'}</td>
        </tr>
    )
}

export default GuidanceItem;