const PersonSkills = (props) => {
  const skillList = props.showInformation[0].skills;

  // Map over the skillList array, creating a span element for each skill
  // and Display an emoji based on the skill level
  return skillList.map((skill) => (
    <span
      // Assign the class "skill" to each span element
      className="skill"
      // Set the background color of the span to the color property of the current skill
      style={{ backgroundColor: skill.color }}
      // Use the skill name as the unique key for each span element
      key={skill.skill}
    >
      {skill.skill}
      {skill.level === "advanced"
        ? " 👩‍💻 "
        : skill.level === "intermediate"
        ? " 🤭 "
        : skill.level === "beginner"
        ? " 😂 "
        : ""}
    </span>
  ));
};

export default PersonSkills;
