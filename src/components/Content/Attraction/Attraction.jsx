import "./Attraction.css"

function showImage(imageId) {
    let image = document.getElementById(imageId);
    image.classList.add("show");
}

function hideImage(imageId) {
    let image = document.getElementById(imageId);
    image.classList.remove("show");
}

export function Attraction({name, imageId, description}){
    return(
      <div className="attraction">
          <h2
              onMouseOverCapture={() => showImage(imageId)}
              onMouseOutCapture={() => hideImage(imageId)}
          >{name}</h2>
          <p>{description}</p>
      </div>
    );
}