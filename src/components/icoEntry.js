import React from 'react'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function icoEntry(key, value) {
    var icoName = '';
    var out = value;
    switch (key) {
        case 'birthday':
            icoName = "birthday-cake";
            break;
        case 'phone':
            icoName = "phone";
            out = <a href={"tel:"+value}>{value}</a>;
            break;
        case 'loc':
            icoName = "compass";
            break;
        case 'hometown':
            icoName = "home";
            break;
        case 'pronouns':
            icoName = "venus-mars";
            break;
        case 'email':
            icoName = "envelope";
            out = <a href={"mailto: "+value}>{value}</a>;
            break;
        default:
            icoName = "circle";
    };

    return (
        <li><FontAwesomeIcon icon={icoName} style={{marginRight: '6px'}}/>{out}</li>
    );
}

export default icoEntry;

