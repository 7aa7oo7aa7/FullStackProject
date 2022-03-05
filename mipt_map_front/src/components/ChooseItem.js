import React from 'react';
import '../style/choose_item.css'

function ChooseItem({items, index, id, updateState, default_item}) {

    if (default_item === undefined) {
        default_item = 0;
    }
    let item_id = 0;

    const onChangeHandler = event=>{
        event.preventDefault();
        updateState(index, event.target.value);
    };

    return (
        <div>
            <select id={id} className='choose_item' onChange={onChangeHandler}>
                {items.map(item=>{
                    ++item_id;
                    if (item_id - 1 === default_item) {
                        return <option key={item.id} value={item.id} selected>{item.value}</option>;
                    } else {
                        return <option key={item.id} value={item.id}>{item.value}</option>;
                    }
                })}
            </select>
        </div>
    );
}

export default ChooseItem;
