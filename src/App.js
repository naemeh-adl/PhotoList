import "./App.css";
import {useState} from "react"
import PhotoshList from "./Components/PhotosList";
import PhotosContext from "./Contexts/PhotosContext";
import ThemeContext from "./Contexts/ThemeContext";

function App() {
  const [photos, fetchMyphotos]= useState( [{title:"Sunflower", imgSrc:"https://www.almanac.com/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/image_nodes/sunflower-1627193_1920.jpg?itok=z0U222mG"},
  {title:"Annual", imgSrc:"https://hgtvhome.sndimg.com/content/dam/images/hgtv/stock/2018/4/25/Shutterstock_akarapong_71117056_RedFlowers_zinnias.jpg.rend.hgtvcom.966.644.suffix/1524687121431.jpeg"}
]);
 const fetchphotos=()=>{
   debugger;
   if(photos.length===2){
    fetchMyphotos([{title:"Roses", imgSrc:"https://www.weekendnotes.com/im/004/05/facebppl-1.jpg"},
   {title:"Lotus", imgSrc:"https://english.mathrubhumi.com/polopoly_fs/1.3215425.1539237272!/image/image.jpg_gen/derivatives/landscape_894_577/image.jpg"}
 ,{title:"Lilium", imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Lilium_candidum_1.jpg/1200px-Lilium_candidum_1.jpg"}
  ])
}else{
  fetchMyphotos([{title:"Sunflower", imgSrc:"https://www.almanac.com/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/image_nodes/sunflower-1627193_1920.jpg?itok=z0U222mG"},
   {title:"Annual", imgSrc:"https://hgtvhome.sndimg.com/content/dam/images/hgtv/stock/2018/4/25/Shutterstock_akarapong_71117056_RedFlowers_zinnias.jpg.rend.hgtvcom.966.644.suffix/1524687121431.jpeg"}
 ]);
}
 };
  return (
    <div className="App">
      <PhotosContext.Provider value={{photos,fetchphotos} }>
        <ThemeContext.Provider value={'dark'}>
          <PhotoshList></PhotoshList>
        </ThemeContext.Provider>
      </PhotosContext.Provider>
    </div>
  );
}

export default App;
