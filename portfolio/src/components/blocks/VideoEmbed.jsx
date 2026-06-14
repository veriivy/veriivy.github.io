// Pass the embed URL directly:
//   YouTube: https://www.youtube.com/embed/VIDEO_ID
//   Vimeo:   https://player.vimeo.com/video/VIDEO_ID
export default function VideoEmbed({ src, title = 'Video' }) {
  return (
    <div className="block-video">
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
