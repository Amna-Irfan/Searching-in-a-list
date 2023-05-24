import React from 'react';
import Item from './Item';
import './List.css';

const List = ({items}) => {
    return (
        <section className='list'>
            {
                items.map((item)=>{
                    return(
                        <Item key={item.id} item={item}/>
                    )
                })
            }
        </section>
)};

export default List;