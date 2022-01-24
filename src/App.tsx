import { JsonForms } from "@jsonforms/react";
import Typography from "@material-ui/core/Typography";
import "./App.css";
import schema from "schema.json";
import uischema from "uischema.json";
import { materialRenderers } from "@jsonforms/material-renderers";
import { useState } from "react";

const initData = {
  name: "John Doe",
  vegetarian: false,
  birthDate: "1985-06-02",
  personalData: {
    age: 34,
  },
  postalCode: "12345",
};

function App() {
  const [formData, setFormData] = useState(initData);

  const handleChange = (data: typeof initData) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Typography>
          Edit <code>src/App.js</code> and save to reload.
        </Typography>
        <JsonForms
          renderers={materialRenderers}
          data={formData}
          onChange={({ data }) => {
            handleChange(data);
          }}
          schema={schema}
          uischema={uischema}
        />
      </header>
    </div>
  );
}

export default App;
