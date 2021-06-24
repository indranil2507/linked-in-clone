import React from 'react'
import "./Widget.css"
import InfoIcon from '@material-ui/icons/Info'
import  FiberManualRecordIcon  from '@material-ui/icons/FiberManualRecord'

function Widget() {

    const newsArticle =(heading,subtitle)=>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Friend Reunion confirmed","Top-news -9009 readers")}
            {newsArticle("Is Redux Too Good ?","Top-news -865 readers")}
            {newsArticle("Check whats trending in UK today","Top-news -9000 readers")}
            {newsArticle("New Covid strain causing worries","Top-news -5769readers")}
            {newsArticle("Increse demand for React JS developer in the industry","Top-news -9009 readers")}
            
        </div>
    )
}

export default Widget
