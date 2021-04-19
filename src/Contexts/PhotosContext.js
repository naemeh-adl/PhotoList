import React from 'react';

const PhotosContext = React.createContext({
    photos:[],
    fetchphotos:()=>{console.log("fetttttttttttt");}
});

export default PhotosContext;