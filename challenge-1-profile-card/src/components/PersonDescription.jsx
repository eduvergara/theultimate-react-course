const PersonDescription = (props) => {
  if (!props.showInformation || !props.showInformation.length) {
    return null; // or a loading state
  }
  return <p>{props.showInformation[0].content}</p>;
};

export default PersonDescription;
