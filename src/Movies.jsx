import {  Col, Container,  Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import style from './CSS Module/Movie.module.css';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import StarRatingApp from './StarRatingApp';


 export default function Movies({ searchQuery }) {

  
 
  const filterMovies = (name) => {
    return name.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const docs=[
    {
      mname:"Jatt Nu Chudail Takri",
      img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jatt-nuu-chudail-takri-et00368739-1710413132.jpg",
      desc:"Comedy/Horror",
     link:"https://www.youtube.com/watch?v=D4LyZPfnznE",
     minfo:"Jallaludin thinks all women are evil and refers to them as `chudail`. On a trip out with his married friend,he convinces them to divorce their wives but to his surprise he falls in love with Rani.He gets married to her within a week, onlyto realise that she is actually a ghost (chudail).What will Jallaludin`s next plan of action be? Will he be able to fight against Rani or will he succumb to the fear?",
     mtime:"2h 34m",
    cinema:"In Cinemas",
    date:"15 March,2024",

     cast:[
      {
        cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gippy-grewal-18404-17-12-2021-06-58-27.jpg",
        name:"Gippy Grewal",
       role:"as Jallaludin ",
      },
      {
        cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sargun-mehta-1066825-30-01-2017-07-40-56.jpg",
        name:"Sargun Mehta",
        role:"Actor",
      },
      {
        cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/roopi-gill-1263571-24-12-2018-02-07-32.jpg",
        name:"Roopi Gill",
        role:"Actor",
       }
    ],
    crew:[
        {
          img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vikas-vashisht-2018421-1651238508.jpg",
          name:"Vikas Vashisht",
          role:"Director",
       },
        {
           img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ravi-dubey-16823-26-04-2017-16-20-28.jpg",
          name:"Ravi Dubey",
           role:"Producer",
        },
        {
          img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jaani-iein082810-15-03-2022-12-35-35.jpg",
           name:"Jaani",
           role:"Producer",
         },
        {
           img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/amberdeep-singh-1044303-13-01-2017-02-46-42.jpg",
           name:"Amberdeep Singh",
          role:"Writer",
        },
        {
          img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/avvy-sra-2023169-1666937032.jpg",
          name:"Avvy Sra",
          role:"Musician",
         }
        ]
  },
    {
      mname:"Pind Aala School",
      img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pind-aala-school-et00391164-1710832824.jpg",
      desc:"Comedy/Drama",
      link:"https://www.youtube.com/watch?v=COM14tdK86E",
      minfo:"The story of a master who has just taken charge of the school in Pind who tries different things to ensure that the children belonging to this school have a bright future.",
     mtime:"1h54m",
     cinema:"No watch options",
     date:"3 May,2024",
     cast:[
      {
        cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/preet-harpal-30992-13-05-2019-11-58-58.jpg",
        name:"Preet Harpal",
        role:"Actor",
      },
      {
        cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/harsimran-oberoi-2035257-1710338510.jpg",
        name:"Harsimran Oberoi",
        role:"Actor",
      },
      {
        cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/golu-majhe-wala-2035258-1710338617.jpg",
        name:"Golu Majhe Wala",
        role:"Actor",
      },
      {
        cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gurteg-singh-guri-2035259-1710338684.jpg",
        name:"Gurteg Singh Guri",
        role:"Actor",
      }
     ],
     crew:[
      {
      img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ranjit-singh-fateh-2035287-1710412256.jpg",
      name:'Ranjit Singh (Fateh)',
      role:'Director',
      },
      {
        img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tejinder-singh-dhiman-2035286-1710412181.jpg",
        name:'Tejinder Singh Dhiman',
        role:'Producer',
        },
        {
          img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/taj-1082592-1702876574.jpg",
          name:'Taj',
          role:'Writer',
          },
     ]
    },
    
    {
      mname:"Blackia2",
      img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/blackia-2-et00366835-1691663197.jpg",
      desc:"Action/Crime/Drama",
      link:"https://www.youtube.com/watch?v=1RCLn2iIXGA&t=44s",
      minfo:"Blackia 2 is the story of Gama, a boy from a small village situated at the farthest border of India and Pakistan who rises to become one of the biggest and dreadful smugglers/mafias and even develops a stronghold in big cities.",
    mtime:"2h 14m",
    cinema:"No Watch Options",
    date:"8 March,2024",
    cast:[
        {
         cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/dev-kharoud-19574-1655210777.jpg",
         name:'Dev Kharoud',
         role:'as Gama',
        },
        {
          cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/japji-khaira-3155-1693223702.jpg",
          name:'Japji Khaira',
          role:'Actor',
         },
         {
          cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aarushi-sharma-1264256-08-01-2019-04-11-30.jpg",
          name:'Aarushi Sharma',
          role:'Actor',
         }
    ],
    crew:[
      {
     img:'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/navaniat-singh-18411-28-08-2018-03-07-54.jpg',
     name:"Navaniat Singh",
     role:"Director",
      },
      {
        img:'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vivek-ohri-1267141-23-04-2019-04-44-24.jpg',
        name:"Vivek Ohri",
        role:"Producer",
         }
    ]
    },
    {
      mname:"Shinda Shinda No Papa",
      img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shinda-shinda-no-papa-et00337909-1689944126.jpg",
      desc:"Comedy/Drama",
       link:"https://www.youtube.com/watch?v=Vbq1jflpHyU",
       minfo:"Shinda Shinda No Papa is a Punjabi movie starring Gippy Grewal and Shinda Grewal in prominent roles. It is directed by Amarpreet Chhabra forming part of the crew.",
       mtime:"2h 15m",
       cinema:"In Cinemas",
       date:"10 May,2024",
       cast:[
        {
       cimg:'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gippy-grewal-18404-17-12-2021-06-58-27.jpg',
       name:'Gippy Grewal',
       role:'Actor',
        },
        {
          cimg:'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shinda-grewal-2021535-1661163648.jpg',
          name:'Shinda Grewal',
          role:'Actor',
           },
           
           {
            cimg:'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/hina-khan-2036553-1713853945.jpg',
            name:'Hina Khan',
            role:'Actor',
             },
      ],
      crew:[
        {
        img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/amarpreet-gs-chhabra-1044302-1666198429.jpg",
        name:"Amarpreet G.S. Chhabra",
        role:"Director"
        },
        {
          img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ravneet-kaur-grewal-iein082657-11-09-2017-17-05-13.jpg",
          name:"Ravneet Kaur Grewal",
          role:"Producer"
          },
          {
            img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/naresh-kathuria-1044305-20-07-2017-13-04-59.jpg",
            name:"Naresh Kathooria",
            role:"Writer"
            },
      ]
      },
    {
      mname:"Rose Rosy Te Gulab",
      img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/rose-rosy-te-gulab-et00371725-1712125650.jpg",
      desc:"Drama",
      link:"https://www.youtube.com/watch?v=PNSJ4IyShJU",
      minfo:"Gulab is fed up with his bachelorhood and follows the path of manifestation suggested by his friends but finds himself stuck between two girls- Rose and Rosy. Who will he choose or will he get rejected by both?",
     mtimw:"",
     cinema:"Releasing on 24 May,2024",
     date:"",
     cast:[
      {
      cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gurnam-bhullar-1070776-08-03-2019-11-22-53.jpg",
      name:"Gurnam Bhullar",
      role:"as Gulab"
    },
    {
      cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/mahi-sharma-1081913-1712140863.jpg",
      name:'Mahi Sharma',
      role:'as Rosy'
    },
    {
      cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/pranjal-dahiya-2036045-1712118935.jpg",
      name:'Pranjal Dahiya',
      role:'as Rose'
    }
    ],
    crew:[
      {
     img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/manvir-brar-2017633-1647417676.jpg",
     name:"Manvir Brar",
     role:"Director"
      },
      {
        img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gurnam-bhullar-1070776-08-03-2019-11-22-53.jpg",
        name:"Gurnam Bhullar",
        role:"Producer"
      }
    ]

    },

  ]
  const soon=[
    {
      mname:"Carry On Jatta 3",
      img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/carry-on-jatta-3-et00311622-1680678095.jpg" ,
     desc:"Comedy/Romantic",
      link:"https://www.youtube.com/watch?v=QJ67Pf8PLdk",
      minfo:"Advocate Dhillon`s son, Jass, is in love with Meet but her brothers get in a tussle with Adv. Dhillon. As a result, Adv. Dhillon rejects Meet`s hand in marriage. Left with no option, Jass weaves a madhouse plan to propose to his friend, Goldy`s wife, Diljit. Will the plan work?",
    mtime:"2h 16m",
    cinema:"No Watch Options",
    date:"29 June,2023",
    cast:[
     {
      cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gippy-grewal-18404-17-12-2021-06-58-27.jpg",
      name:"Gippy Grewal",
      role:"Actor"
     },
     {
     cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sonam-bajwa-40182-13-06-2019-02-40-40.jpg",
     name:"Sonam Bajwa",
     role:"Actor"
     },
     {
      cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shinda-grewal-2021535-1661163648.jpg",
      name:"Shinda Grewal",
      role:"Actor"
      },
      {
        cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jaswinder-bhalla-9040-24-03-2017-17-34-51.jpg",
        name:"Jaswinder Bhalla",
        role:"Actor"
        },
    ],
    crew:[
      {
        img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/smeep-kang-30776-18-07-2019-04-16-44.jpg",
        name:"Smeep Kang",
        role:"Director"
      },
      {
        img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ravneet-kaur-grewal-iein082657-11-09-2017-17-05-13.jpg",
        name:"Ravneet Kaur Grewal",
        role:"Producer"
      },
      {
        img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/naresh-kathuria-1044305-20-07-2017-13-04-59.jpg",
        name:"Naresh Kathooria",
        role:"Writer"
      },
      {
        img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jaani-iein082810-15-03-2022-12-35-35.jpg",
        name:"Jaani",
        role:"Musician, Lyricist"
      },
    ]
    },
    {
      mname:"Buhe Bariyan",
      img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/buhe-bariyan-et00365497-1692352955.jpg",
      desc:"comedy/Drama/Social",
      link:"https://www.youtube.com/watch?v=ZH920IzGAu8",
     minfo:"Buhe Bariyan follows a group of women, Bhuro and gang, fighting against patriarchy and societal values. Prem Kaur, a new police officer in town, uncovers dark secrets and becomes a beacon of hope for the womenfolk.",
    mtime:"2h 10m",
    cinema:"No Watch Options",
    date:'15 Sep,2023',
    cast:[
    {
      cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/neeru-bajwa-1583-24-02-2017-01-37-51.jpg",
      name:"Neeru Bajwa",
      role:"Actor"
    },
    {
      cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/nirmal-rishi-8449-1710338767.jpg",
      name:"Nirmal Rishi",
      role:"Actor"
    },
    {
      cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rubina-bajwa-1080425-1661260013.jpg",
      name:"Rubina Bajwa",
      role:"Actor"
    },
    {
      cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/simran-chahal-2030066-1691650298.jpg",
      name:"Simran Chahal",
      role:"Actor"
    },
    ],
    crew:[
      {
        img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/uday-pratap-singh-1059768-1651240988.jpg",
        name:"Uday Pratap Singh",
        role:"Director"
      },
      {
        img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/santosh-subhash-thite-1268964-12-07-2019-10-42-50.jpg",
        name:"Santosh Subhash Thite",
        role:"Producer"
      },
    ]
    },
    {
      mname:"Jeonde Raho Bhoot Ji",
      img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jeonde-raho-bhoot-ji-et00391517-1710572571.jpg",
      desc:'Comedy/Horror',
      link:"https://www.youtube.com/watch?v=HYcOZT6B2io",
      minfo:"Jeonde Raho Bhoot Ji is a Punjabi movie starring Binnu Dhillon, Smeep Kang and B. N. Sharma in prominent roles. It is directed by Smeep Kang.",
    mtime:"1h 52m",
    cinema:"In Cinemas",
    date:"12 Apr,2024",
    cast:[
       {
        cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/binnu-dhillon-10933-17-12-2018-04-55-51.jpg",
        name:"Binnu Dhillon",
        role:"Actor",
       },
       {
        cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/smeep-kang-30776-18-07-2019-04-16-44.jpg",
        name:"Smeep Kang",
        role:"Actor",
       },
       {
        cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/b-n-sharma-1061952-10-12-2018-03-02-36.jpg",
        name:"B. N. Sharma",
        role:"Actor",
       }
    ],
    crew:[
      {
       img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/smeep-kang-30776-18-07-2019-04-16-44.jpg",
       name:"Smeep Kang",
       role:"Director, Producer"
      },
      {
        img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/raju-verma-2033268-1704368027.jpg",
        name:"Raju Verma",
        role:"Dialogue Writer"
       }
    ],
    },
{
mname:"Furteela",
img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/furteela-et00395966-1713939808.jpg",
desc:"Drama,Romantic",
link:"https://www.youtube.com/watch?v=WW1Q-wikGAw",
minfo:"A dramatic college love story that explores love, heartbreak, and the journey to self-discovery.",
mtime:"1h 55m",
cinema:"No watch options",
date:"26 Apr,2024",
cast:[
{
 cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jassi-gill-1044028-06-01-2017-05-47-16.jpg",
 name:"Jassie Gill",
 role:"Actor"
},
{
  cimg:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/amyra-dastur-37405-04-05-2020-04-44-00.jpg",
  name:"Amyra Dastur",
  role:"Actor"
 }
],
crew:[
{
img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/amar-hundal-2014509-27-09-2021-12-50-19.jpg",
name:'Amar Hundal',
role:"Director"
},
{
  img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sukh-kamboj-2033706-1705575319.jpg",
  name:'Sukh Kamboj',
  role:"Cinematographer"
  }
]
},


// {
//   mname:"Shayar",
//   img:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shayar-et00388568-1708691149.jpg",
//   desc:"Romantic/Drama",
//  desc1:"Punjabi",
//  link:"https://www.youtube.com/watch?v="
//  }
]
// function handleClick(e){
//   setDataa(docs[(e.target.id)])
//   console.log(dataa)
//   // navigate("/Inner",{ state: {dataa} })
//  }

const navigate =useNavigate();
 return (
    <>
  
      <div>
      <h2 className={style.events}> Recommended Movies</h2>
    </div>
       
    <Container>
    <Row>
    
          {docs.map((value,index)=>{
           if(filterMovies(value.mname)){
          return(
            <Col key={index} id={index}  className={style.pics} > 
              <Card style={{borderRadius:'10px',width:"35vh"}}>
                <div  onClick={()=>{navigate("/Inner",{ state: {value} })}}>
                <img className={style.card}  src={value.img} alt={value.mname}></img>
                </div>
            </Card>
            
           <div>
            <div className={style.d}>{value.mname}</div>
            <desc className={style.v}>{value.desc}</desc>
            
            </div>
        <StarRatingApp/>

            </Col>
           

            
             )
           }
          
            return null;
          })}
       
           
         
      </Row>
        </Container>
          

      <div>
      <h2 className={style.events}>Coming Soon</h2>
    </div>
    <Carousel>
<Container>
<Row>

  
  {soon.map((value,index)=>{
          return(
            <Col key={index}   className={style.pics}          >
              <Card style={{borderRadius:'10px',width:'35vh'}}>
               <div onClick={()=>{navigate("/Inner",{ state: {value} })}}>
               <img className={style.card} src={value.img}></img>
               </div>
            </Card>
           <div>
                 <div className={style.d}>{value.mname}</div>
            <desc className={style.v}>{value.desc}</desc>
  </div>
  <StarRatingApp/>
</Col>
)
 })}
 </Row>
 </Container>
 </Carousel>
<Footer/>


</>
 )

 }
 
        
            {/* <Col>
       <Card style={{ borderRadius:'10px' ,}}  >
      <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny45LzEwICAxMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00368739-qqquklesel-portrait.jpg "
      width="100%" height="100%" style={{borderRadius:'10px'}}/>
    </Card>
    <div  class={style.d}>Jatt Nu Chudail Takri</div>
     <div className={style.v}>Comedy/Horror</div> 
    </Col> */}

 
       {/* <Col>
        <Card style={{borderRadius:'10px'}}>
      <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAxNS4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00318073-vnxhzuzaak-portrait.jpg" alt="Yodha" width="100%" height="100%"
     style={{borderRadius:'10px'}} />
    </Card>
    <div className={style.d}>Yodha</div>
        <div className={style.v}>Action Thriller</div>
        </Col>

    <Col>
        <Card style={{borderRadius:'10px'}}>
      <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgNjI0IFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00366835-hywfldcdnm-portrait.jpg" alt="Blackia 2" width="100%" height="100%"
       style={{borderRadius:'10px'}} />
    </Card>
    <div className={style.d}>Blackia 2</div>
    <div className={style.v}>Action/Crime/Drama</div>
        </Col>

        <Col>
        <Card style={{borderRadius:'10px'}}>
      <Card.Img variant="top"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgODEuOEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384234-namrszxlsp-portrait.jpg" alt="Shaitaan" width="100%" height="100%"
       style={{borderRadius:'10px'}}  />
    </Card>
    <div className={style.d}>Shaitaan</div>
    <div class={style.v}>Thriller</div>
    </Col>


    <Col>
    <Card  style={{borderRadius:'10px'}}>
      <Card.Img variant="top"  alt="Kung Fu Panda 4"  class="sc-eykeme-1 jrtRfk"   src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICAxMC42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379741-rxxpavyhrq-portrait.jpg"
      width="100%" height="100%" style={{borderRadius:'10px'}}/>
    </Card>
    <div className={style.d}>Kung Fu Panda 4</div>
    <div class={style.v}>Action/Adventure/Comedy</div>
    </Col> 
    */}
    
   

   {/* <Container>
<Row>
  <Col>
  <Card style={{paddingTop:'8%',border:'10px'}}>
    <Card.Img variant='top'  src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png" alt="Stream" width="100%" height="100%"/>
    </Card>
    </Col>
    </Row>
</Container>
<Movies1/> */}
   
 {/* <div>
 <h2 className={style.events1}>The Best Of Live Events</h2>
 </div>
   <Container>
  <Row>
    <Col>
    <Card style={{ width: '15rem',border:'10px'}}>
    <Card.Img variant='top'  alt="Workshops" width="100%" height="100%" class="sc-eykeme-1 jrtRfk"  src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png"
    style={{borderRadius: '10px'}}/>
    </Card>
    </Col> */}

{/* <Col>
    <Card style={{ width: '15rem',border:'10px'}}>
    <Card.Img variant='top'  src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/holi-parties-web-collection-202402261056.png" alt="Workshops And More" width="100%" height="100%"
    style={{borderRadius: '10px'}}/>
    </Card>
    </Col> */}


   {/* <Col>
    <Card style={{ width: '15rem',border:'10px'}}>
    <Card.Img variant='top'  alt="Comedy Shows"   src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png" 
    width="100%" height="100%" style={{borderRadius: '10px'}}/>
    </Card>
    </Col>

    <Col>
    <Card style={{ width: '15rem',border:'10px'}}>
    <Card.Img variant='top'  alt="Music Shows" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NCBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png"
   style={{borderRadius: '10px'}}/>
    </Card>
    </Col>
  </Row>
  </Container> */}

//       <div style={{backgroundColor:'rgb(43, 49, 72)',marginTop:'40px'}}>
//      <Row>
//        <Col xs={1} style={{padding:'10px'}}>                                                                       {/* used to adjust padding */}
//        <Button variant="danger" style={{borderRadius:'65px',padding:'10px',marginLeft:'25px'}}> 
//      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
//   <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>    
//   </svg> 
//  </Button>
//  </Col> 


  //  <Col xs={11} style={{color:'white',padding:'10px'}}>
  //   <h3>PREMIERE</h3>
  //   <h7>watch new movies at home,every friday</h7>
  //      </Col>
  //      </Row>
  //     <Col style={{color:'white',paddingTop:'3%',marginLeft:'3%'}}>
  //     <h3>Premieres </h3>
  //     <h6>Brand new releases every Friday</h6>
  //     </Col>
       
  //      <Row> 
  //    <Col style={{marginLeft:'3%',}}>
  //   <Card style={{ borderRadius:"10px"}} >                                                                        {/* cards border */}
  //    <Card.Img variant='top' alt="The Devil Conspiracy" width="100%" height="100%" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00391871-pkgccfrsaa-portrait.jpg"
  // style={{ borderRadius:"10px"}}  />                                                                              {/* //images border defined   */}
  //   </Card>
  //   <div className={style.t}>The Devil Conspiracy</div>
  //   <div className={style.t2}>English</div>
  //   </Col>  

  //   <Col>
  //   <Card style={{ borderRadius:'10px'}}>
  //   <Card.Img variant='top'  alt="Red Sandal Wood" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00354663-zvhcanmgub-portrait.jpg"
  //   style={ {borderRadius:"10px"}}/>
  //   </Card>
  //    <div className={style.t}>Red Sandal Wood</div>
  //   <div className={style.t2}>Tamil</div>
  //   </Col>

    // <Col>
    // <Card style={{borderRadius:'10px'}}>
    // <Card.Img variant='top'  alt="The Roundup: No Way Out" width="100%" height="100%" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00391374-rhpevagccv-portrait.jpg"
    // style={ {borderRadius:"10px"}}/>                                                                                     {/* //it gaves less than card border */}
    // </Card>
    //  <div className={style.t}>The Roundup: No Way Out</div>
    // <div className={style.t2}>Korean</div>
    // </Col>

    // <Col>
    // <Card style={{borderRadius:'10px'}}>
    // <Card.Img variant='top' alt="Dvandva" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00370047-hryqravrsg-portrait.jpg"
    // style={ {borderRadius:"10px"}}/> */}
    // </Card>
    // <div className={style.t}>Dvandva</div>
    // <div className={style.t2}>Kannada</div>
    // </Col>

//     <Col style={{marginRight:'35px'}}>
//     <Card style={{borderRadius:'10px'}}>
//     <Card.Img variant='top'  alt="Bobbyr Bondhura" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00027332-qdlvmpbsmg-portrait.jpg"
//     style={ {borderRadius:"10px"}}/>
//     </Card>
//     <div className={style.t}>Bobbyr Bondhura</div>
//     <div className={style.t2}>Bengali</div>
//     </Col>
//     </Row>
//     </div >
    
//     <div>
//     <h2 className={style.events}>Your Music Studio</h2>
//     </div>
//     <Container>
//     <Row>
//     <Col >
//     <Card style={{width:'15rem',borderRadius:'10px'}}>
//     <Card.Img variant='top' alt="BMW Joytown 2024" width="100%" height="100%" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMiBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00386991-anltfykwss-portrait.jpg"
//     style={ {borderRadius:"10px"}}/>
//     </Card>
//     <div className={style.d}>BMW Joytown 2024</div>
//     <div className={style.v}>Mahalaxmi Race Course: Mumbai</div>
//     <div className={style.v}>Concerts</div>
//        </Col>
  
//     <Col >
//     <Card style={{ width:'15rem',borderRadius:'10px'}}>
//     <Card.Img variant='top' alt="Realm Of A Poet - Shayar Sartaaj Live - Chandigarh" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNCBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00385391-ynbjzfbvxh-portrait.jpg"
//     style={{borderRadius:"10px"}}/>
//     </Card>
//     <div className={style.d}>Realm Of A Poet - Shayar Sartaaj Live - Chandigarh</div>
//     <div className={style.v}>Sector 34 Exibition Ground: Chandigarh</div>
//       <div className={style.v}>  Concerts</div>
//     </Col>

//     <Col  style={{paddingRight:'30%'}}>
//     <Card  style={{width:'15rem',borderRadius:'10px'}}>
//     <Card.Img  width="100%" height="100%" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyOSBNYXIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00362185-yvlwphrsfn-portrait.jpg"
//     style={ {borderRadius:"10px"}}/>
//     </Card>
//     <div className={style.d}>Mehfill E Sartaaj - India Tour</div>
//     <div className={style.v}>Multiple Venues</div>
//    <div className={style.v}>Concerts</div>
//     </Col>
//     </Row>
//     </Container>

//     <div className={style.events1}>Outdoor Events
//     </div>
//    <Container>
//     <Row>
//       <Col>
//       <Card style={{borderRadius:"10px"}}>
//       <Image alt="BMW Joytown 2024" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMiBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00386991-anltfykwss-portrait.jpg"
//         style={{borderRadius:'10px'}}>
//         </Image>
//       </Card>
//       <div className={style.d}>BMW Joytown 2024</div>
//       <div class={style.v}>Mahalaxmi Race Course: Mumbai</div>
//       </Col>

//       <Col>
//       <Card  style={{borderRadius:'10px'}} >
//       <Image alt="Gaurav Gupta Live - India Tour" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyOSBNYXI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00358468-uvzjfbsums-portrait.jpg"
//         style={{borderRadius:'10px'}}>
//         </Image>
//       </Card>
//       <div class={style.d}>Gaurav Gupta Live-India Tour</div>
//       <div class={style.v}>Indian Academy Of Fine Arts : Amritsar</div>
//       </Col>

//       <Col>
//       <Card style={{borderRadius:'10px'}}>
//       <Image  alt="Sadda Pind, Amritsar" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCAyNSBNYXIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00057357-spstztdreq-portrait.jpg"
//       style={{borderRadius:'10px'}}>
//         </Image>
//       </Card>
//       <Col>
//       <div class={style.d}>Sadda Pind, Amritsar</div>
//       <div class={style.v}>Sadda Pind: Amritsar</div>
//       </Col>
//       </Col>

//       <Col>
//       <Card style={{borderRadius:'10px'}}>
//       <Image  alt="Rajasthan Royals vs Delhi Capitals" width="100%" height="100%" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyOCBNYXI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00391082-lvtlfwqsew-portrait.jpg"
//       style={{borderRadius:'10px'}}>
//         </Image>
//       </Card>
//       <div class={style.d} >Rajasthan Royals vs Delhi Capitals</div>
//       <div class={style.v}>Sawai Mansingh Stadium: Jaipur</div>
//       </Col>

//       <Col>
//       <Card  style={{borderRadius:'10px'}}>
//       <Image alt="Sahi Gall AA ft. Manpreet Singh" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEFwcg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00320704-tenwchftgc-portrait.jpg"
//        style={{borderRadius:'10px'}}>
//       </Image>
//       </Card>
//       <Col>
//       <div className={style.d}>Sahi Gall AA ft.Manpreet Singh</div>
//       <div className={style.v}>Indian Academy Of Fine Arts : Amritsar</div>
//       </Col>
//       </Col>
//     </Row>
//    </Container>
   

//  <div  className={style.events1}>
//   Laughter Therapy
//   </div>
//  <Container>
//     <Row>
//       <Col>
//       <Card style={{borderRadius:'10px'}}>
//       <Image alt="Abhishek Upmanyu LIVE - Amritsar" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00373697-mbscugwmkw-portrait.jpg"
//        style={{borderRadius:'10px'}}>
//       </Image>
//       </Card>
//       <Col>
//       <div class={style.d}>Abhishek Upmanyu LIVE - Amritsar</div>
//       <div class={style.v}>Venue to be Announced: Amritsar</div>
//       </Col>
//       </Col>

//       <Col>
//       <Card style={{borderRadius:'10px'}}>
//       <Image    alt="Kisi Ko Batana Mat Ft. Anubhav Singh Bassi " width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyOSBNYXIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00355125-tkflfwazns-portrait.jpg"
//        style={{borderRadius:'10px'}}>
//       </Image>
//       </Card>
//       <div class={style.d}>Kisi Ko Batana Mat Ft. Anubhav Singh Bassi&nbsp;</div>
//       <div class={style.v}>Solitaire Grand Resort: Sri Ganganagar</div>
//       </Col>

//       <Col>
//       <Card style={{borderRadius:'10px'}}>
//       <Image alt="Picche kya Bajta hai? ft. Pritish Narula" width="100%" height="100%" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMSBNYXk%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00359839-pefzfuacmu-portrait.jpg"
//      style={{borderRadius:'10px'}}>
//       </Image>
//       </Card>
//       <div class={style.d}>Picche kya Bajta hai? ft. Pritish Narula</div>
//       <div class={style.v}>Venue to be Announced: Amritsar</div>
//       </Col>

//       <Col>
//       <Card style={{borderRadius:'10px'}}>
//       <Image alt="Abhishek Upmanyu LIVE" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00373752-bdqepzyuhb-portrait.jpg"
//       style={{borderRadius:'10px'}}>
//       </Image>
//       </Card>
//       <Col>
//       <div class={style.d}>Abhishek Upmanyu LIVE</div>
//       <div class={style.v}>Multiple Venues</div>
//       </Col>
//       </Col>


//       <Col  >
//       <Card style={{borderRadius:'10px'}}>
//       <Image  alt="OML Comedy Pit Stop" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMSBNYXI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00312421-nwrltqptjp-portrait.jpg"
//        style={{borderRadius:'10px'}}>
//       </Image>
//       </Card> 
//       <Col>
//       <div class={style.d}>OML Comedy Pit Stop</div>
//       <div class={style.v}>Multiple Venues</div>
//       </Col>
//       </Col>
//       </Row>
//       </Container>
 
//     <div>
//     <h2 class={style.events1}>Popular Events</h2>
//     </div>
//     <Container>
//     <Row>
//       <Col>
//       <Card style={{border:'10px'}}>
//       <Image  alt="BMW Joytown 2024" width="100%" height="100%" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMiBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00386991-aendnrfubx-portrait.jpg"
//         style={{borderRadius:'10px'}}>
//        </Image>
//      </Card>
//      <Col>
//      <div class={style.d}>BMW Joytown 2024</div>
//      <div class={style.v}>Mahalaxmi Race Course: Mumbai</div>
//      </Col>
//       </Col>

//       <Col>
//       <Card style={{border:'10px'}}>
//       <Image  alt="Exposure Math - Capture Any Photography Genre" width="100%" height="100%" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMSBNYXIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00369125-haxjbrjvfp-portrait.jpg"
//        style={{borderRadius:'10px'}}>
//     </Image>
//      </Card>
//      <Col>
//      <div class={style.d}>Exposure Math - Capture Any Photography Genre</div>
//      <div class={style.v}>Delhi Zoo: Delhi</div>
//      </Col>
//       </Col>


//       <Col>
//       <Card style={{borderColor:'light',borderRadius:'10px'}}>
//       <Image  alt="Talk Session in Culinary Arts (Ft. Joao Garcia)" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAzMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00362657-utpyqalndc-portrait.jpg"
//        style={{borderRadius:'10px'}}>
//      </Image>
//      </Card>
//      <Col>
//      <div class={style.d}>Talk Session in Culinary Arts (Ft. Joao Garcia)</div>
//      <div class={style.v}>Watch on Zoom.</div>
//      </Col>
//       </Col>
{/* 
      <Col >
      <Card style={{borderColor:'light',borderRadius:'10px'}}>
      <Image  alt="Talk Session in Business (Ft. Karthik Gunasekaran)" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAzMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00362646-qrujlzurkp-portrait.jpg"
       style={{borderRadius:'10px'}}>
    </Image>
    </Card>
    <Col>
    <div class={style.d}>Talk Session in Business (Ft.Karthik Gunasekaran)</div>
    <div class={style.v}>Watch on Zoom.</div>
    </Col>
      </Col>

      <Col>
      <Card style={{borderColor:'light',borderRadius:'10px'}}>
      <Image  alt="Talk Session in Med-Science (Ft. Malhar Patel)" width="100%" height="100%"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAzMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00362651-ycgkdpfeex-portrait.jpg"
       style={{borderRadius:'10px'}}>
      </Image>
     </Card>
     <Col>
     <div class={style.d}>Talk Session in Business (Ft.Karthik Gunasekaran)</div>
     <div class={style.v}>Watch on Zoom.</div>
     </Col>
      </Col>
      </Row>
      </Container> */}

      
 
