const PersonSkills = (props) => {
  if (!props.showInformation || !props.showInformation.length) {
    return null; // or a loading state
  }

  const skills = Object.entries(props.showInformation[0].skills);

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return skills.map(([skill, emoji]) => (
    <span
      className="skill"
      style={{ backgroundColor: getRandomColor() }}
      key={skill}
    >
      {skill} {emoji}
    </span>
  ));
};

export default PersonSkills;
