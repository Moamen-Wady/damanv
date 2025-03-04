export default function Loading() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "transparent",
      padding: "0 ",
      flexDirection: "column",
    },
    img: {
      width: "12vw",
      height: "12vw",
      display: "block",
      margin: "0",
    },
  };
  return (
    <div style={styles.container}>
      <img src="loading.gif" alt="Loading" style={styles.img} />
    </div>
  );
}
