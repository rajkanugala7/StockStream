import { Route,Routes } from "react-router-dom"
import Home from "./Home"
import Orders from "./Orders"
import Funds from "./Funds"
import Summary  from "./Summary"
import Holdings from "./Holdings"
import Apps from "./Apps"
import Positions from "./Positions"
import WatchList from "../WatchList"

export default function DashBoard() {
    return (
        <div className="containr">
            <div className="watchlist overflow-y w-50">
               <WatchList/>
            </div>
        <div className="content ">
            <Routes>
            <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
            </Routes>
                </div>
                
            </div>
    )
}