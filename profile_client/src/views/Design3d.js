import { useState, useCallback } from 'react';

import Sign from '../images/3D/sign.jpg';
import Sign2 from '../images/3D/sign2.js.jpg';
import Clock1 from '../images/3D/Clock1.jpg';
import Clock3 from '../images/3D/Clock3.png';
import Room_view from '../images/3D/Room_view2.jpg';
import Room_view2 from '../images/3D/Room_view3.jpg';
import Sofa_view from '../images/3D/Sofa_view1.jpg';
import Sofa_view2 from '../images/3D/Sofa_view2.jpg';
import Vases_view from '../images/3D/Vases_view1.jpg';
import TV_view from '../images/3D/TV_view1.jpg';

import ImageViewer from 'react-simple-image-viewer';


const Design3d = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const images = [Sign, Sign2, Clock1, Clock3, Room_view, Room_view2, Sofa_view, Sofa_view2, Vases_view, TV_view]

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);

    }, []);
    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    }

    console.log(Clock3)
    return (
        <div className='design3d-container'>
            <p className='design3d-paragraph'>
                3D models created using Blender
            </p>
            <cite>
                These are the screenshots of 3D Models I've created using such tool as Blender. 
            </cite>
            <div className='photo-container'>

                {
                    isViewerOpen && (
                        <ImageViewer
                            src={images}
                            currentIndex={currentImage}
                            disableScroll={false}
                            closeOnClickOutside={true}
                            onClose={closeImageViewer}
                        />
                    )
                }

                {images.map((src, index) => {
                    <img
                        src={src}
                        onClick={() => openImageViewer(index)}
                        width='300'
                        key={index}
                        style={{ margin: '2px' }}
                        alt=''
                    />
                })}{images.map((src, index) => (
                    <img
                        src={src}
                        onClick={() => openImageViewer(index)}
                        width='300'
                        key={index}
                        style={{ margin: '2px' }}
                        alt=''
                    />
                ))}
            </div>
        </div>
    )
}

export default Design3d;