import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useState } from 'react';

const ListItem = (index) => {
  const [isHovered, setisHovered] = useState(false);
  return (
    <div className='listItem'
    style={{left: isHovered && index * 225 - 50 + index * 2.5}}
    onMouseEnter={() => setisHovered(true)}
    onMouseLeave={() => setisHovered(false)}
    > 
      <img src='./testimage3.jpg' alt='' />
  
      <div className="itemInfo">
        <div className="icons">
          <PlayArrowIcon className='icon' />
          <AddIcon className='icon' />
          <ThumbUpOffAltIcon className='icon' />
          <ThumbDownOffAltIcon className='icon' />
        </div>
        <div className="itemInfoTop">
          <span>1 Hour 14 mins</span>
          <span className='limit'>+15</span>
          <span>1999</span>
          <span className="genre">Action</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa repellat nostrum quae. Ipsa debitis eius quod dicta, sunt explicabo ullam omnis obcaecati, veniam cupiditate, praesentium dolorem culpa commodi ad. Earum.
        </div>
      </div>
    </div>
  )
}

export default ListItem
 
