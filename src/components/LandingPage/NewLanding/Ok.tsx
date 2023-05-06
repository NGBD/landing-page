import React from 'react';

function Ok(props) {
  return (
    <div className="mt-10 shadow-xl opacity-75 hover:opacity-100 smooth-transform">
      <section
        className="flex justify-center mt-2"
        style={{ opacity: '1', height: 'auto' }}>
        <iframe className="rounded-2xl w-[90vw] md:w-[700px] aspect-video" src="https://www.youtube.com/embed/SNES5Y-tYxM?autoplay=1&amp;loop=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        </iframe>
      </section>
    </div>
  );
}

export default Ok;
