import React, { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";
import PhotosContext from "../Contexts/PhotosContext";

export default function PhotoshList() {
  const theme = useContext(ThemeContext);
  const { photos, fetchphotos } = useContext(PhotosContext);
  return (
    <div id="photos-list-container" style={{"background":theme==="dark"?"black":"white"}}>
      <ul style={{ "listStyleType": "none" }} id="photos-list">
        {photos &&
          photos.map((x, index) => {
            return (
              <li key={index}>
                <h3 style={{"color":theme==="light" ? "black":"white"}}>{x.title}</h3>
                <img src={x.imgSrc} alt="flower" style={{width:400, height:400}}></img>
              </li>
            );
          })}
      </ul>
      <button style={{margin:2}} id="fetch-photos" onClick={()=>fetchphotos()}>Fetch Photos</button>
    </div>
  );
}
