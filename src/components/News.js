import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import { ReactPropTypes } from 'react';
import Proptypes from 'prop-types'
export default class News extends Component {
    static defaultProps={
        category:'general'
    }
    static propTypes={
        category:Proptypes.string

    }
    
    articles=[
            {
                "source": {
                    "id": "the-washington-post",
                    "name": "The Washington Post"
                },
                "author": "Niha Masih, Ellen Francis, Natalia Abbakumova",
                "title": "Ukraine live briefing: Kyiv says troops fighting around Bakhmut; Russian prime minister in China - The Washington Post",
                "description": "Despite Russia’s claim to have seized Bakhmut, Ukraine said the battle was not over. Before-and-after photos show flattened homes and scorched landscapes.",
                "url": "https://www.washingtonpost.com/world/2023/05/23/russia-ukraine-war-news/",
                "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EA33XVSVSPIG7UNFO2HPM7ABSI.jpg&w=1440",
                "publishedAt": "2023-05-23T09:23:00Z",
                "content": "Ukrainian officials say troops are battling around Bakhmut, after Russia claimed to have seized the eastern city which has been a focal point of the war for months. Ukraines armed forces and the coun… [+2931 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "CNBC"
                },
                "author": "Holly Ellyatt",
                "title": "Ukraine war live updates: Russia says 'counter-terrorism' operation ongoing in Belgorod after attack; Kyiv denies involvement - CNBC",
                "description": "The governor of Russia's Belgorod region said Tuesday that a \"counter-terrorism operation\" was ongoing following an armed attack that Russia blamed on Ukraine.",
                "url": "https://www.cnbc.com/2023/05/23/ukraine-war-live-updates-latest-news-on-russia-and-the-war-in-ukraine.html",
                "urlToImage": "https://image.cnbcfm.com/api/v1/image/107245084-1684824578570-gettyimages-1252188190-AFP_33DV7D8.jpeg?v=1684824888&w=1920&h=1080",
                "publishedAt": "2023-05-23T08:30:00Z",
                "content": "Ukraine said fighting appeared to have subsided in Bakhmut, a town that Russia's mercenary forces claimed to have captured last weekend, although Kyiv denied it had fallen.\r\n\"This day [the past 24 ho… [+1738 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "MusicRadar"
                },
                "author": "Ben Rogerson",
                "title": "Push 3 takes Ableton Live standalone: DAW can now be used with or without a computer - MusicRadar",
                "description": "A controller-only version has also been announced",
                "url": "https://www.musicradar.com/news/ableton-push-3-standalone-live",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/G46aBDrDtwyx4fLg7qptaS-1200-80.jpg",
                "publishedAt": "2023-05-23T08:17:56Z",
                "content": "Ableton has joined the likes of Akai and Native Instruments by taking a version of its software completely standalone and packing it into a piece of hardware. In this case that hardware is Push 3, th… [+1709 chars]"
            },
            {
                "source": {
                    "id": "bloomberg",
                    "name": "Bloomberg"
                },
                "author": "Francine Lacqua, Grant Smith",
                "title": "Saudi Energy Minister Tells Oil Speculators to 'Watch Out' - Bloomberg",
                "description": "Saudi Arabia’s top energy official issued another warning to oil short-sellers, just over a week before the OPEC+ alliance is due to meet.",
                "url": "https://www.bloomberg.com/news/articles/2023-05-23/saudi-energy-minister-tells-oil-speculators-to-watch-out",
                "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iAEFWEzy7jiw/v1/1200x800.jpg",
                "publishedAt": "2023-05-23T08:10:55Z",
                "content": "Saudi Arabia’s top energy official issued another warning to oil short-sellers, just over a week before the OPEC+ alliance is due to meet.\r\nRiyadh and its partners surprised crude traders last month … [+163 chars]"
            },
            {
                "source": {
                    "id": "abc-news",
                    "name": "ABC News"
                },
                "author": "Jon Haworth",
                "title": "Good Samaritan helping ducks cross busy street killed by teenage driver: Police - ABC News",
                "description": "\"He was doing something nice and he ended up dying for it.\"",
                "url": "https://abcnews.go.com/US/good-samaritan-helping-ducks-cross-busy-street-killed/story?id=99531576",
                "urlToImage": "https://s.abcnews.com/images/US/RocklinMemorial_1684826820191_hpMain_16x9_992.jpg",
                "publishedAt": "2023-05-23T07:51:20Z",
                "content": "A good Samaritan who stopped his car to help a family of ducks cross a road in California was struck and killed by a teenage driver, police say.\r\nThe incident occurred on Thursday in Rocklin, Califor… [+1912 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "CNBC"
                },
                "author": "Alex Harring",
                "title": "Stock futures are mixed as Wall Street watches for debt ceiling progress: Live updates - CNBC",
                "description": "President Joe Biden and House Speaker Kevin McCarthy met Monday evening.",
                "url": "https://www.cnbc.com/2023/05/22/stock-market-today-live-updates.html",
                "urlToImage": "https://image.cnbcfm.com/api/v1/image/107194279-1676389499120-gettyimages-1465950883-dscf8540_03e62eb3-0336-46fe-987a-1db30540d1c6.jpeg?v=1684792917&w=1920&h=1080",
                "publishedAt": "2023-05-23T07:37:00Z",
                "content": "Stock futures are mixed Tuesday morning after a key debt ceiling meeting between President Joe Biden and House Speaker Kevin McCarthy, even though the two did not strike a deal.\r\nFutures tied to the … [+1692 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Athletic"
                },
                "author": "Steve Berman",
                "title": "Oakland A’s TV broadcaster Glen Kuiper fired after saying racial slur on air - The Athletic",
                "description": "Kuiper was the A's primary TV play-by-play broadcaster for 17 seasons.",
                "url": "https://theathletic.com/4542283/2023/05/22/oakland-athletics-glen-kuiper-fired/",
                "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/05/22163950/USATSI_16627516-1024x683.jpg",
                "publishedAt": "2023-05-23T07:27:42Z",
                "content": "NBC Sports California fired Oakland As TV broadcaster Glen Kuiper on Monday. Kuiper hasnt worked for the network since he said a racial slur on the air before the May 5 game between the As and Royals… [+1219 chars]"
            },
            {
                "source": {
                    "id": "the-washington-post",
                    "name": "The Washington Post"
                },
                "author": "Anumita Kaur",
                "title": "What to know about the Colorado River deal and water cuts - The Washington Post",
                "description": "States along the Colorado River — a vital source of water and electricity — struck a deal with the Biden administration to conserve an unprecedented amount of water.",
                "url": "https://www.washingtonpost.com/climate-environment/2023/05/23/colorado-river-deal-water-cuts-explained/",
                "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MSGJWHBSELIVFVS3X2QU34ZTZU_size-normalized.jpg&w=1440",
                "publishedAt": "2023-05-23T07:13:00Z",
                "content": "Comment on this story\r\nComment\r\nAfter nearly a year of negotiations, three states agreed to conserve an unprecedented amount of their water supply to protect the drought-stricken Colorado River.\r\nThe… [+4507 chars]"
            },
       
        ]
    
    constructor(props)
    {   
        super(props);
        // console.log('constructor')
        this.state={articles:this.articles,loading:false,page:1,present_selection:"science",articles_avaliable:9,page_size:9}
        //this.state={present_selection:"business"}
        let img = require('../assets/'+this.props.category+'.jpg')
        document.body.style.backgroundImage = `url(${img})`;
        
    }
    // state=this.props

    async componentDidMount()
    {
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9ebd136d47a44e4d9943d1383a191ced&page=1&pagesize=${this.state.page_size}`
        // console.log('dhana url',url)
        // console.log('present props:',this.props.category)
        document.title='NewsThrillz- '+this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData=await data.json()
        
        
       
        // console.log('resudsdsdlt data',parsedData.articles)
        this.setState({articles:parsedData.articles,loading:false})
        
            
    }
     handleOnNext= async ()=>
    {  this.setState({
        page:this.state.page+1
    })
        //console.log('present page',this.state.page)
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9ebd136d47a44e4d9943d1383a191ced&page=${this.state.page+1}&pagesize=${this.state.page_size}`
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData=await data.json()
        this.setState({loading:false});
        this.setState({articles_avaliable:parsedData.articles.length})
        console.log('handle next avaliable articles',this.state.articles_avaliable)
       if(this.state.articles_avaliable!==0){this.setState({articles:parsedData.articles,loading:false,articles_avaliable:parsedData.articles.length})
}
       // console.log('next article',parsedData.articles.length,'page no:',this.state.page,'articles in state',parsedData.articles.length)
       // console.log('avaliable article:',this.state.a rticles)
    }
     handleOnPrevious= async ()=>
    {
        //console.log('prev')
        this.setState({
            page:this.state.page-1
        })
            //console.log('previous gone page',this.state.page)
            let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9ebd136d47a44e4d9943d1383a191ced&page=${this.state.page-1}&pagesize=${this.state.page_size}`
            this.setState({loading:true});
            let data = await fetch(url);
            this.setState({loading:false});
            let parsedData=await data.json()
            
           
            
            this.setState({articles:parsedData.articles,loading:false,articles_avaliable:parsedData.articles.length})
            // {console.log('thisdsdsd',this.state.articles)
            // console.log('current prop',this.props.category)}
    }

  render() {
    
    return (
        
      <div className='container'>
    
            <div className='row'>
            {/* {(this.state.loading && <Spinner/>)} */}
            {(this.state.loading==true)?window.scrollTo({top: 0, behavior: 'smooth'}):""}
            {(this.state.loading && <Spinner/>)}
            
            <h1 id='newsheading' className='my-4 text-center' >NewsThrillz-{`Top Headlines from - ${this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)}`}</h1>
            
            {
                console.log('selecting category',this.props.category)
            }
            
            {
                this.state.articles.map((element)=>
                {
                    return <div key={element.url} className='col-md-4' >
                        <Newsitem  title={element.title} imageurl={element.urlToImage} description={element.description} newsurl={element.url} publishedtime={element.publishedAt} author={element.source.name}/>
                       {console.log("dhanush urlss",element.url)}
                        </div>
                })}
            </div>
            <div className="d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handleOnPrevious}> ←Previous</button>
            <button type="button" disabled={(this.state.articles_avaliable<this.state.page_size)} className="btn btn-dark" onClick={this.handleOnNext}>Next→  </button>
            {console.log('present articles length',this.state.articles_avaliable)}
            </div>
            
      </div>
      
    )
  }
}
