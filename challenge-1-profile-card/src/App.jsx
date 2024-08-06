import { useEffect, useState } from "react";
import axios from "axios";
import PersonHeader from "./components/PersonHeader";
import PersonPicture from "./components/PersonPicture";
import PersonDescription from "./components/PersonDescription";
import PersonSkills from "./components/PersonSkills";

function App() {
  const [showInformation, setShowInformation] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching data...");
    axios
      .get("http://localhost:3001/descriptions")
      .then((response) => {
        console.log("Raw response data:", response);
        console.log("Fetched data:", response.data);
        setShowInformation(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      });
  }, []);

  console.log("Current state:", showInformation);

  if (error) {
    return <p>{error}</p>;
  }

  if (showInformation.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="card">
      <PersonPicture showInformation={showInformation} />
      <PersonHeader showInformation={showInformation} />
      <div className="data">
        <PersonDescription showInformation={showInformation} />
        <div className="skill-list">
          <PersonSkills showInformation={showInformation} />
        </div>
      </div>
    </div>
  );
}

export default App;
