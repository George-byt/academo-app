import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbums } from "../redux/actions/albumActions";
import '../styles/Albums.css'

const Albums = () => {
  const dispatch = useDispatch()

  const { albums } = useSelector(store => store.albumsReducer)

  useEffect(() => {
    dispatch(fetchAlbums()); //
  }, [dispatch])
  return (
    <section className="album-section p-4">
      <div className="container">
        <h1 className="text-light">Discografía</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          {
            albums.map((album, index) => (
              <div className="col mb-3" key={index}>
                <div className="card shadow" style={{
                  'background': `url(${album.poster})`,
                  'backgroundPosition': 'center',
                  'backgroundSize': 'cover',
                  'backgroundRepeat': 'no-repeat'
                }}>
                  <div className="card-body">
                    <h1 className="text-center">{album.title}</h1>
                    <h3 className="text-center">{album.year}</h3>
                    <p className="text-center">{album.autor}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Albums;
