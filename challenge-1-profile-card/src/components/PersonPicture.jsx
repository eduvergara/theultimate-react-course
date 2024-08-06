const PersonPicture = (props) => {
  if (!props.showInformation || !props.showInformation.length) {
    return null; // or a loading state
  }

  const photo_name = props.showInformation[0].picture;

  return <img className="avatar" src={`src/assets/${photo_name}`}></img>;
};

export default PersonPicture;
