export default function Errorpa() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "60vh",
      backgroundColor: "transparent",
      padding: "0",
    },
    text: {
      fontSize: "5vw",
      color: "white",
      fontFamily: " 'El Messiri', sans-serif",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.text}>الصفحة غير موجودة 404</h1>
    </div>
  );
}
