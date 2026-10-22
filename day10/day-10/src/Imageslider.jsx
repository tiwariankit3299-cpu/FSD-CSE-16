import { useState } from "react";

const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1035/600/400",
  "https://picsum.photos/id/1043/600/400",
  "https://picsum.photos/id/1050/600/400",
];

function ImageSlider() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="card">
      <h2>Image Slider</h2>
      <img src={images[index]} alt={`Slide ${index + 1}`} />
      <p>
        {index + 1} / {images.length}
      </p>
      <div className="buttons">
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}

export default ImageSlider;