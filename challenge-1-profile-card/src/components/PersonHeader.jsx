const PersonHeader = (props) => {
  if (!props.showInformation || !props.showInformation.length) {
    return null; // or a loading state
  }
  return (
    <h1 style={{ textAlign: "center" }}>{props.showInformation[0].name}</h1>
  );
};

export default PersonHeader;
