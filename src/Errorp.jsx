export default function Errorp() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "60vh",
      backgroundColor: "transparent",
      padding: "0 ",
    },
    text: {
      fontSize: "6vw",
      color: "white",
      fontFamily: "sans-serif",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Page Not Found 404</h1>
    </div>
  );
}
