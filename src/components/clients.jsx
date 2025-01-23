import "./clients.css";
export default function Clients() {
  return (
    <div>
      <div className="clientscont">
        <h1>Check Out Our Partners</h1>

        <div className="clients">
          <div className="ccard">
            <picture>
              <source srcSet="c1.webp" type="image/webp" />
              <img src="c1.png" loading="lazy" alt="" />
            </picture>
          </div>
          <div className="ccard">
            <picture>
              <source srcSet="c2.webp" type="image/webp" />
              <img src="c2.png" loading="lazy" alt="" />
            </picture>
          </div>
          <div className="ccard">
            <picture>
              <source srcSet="c3.webp" type="image/webp" />
              <img src="c3.png" loading="lazy" alt="" />
            </picture>
          </div>
          <div className="ccard">
            <picture>
              <source srcSet="c4.webp" type="image/webp" />
              <img src="c4.png" loading="lazy" alt="" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
