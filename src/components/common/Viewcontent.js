import Nav from '../Instructors/Nav';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function Viewcontent() {
  const { id } = useParams();
  console.log(id);
  const [initialValue, setInitialValue] = useState({
    Name: '',
    Description: '',
    Duration: '',
    Links: []
  });


  useEffect(() => {
    Axios.get(`https://infonity-server.onrender.com/courseRoute/view-content/${id}`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          const { Name, Description, Duration, Links } = res.data;
          setInitialValue({ Name, Description, Duration, Links });
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, [id]);

  // Check if data is available before rendering
  // const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);

  // const handleLinkClick = (url) => {
  //   setSelectedVideoUrl(url);
  // };


  return (
    <div>
      <Nav />
      {/* <h2>Content for {initialValue.Name}</h2>
      <p>{initialValue.Description}</p>
      <h3>Links:</h3>
      <br></br>
      <ul>
        {initialValue.Links.map((link, index) => (
          <li key={index} style={{listStyle:"none"}}>
            
            <a class = "text-decoration-none text-dark bg-secondary py-2 px-3 my-1 "href={link.Url}>{link.Linkname}</a>
            
          </li>
        ))}
      </ul> */}

      <div class="container mt-4">
        <div class="content col-lg-8 col-md-6 col-sm-12 mx-auto">
          <div class="content-header">
            <h2 class="mb-0">Explore {initialValue.Name}</h2>
          </div>
          <div class="content-body">
            <p class="lead creative-content mt-3"> Course Description : {initialValue.Description}</p>
            <h3 class="mb-4">Resource Links:</h3>
            <ul class="list-unstyled">
              {initialValue.Links.map((link, index) => (
                <li key={index}>
                  <a class="btn btn-primary link-btn" href={link.Url}>{link.Linkname}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


      {/*       
    <div className="container">
      <div className="links-container">
        <h2>Content for {initialValue.Name}</h2>
        <p>{initialValue.Description}</p>
        <h3>Links:</h3>
        <ul>
          {initialValue.Links.map((link, index) => (
            <li key={index}>
              <button onClick={() => handleLinkClick(link.Url)}>
                {link.Linkname}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedVideoUrl && (
        <div className="video-container">
          <h3>Selected Video:</h3>
          <iframe
            width="100%"
            height="100%"
            src={selectedVideoUrl}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div> */}
    </div>
  );
}

export default Viewcontent;



// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Your Education Platform</title>
//   <!-- Bootstrap CSS -->
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
// <style>






{/* <!-- Bootstrap JS and dependencies (jQuery and Popper.js) -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

</body>
</html> */}


