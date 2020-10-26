import React from 'react'
import ReactDOM from 'react-dom'
//https://codepen.io/gaearon/pen/jGBWpE?__cf_chl_jschl_tk__=ceabcd36d0c47914238394c72a66fab5025695bb-1603609257-0-AS2AlGSceoIBLRDIBQ8KnXcbzAFFIjrJSZv_W6nqzm8r8L_3kpiVHPBdsSzktWmggj9HEXB_DjNvS_LUUeZMFJUecO-fVJhHphT1IxY4TD01ARNIdyk9rF3mgJ1NrZ0E0dFIAVNs35xGaz4pq9NSdm685r3zXMC-_5eMXo_VcbsLjfXqFpPyrB5JYrAqFcFtjRHxf093A8VwPMtbi__xxN1_ghLxG-sBrBMwglzHARVFcXni7I9n1BOefJuUAwYU5XwYzxRySOB9Y3lnhWWUIl1TTUiulccM-9zRz9ztklVFuoh2BkL8Z9UTLX-LZE7bDHdDNfbv-hMdDiqMVjZsJfRuNOdiFLy-lKa9o_9NEZe7

function PortalDemo() {
    return ReactDOM.createPortal(<h1>Portal</h1>,
        document.getElementById("login"))
}

export default PortalDemo
