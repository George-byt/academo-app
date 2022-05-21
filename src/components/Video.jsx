import React from 'react';

const Video = () => {
  return (
    <section className='video-section'>
      <div className='container d-flex justify-content-center'>
        {/* <div className='row row-cols-2'> */}
          {/* <div className='col'>
            <h1 className='text-center text-capitalize'>para la guerra nada</h1>
          </div> */}
          {/* <div className='col'> */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/GBF1sEqGzGw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  )
}

export default Video;
