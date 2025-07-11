export default function Youtube({ src }: { src: string }) {
  return (
    <div className='aspect-video'>
      <iframe
        className='h-full w-full'
        src={src}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
    </div>
  );
}
