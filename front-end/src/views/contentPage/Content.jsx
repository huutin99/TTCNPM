import { useState } from 'react'
import './Style/Content.css'
import Articles from './Articles'

const Content = () => {
  // const [articles, setArticles]=useState([])
  return (
    <div>
      <body>
      <div class="flexbox-container">
        <div class="flexbox-item Header">This is Header of the page</div>
      </div>
      <div class="Content">
        <div class="flexbox-item Advertisement">
        This is for Advertisement or image
        </div>
        <div class="flexbox-item ArticleContent">This is content of the article</div>
        <div class="flexbox-item RelateArticle">
          <Articles />
        </div>
      </div>
      <div class="footer">
      <div class="flexbox-item Footer">This is Footer of the page</div>
      </div>
    </body>
    </div>
  )
}

export default Content