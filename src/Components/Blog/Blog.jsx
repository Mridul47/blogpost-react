import React from 'react'
import Card from '../Card/Card'
import Madrid from '../../img/madrid.png'
import './Blog.css'
import {Link} from "react-router-dom"
import {data} from '../../constant/constant'


const Blog = () => {
    console.table(data)
    
  return (
    <div className="blogs">
        <div className="cards">
            
           {data.map(d =>   
            <><Link to={'/post/' + d.id} key={d.id}>
                   <Card
                       logo={Madrid}
                       heading={d.title}
                       detail={d.body} /></Link>
                
                    <Link to={'/page2'}>
                    <Card
                           logo={Madrid}
                           heading={d.title}
                           detail={'Laliga, SSupercup, Usupercup'} />
                    </Link>
                           
                           
                           </>)}


   
        
        </div>
    </div>
    
  )
}

export default Blog