import "./featured.scss"
import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

const Featured = () => {
  return (
    <div className="featured">
      <img src='https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=''></img>
      <div className="info">
        <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt=""></img>
        <span className="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, repudiandae hic quisquam tenetur obcaecati vel vitae laborum harum odit voluptatum assumenda atque iure quia repellendus quaerat numquam quos nostrum quae!
        </span>
        <div className="buttons">
            <button className="play">
                <PlayArrowIcon />
                <span>Play</span>
            </button>
            <button className="more">
                <InfoIcon />
            <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
