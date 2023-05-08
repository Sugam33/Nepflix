import React, { useRef, useState } from 'react'
import './list.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from '../listItem/ListItem';

const List = () => {
    const[slideNumber, setSlideNumber] = useState(0)

    const listRef = useRef()

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x  - 50
        if(direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
            console.log(distance)
        }
        console.log(distance);
        if(direction === "right" && slideNumber < 2){
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
  return (
    <div className='list'>
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
            <ArrowBackIosNewIcon className='sliderArrow left' onClick={() => {handleClick("left")}}/>
            <div className="container" ref={listRef}>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
               
            </div>
            <ArrowForwardIosIcon className='sliderArrow right' onClick={() => {handleClick("right")}}/>
      </div>
    </div>
  )
}

export default List
