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
    vid: {
      width: "20vw",
      height: "20vw",
      display: "block",
      margin: "0",
    },
  };
  return (
    <div style={styles.container}>
      <video autoPlay loop muted playsInline style={styles.vid}>
        <source src="/loading.webm" type="video/webm" />
      </video>
    </div>
  );
}
