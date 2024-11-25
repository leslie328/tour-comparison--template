react, { usestate, useEffect } from "react";
button from "./Button"
Gallery (){
    [gallery, setGallery] =usestate ([])
}
   fetch url ='https://course-api.com/react-tours-project';
fetch(url)
then(response => response.json())

return (
    <div>
      <h1> Tours </h1>
      <div className="Tours">
        {tours.length === 0 ? (
          <p>No tours available at the moment.</p>  // If no tours are fetched
        ) : (
          tours.map((tour) => (
            <div key={tour.id} className="tour-1">
              <img src={tour.image} alt={tour.name} className="tour-image" />
              <div className="tour-details"></div>
              <h2>{tour.name}</h2>
              <p className="tour-price">Price: ${tour.price}</p>
              <p className="tour-info">
                  {tour.showDescription}
                   {/* "Not Interested" button */}
                <button onClick={() => handleRemoveTour(tour.1)}>Not Interested</button>


