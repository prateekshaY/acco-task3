import React from "react";

const FilterTodo =  ({value,handleFilterChange}) => {

    return (
        <div className="filter-list">
        <input placeholder="Filter To Do List" onChange={handleFilterChange}/>
        </div>
    )

}

export default FilterTodo;