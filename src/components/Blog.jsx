const Blog = () => {
  return (
    <div className="w-full h-screen bg-black">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/B9oSvPaXaiU?autoplay=1&si=AYRfeOxdTRgrTkS7"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Blog;
