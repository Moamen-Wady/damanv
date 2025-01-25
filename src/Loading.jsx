export default function Loading() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "auto",
      backgroundColor: "transparent",
      padding: "0 ",
      flexDirection: "column",
    },
    text: {
      fontSize: "5vw",
      color: "white",
      fontFamily: " 'El Messiri', sans-serif",
      padding: "0",
      margin: "0",
    },
    img: {
      width: "12vw",
      height: "12vw",
      display: "block",
      margin: "auto",
    },
  };
  return (
    <div style={styles.container}>
      <picture>
        <source srcSet="logo.webp" type="image/webp" />
        <img src="logo.png" alt="Loading" style={styles.img} />
      </picture>
      <h1 style={styles.text}>Loading...</h1>
    </div>
  );
}
