import React from 'react'
import Layer from '../Layer/Layer'
import requests from '../../../utility/requests'


const LayerList = () => {
  return (
    <>
      <Layer 
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeLayer={true}
      />
      <Layer title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Layer title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Layer title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Layer title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Layer title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Layer title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Layer title="TV Shows" fetchUrl={requests.fetchTvShow} />
      <Layer title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      {/* <Layer title="History Movie" fetchUrl={requests.fetchHistory} /> */}
      
      
    </>
  )
}

export default LayerList

