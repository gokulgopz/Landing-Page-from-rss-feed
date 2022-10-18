
import styles from "../styles/Home.module.css"

export default function home() {
 
   
  fetch('/api/whoami')
    .then(res => res.json())
    .then(data => {
      //console.log(data[0].title);
      let datafeed = "";      
      data.map((values) => {   
        console.log(typeof values)
        
        
        
         
        // console.log = (values.indexOf('media:content'))

        datafeed += `<div className=${styles.cards}><h1>${values.title}</h1> <h5>${values.pubDate} </h5><img src=${values["media:content"][0].$[ "url"]} alt="img"/> <p className=${styles.author}> By : ${values["dc:creator"]}</p><p>${values.description}<p> </div>`
        console.log(values)
        
         

       // console.log(values.description)
        
      })
      // console.log(typeof datafeed)
      document.getElementById("content").innerHTML = datafeed;

    })
      .catch(error => console.log('error - in fetch'))
  
   

  return (
    
     
    <div className={styles.container}>
      <h1 >HighLights</h1>
        <div className={styles.wrapper}>
        
        <div className={styles.section1}>
           
          <div className={styles.content} id="content">  </div>
          
          
           
        </div>
         
       



        </div>
        



     </div>
  
  
  
   
    

  )
  
}
 
 