import React from "react";
import Footer from "../footer/footer";
import TopBar from "../topBar/topBar";
import ContentRowTop from "../contentRowTop/contentRowTop";

function ContentWrapper (){

    return (
		<div id="content-wrapper" className="d-flex flex-column">
                <div id="content">

                    <TopBar></TopBar> 
                    <ContentRowTop> </ContentRowTop>
                
                </div>

                <Footer></Footer>

               
            
        </div>

        

    );
        	
}

export default ContentWrapper;