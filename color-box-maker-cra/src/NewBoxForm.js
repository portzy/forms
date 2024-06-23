import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function NewBoxForm({ createBox }) {
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    });

    const handleChange = evt => {
        //updates state when input changes
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData, //creates new object with all properties of existing state
            [name]: value
        }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        createBox({...formData, id: uuidv4() });
        setFormData({
            height: "",
            width: "",
            backgroundColor: "" })
    };

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="height">Height</label>
              <input
                onChange={handleChange}
                type="text"
                name="height"
                value={formData.height}
                id="height"
              />
            </div>
            <div>
              <label htmlFor="width">Width</label>
              <input
                onChange={handleChange}
                type="text"
                name="width"
                id="width"
                value={formData.width}
              />
            </div>
            <div>
              <label htmlFor="backgroundColor">Background Color</label>
              <input
                onChange={handleChange}
                type="text"
                name="backgroundColor"
                value={formData.backgroundColor}
                id="backgroundColor"
              />
            </div>
            <button id="newBoxButton">Add a new box!</button>
          </form>
        </div>
      );
    }

export default NewBoxForm;
