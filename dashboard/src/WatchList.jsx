import {Tooltip,Grow} from '@mui/material'
import { watchlist } from './data/data'
import { useState } from 'react'
import { KeyboardArrowUp ,KeyboardArrowDown } from '@mui/icons-material';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { DoughnutChart } from './components/DoughnutChart';
export default function WatchList() {


    const labels = watchlist.map((subarray) => subarray["name"]);


    const data = {
        labels,
        datasets: [
            {
              label: "Stock Price",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
    }


    // export const data = {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        // datasets: [
        //   {
        //     label: '# of Votes',
        //     data: [12, 19, 3, 5, 2, 3],
        //     backgroundColor: [
        //       'rgba(255, 99, 132, 0.2)',
        //       'rgba(54, 162, 235, 0.2)',
        //       'rgba(255, 206, 86, 0.2)',
        //       'rgba(75, 192, 192, 0.2)',
        //       'rgba(153, 102, 255, 0.2)',
        //       'rgba(255, 159, 64, 0.2)',
        //     ],
        //     borderColor: [
        //       'rgba(255, 99, 132, 1)',
        //       'rgba(54, 162, 235, 1)',
        //       'rgba(255, 206, 86, 1)',
        //       'rgba(75, 192, 192, 1)',
        //       'rgba(153, 102, 255, 1)',
        //       'rgba(255, 159, 64, 1)',
        //     ],
        //     borderWidth: 1,
        //   },
        // ],
    //   };

    return (
        <div className="watchli">
            <ul> 
                {watchlist.map((stock, index) => {
                    return(
                 <WatchListItem stock={stock} key={index}/>
                       
                 ) }
                
                )}
            </ul>
            <DoughnutChart data={ data } />
        </div>
    )
    
}


const WatchListItem = ({ stock})=>{
    const [showWatchlistActions, setShowWatchlistActions] = useState(false);
    const handleMouseEnter = (e) => {
        setShowWatchlistActions(true);
    }
    const handleMouseLeave = (e) => {
        setShowWatchlistActions(false);
    }
    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="item">
                <p className={stock.isDown ? "down" : "up"}>{stock.name}</p> 
                <div className="item-info">
                    <span className='percent'>{stock.percent}</span>
                    {stock.isDown ? <KeyboardArrowDown  className='down'/> : <KeyboardArrowUp className='up' />}
                    <span className='price'>{stock.price }</span>
                </div>
            </div>
            {showWatchlistActions && <WatchlistActions />}
        </li>
    )
}


const WatchlistActions = ({ uid}) => {
    return (
        <span className='actions'>        <span> 
            <Tooltip title="Buy(B)" placement='top' TransitionComponent={Grow} >
               <button className='buy'>buy</button>
            </Tooltip>
        </span>
        <span> 
            <Tooltip title="Sell(S)" placement='top' TransitionComponent={Grow} >
               <button className='sell'>Sell</button>
            </Tooltip>
        </span><span> <span> 
            <Tooltip title="Analytics" placement='top' TransitionComponent={Grow} >
               <button className='analytics icon'><AnalyticsIcon/></button>
            </Tooltip>
        </span>
            <Tooltip title="More" placement='top' TransitionComponent={Grow} >
               <button className='more'>More</button>
            </Tooltip>
        </span>
        </span>

    )
}