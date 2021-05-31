import React from 'react';
import './Widgets.css';
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";



const Widgets = () => {
    const newsArticle=(heading,subtitle)=>{
        <div className="widgets_article">
            <div className="widget_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widget_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>

    }
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("React is back","Top news 9999 readers")}
            {newsArticle("Java","Top news 9999 readers")}
            {newsArticle("junior react developer","Top news 9999 readers")}
            {newsArticle("Intership ","Top news 9999 readers")}
        </div>
    );
};

export default Widgets;