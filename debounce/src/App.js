import './App.css';
import React, {useCallback, useEffect, useState} from 'react';
import { debounce } from 'lodash';
import Input from './Input';
import Button from './Button';
import ToDoList from './ToDoList';
import Header from './Header';
import FilterTodo from './FilterToDo';


const ToDo = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');
  const [filterText, setFilterText] = useState('');
  const [listToShow, setListToShow] = useState([]);
  
  useEffect(() => {
    filter();
  }, [value,filterText])

  const filter = () => {
    if(filterText.length) {
      const filteredList = list.filter((item) => item.includes(filterText));
      setListToShow(filteredList);
      return;
    }
    setListToShow(list);
  }
  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  }
  
  const handleFilter = debounce(handleFilterChange, 2000);

  
  const addItem = (event) => {
    const toDoList = [...list, value];
    setList(toDoList);
    setValue('');
  }
  
  const handleChange =(event) => {
    setValue(event.target.value);
  }
  
  return(
    <div className="App">
        <Header />
        <Input value={value} handleChange={handleChange} />
        <Button addItem={addItem}/>
        {!!listToShow.length && <FilterTodo value={filterText} handleFilterChange={handleFilter} />}
        <ToDoList list={listToShow} />
    </div>
  )
}

export default ToDo;
