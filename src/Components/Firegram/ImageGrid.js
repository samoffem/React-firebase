import React from 'react'
import useFirestore from '../../hooks/useFirestore'


const ImageGrid = ({setSelectedImage}) => {
    const {docs} = useFirestore('images')
    return (
        <div className="img-grid">
            {docs && docs.map((doc)=>(
                <div className="img-wrapper" key={doc.id} onClick={()=>setSelectedImage(doc.url)}>
                    <img src={doc.url} alt="pictures"/>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid
