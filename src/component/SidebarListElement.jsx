import React from "react";

export const SidebarListElement = ({list, active, select}) => {
    return (
        list.map((element, index) => {
            return <li onClick={active?.bind(null, index)}
                       className={select === index ? 'active mb-2 p-2' : ' mb-2 p-2'}
                       key={index}><span
                className='icon pe-3'>{element.icon}</span><span>{element.name}</span></li>
        })
    )
}