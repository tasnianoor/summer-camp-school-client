

const Banner = () => {
  return (
      <div data-aos="flip-down" className="carousel w-full mt-22" >
          <div id="slide1" className="carousel-item relative w-full mt-20">
              <div className="hero h-[100vh]" style={{ backgroundImage: `url("https://plus.unsplash.com/premium_photo-1661673824709-436b0e257b46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")` }}>
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className="hero-content text-center text-neutral-content">
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                          <a href="#slide4" className="btn btn-circle">❮</a>
                          <a href="#slide2" className="btn btn-circle">❯</a>
                      </div>
                      <div className="max-w-2xl p-7 bg-[#0000005d] rounded-xl text-justify text-[white]">
                          <h1 className="mb-5 text-5xl font-bold">Summer Camps</h1>
                          <p className="mb-5">Welcome to the summer camp rainbow drawing school. At rainbow school, our mission is to provide excellence summer camp for families living in the greater local area. Here you’ll find exceptional teachers, curriculum and learning environments that encourage children to learn, play, and explore in a safe, healthy, and nurturing environment promoting creative thinking.</p>
                          <button className="btn btn-warning">Explore More</button>
                      </div>
                  </div>
              </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full mt-20">
              <div className="hero h-[100vh]" style={{ backgroundImage: `url("https://media.istockphoto.com/id/626660410/photo/two-kids-with-preschool-teacher-do-creative-work.jpg?s=1024x1024&w=is&k=20&c=W23CB51Sjak9FlF7SwHL76KuKZNieFfPgj5aCkj6Bjk=")` }}>
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className="hero-content text-center text-neutral-content">
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                          <a href="#slide1" className="btn btn-circle">❮</a>
                          <a href="#slide3" className="btn btn-circle">❯</a>
                      </div>
                      <div className="max-w-2xl p-7 bg-[#0000005d] rounded-xl text-justify text-[white]">
                      <h1 className="mb-5 text-5xl font-bold">Summer Camps</h1>
                          <p className="mb-5">Welcome to the summer camps rainbow drawing school. At rainbow school, our mission is to provide excellence summer camp for families living in the greater local area. Here you’ll find exceptional teachers, curriculum and learning environments that encourage children to learn, play, and explore in a safe, healthy, and nurturing environment promoting creative thinking.</p>
                          <button className="btn btn-warning">Explore More</button>
                      </div>
                  </div>
              </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full mt-20">
              <div className="hero h-[100vh]" style={{ backgroundImage: `url("https://media.istockphoto.com/id/1371150277/photo/high-angle-view-of-unrecognizable-boy-draw-the-planet-earth-with-people.jpg?s=1024x1024&w=is&k=20&c=6gbK0yJnkiz4QB2xGzlverR3mK4EL9ECkPHNMttiyNU=")` }}>
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className="hero-content text-center text-neutral-content">
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                          <a href="#slide2" className="btn btn-circle">❮</a>
                          <a href="#slide4" className="btn btn-circle">❯</a>
                      </div>
                      <div className="max-w-2xl p-7 bg-[#0000005d] rounded-xl text-justify text-[white]">
                      <h1 className="mb-5 text-5xl font-bold">Summer Camps</h1>
                          <p className="mb-5">Welcome to the summer camp rainbow drawing school. At rainow school, our mission is to provide excellence summer camp for families living in the greater local area. Here you’ll find exceptional teachers, curriculum and learning environments that encourage children to learn, play, and explore in a safe, healthy, and nurturing environment promoting creative thinking.</p>
                          <button className="btn btn-warning">Explore More</button>
                      </div>
                  </div>
              </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
              <div className="hero h-[100vh]" style={{ backgroundImage: `url("https://plus.unsplash.com/premium_photo-1663089540348-a90e027978c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")` }}>
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className="hero-content text-center text-neutral-content">
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                          <a href="#slide3" className="btn btn-circle">❮</a>
                          <a href="#slide1" className="btn btn-circle">❯</a>
                      </div>
                      <div className="max-w-2xl p-7 bg-[#0000005d] rounded-xl text-justify text-[white]">
                      <h1 className="mb-5 text-5xl font-bold">Summer Camps</h1>
                          <p className="mb-5">Welcome to the summer camp rainbow drawing school. At our rainbow school, our mission is to provide excellence  summer camp for families living in the greater local area. Here you’ll find exceptional teachers, curriculum and learning environments that encourage children to learn, play, and explore in a safe, healthy, and nurturing environment promoting creative thinking.</p>
                          <button className="btn btn-warning">Explore More</button>
                      </div>
                  </div>
              </div>
          </div>


      </div>
  );
};

export default Banner;