import Menu from "./Menu";

export default function TopBar() {
    return (
        < div className="top-container">
                 

                 <div className="indices-container fs-9">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points ms-3">{100.2} </p>
          <p className="percent"> </p>
                </div>
                <div className="sensex">
          <p className="index ms-5">SENSEX</p>
          <p className="index-points ms-5">{100.2}</p>
          <p className="percent"></p>
                </div>
              

                
            </div>
            
            <Menu/>

        </div>
        
    )
}