import "./banner.css";
import { useState, useCallback } from "react";

export default function Banner() {
  const [z, setZ] = useState(0);
  const x = [0, 1, 2];
  let i;
  function bannerAnim() {
    for (i = 0; i < x.length; i++) {
      document.getElementById(`${x[i]}`).style.opacity = 0;
    }
    document.getElementById(`${x[z]}`).style.opacity = 1;
    setZ((z += 1));
    if (z > x.length - 1) {
      setZ(0);
    }
  }
  useCallback(() => {
    setZ(0);
  }, []);
  useCallback(setTimeout(bannerAnim, 3000));

  return (
    <header className="head">
      <div className="slz">
        <picture>
          <source srcSet="1.webp" type="image/webp" />
          <img id={0} src="1.jpg" alt="" className="bg" />
        </picture>
      </div>
      <div className="slz">
        <picture>
          <source srcSet="2.webp" type="image/webp" />
          <img id={1} src="2.jpg" alt="" className="bg" />
        </picture>
      </div>
      <div className="slz">
        <picture>
          <source srcSet="3.webp" type="image/webp" />
          <img id={2} src="3.jpg" alt="" className="bg" />
        </picture>
      </div>
    </header>
  );
}
