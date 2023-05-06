import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function LaAnh(props) {
  const router = useRouter()
  const [videoId, setVideoId] = useState<any>()
  console.log(router)

  function getVideoId() {
    setVideoId(router?.query?.v)
  }

  useEffect(() => {
    getVideoId()
  }, [router])



  return (

    <div className="mt-10 shadow-xl opacity-40 hover:opacity-100 smooth-transform">


      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>

      </iframe>

    </div>

  );
}

export default LaAnh;
