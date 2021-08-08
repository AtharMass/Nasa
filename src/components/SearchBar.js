import React, { useState} from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import {BiSearchAlt} from 'react-icons/bi'
import '../styles/searchBar.css'

function SearchBar(props) {
  const [input, setInput] = useState("")

  const handleInput = event => {
    setInput(event.target.value)
    console.log("from change: ", input)
  }
  
  const keyPressed = event =>{
    if (event.key === 'Enter') {
      console.log(input)
      props.onChange(input)
    } 
  }
  
  return (
    <InputGroup className="mb-3 input-search">
        <InputGroup.Prepend variant="outline-info" >
          <InputGroup.Text   id="basic-addon1"><BiSearchAlt/></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          name="search"
          placeholder="Search Astronomy"
          aria-label="Search Astronomy"
          value={props.value}
          onChange={handleInput}
          onKeyPress={keyPressed}
        />
    </InputGroup>
    )
  }
  
  export default SearchBar;
  