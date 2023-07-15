import React from 'react'

function Frontpg() {
    return (
        <>
            <div className='main'>
                <div class="inner-main">
                    <h1 class="title">Weather Forecast</h1>
                    <img src="https://th.bing.com/th/id/OIP.YKvFSocKFQaoo-56XlWNMwHaHa?pid=ImgDet&rs=1" alt="sun" style={{ height: "100px", width: "100px" }} />
                    <div class="today" style={{ visibility: "hidden", opacity: "0" }}>
                        <span>Today</span>
                        <h1></h1><p>Temperature: 0°C</p><p></p></div></div>
                <input class="city-input" type="text" placeholder="Enter a City..."
                    style={{ top: "-20px", width: '600px', display: "inline-block", padding: "10px 0px 10px 30px", lineHeight: "120%", position: 'relative', outline: "none", fontsize: "20px", transition: "all 0.5s ease-out 0s" }}></input>
            </div>
        </>
    )
}

export default Frontpg