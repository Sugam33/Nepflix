import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const ListItem = () => {


  
  return (
    <div className='listItem'> 
      <img src='./testimage2.jpg' alt='' />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrowIcon />
          <AddIcon />
          <ThumbUpOffAltIcon />
          <ThumbDownOffAltIcon />
        </div>
        <div className="itemInfoTop">
          <span>1 Hour 14 mins</span>
          <span className='limit'>+15</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa repellat nostrum quae. Ipsa debitis eius quod dicta, sunt explicabo ullam omnis obcaecati, veniam cupiditate, praesentium dolorem culpa commodi ad. Earum.
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  )
}

export default ListItem
 
