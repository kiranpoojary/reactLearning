import React from 'react'

function RenderListIndexKey() {
    const names = ["Kiran", "Appiee", "Kiran"]
    const nameList = names.map((name, index) => <h1 key={index}>{index}.{name}</h1>)
    //https://codepen.io/gopinav/pen/gQpepq?__cf_chl_jschl_tk__=f4e9ee51385241d41037aa0ff16d190e2ab13aad-1603215580-0-AWLlgqiJHNJ7IVHbyILB3_POw2Bq6tXQOUALWMSa5lb7tgb2GmOsWESN8Q206sCWLp4v5NujL3NfGy0lFi1QUDgtH2oHtBTnS7VCuCr20ptoZyP3btU7i1Y5Ugo_NUxY3t5LwUhmA-yo6lSk8JVIVME9aFTAo-U7zVb4GNZaRH7HlKfioaXt5Rpnx7s4Qete-yAMMReXhbqgFrTFx5u3HQuFLALBgcREAwzgs3cL_fBYUBuIJGycIw_2o3kH0cs0xyrQ1jRln_gxDat5bPZCGOEPOqHfZOsD_YNwsaCXVOwiyVO2BlvpY1K85s2sVfjAcw607flJoeUwsnooc4GZmh5bqiAWfhNkJ7YOOPwFQ8oa


    return (
        <div>
            {nameList}
        </div>
    )
}

export default RenderListIndexKey
