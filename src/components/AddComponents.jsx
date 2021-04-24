import { useHistory } from "react-router-dom";

export const ManageComponents=(props)=>{
    let history = useHistory();

    return (
        <>
        
            <div className="" style={{display:"flex", flexDirection:"row", outline:"2px solid red", justifyContent:"space-between",alignItems:"center"}}>
                {/* <div className="row"> */}
                <div style={{display:"flex", flexDirection:"row", outline:"2px solid blue", }}>
                    <div onClick={()=>{history.goBack()}} style={{fontSize:"2rem",display:"flex", alignItems:"center",}}><span >&#8592;</span><span style={{fontSize:"1.2rem", paddingLeft:"0.5rem"}}>Back</span></div>
                    <p style={{marginLeft:"2rem", fontWeight: "800",fontSize: "24px",lineHeight: "36px"}}>Manage Books</p>

                </div>
                <div>
                    <button style={{background: "#075F49",borderRadius: "5px", color:"white", height:"3rem", border:"none", margin:"0 0.5rem"}}onClick={props.openFolder}>Add Folder</button>
                    <button onClick={props.openCat}>Add Category</button>
                    <button onClick={props.openTag}>Add Tag</button>
                    <button onClick={props.openBook}>Add Book</button>
                    
                    
                {/* </div> */}
                </div>
            </div>
        </>
    )
}