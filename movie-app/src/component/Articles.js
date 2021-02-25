import React from 'react';
import '../Articles.css'


const Articles = (props) => {
    console.log(props.news)
  return (
    <div className="news-container">

      <div className="newstitle">
     
        <h1 className="title6">Sloth</h1>
        <h1 className="title7"> News</h1>
        </div>

          <div className="article">
            {props.news.map(news =>       
              <p className="newstext" >
                <div className="image-container">
                  {news.title}         <p className="content"> {news.description}</p><img className="imgNews" src={news.urlToImage}/>
                </div>          
              </p>
            )}   

      </div>
    </div>
  )
}
export default Articles;