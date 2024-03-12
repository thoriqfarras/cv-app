import { useState } from 'react';
import Dropdown from './components/dropdown';
import Input from './components/input';
import { experiences } from './utils/experienceData';
import { v4 as uuid } from 'uuid';

function App() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeForm, setActiveForm] = useState('');
  const [formValues, setFormValues] = useState({});
  const experience = {
    id: -1,
    employer: '',
    position: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
  };

  function handleDropdownClick(index) {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  }

  function showForm(type) {
    setActiveForm(type);
  }

  function handleCancelBtn() {
    setActiveForm('');
  }

  function handleSaveBtn() {
    experiences.push(formValues);
    setActiveForm('');
    setFormValues({});
    console.log({ experiences });
  }

  function handleInputChange(e) {
    if (activeForm === 'experience') {
      // setFormValues(experience);
      let newEntry = { ...formValues, id: uuid() };
      newEntry[e.target.name] = e.target.value;
      console.log({ newEntry });
      setFormValues(newEntry);
    }
  }

  function fillActiveForm(data) {}

  return (
    <div className="bg-red-300 h-screen">
      <section>
        <Dropdown
          title="Personal Info"
          onShow={() => handleDropdownClick(0)}
          isActive={activeIndex === 0}
        >
          <Input
            type="text"
            label="Full Name"
            id="full-name"
            name="full-name"
          />
          <Input type="text" label="Title" id="title" name="title" />
          <Input type="text" label="Email" id="email" name="email" />
          <Input
            type="text"
            label="Phone Number"
            id="phone-num"
            name="phone-num"
          />
          <Input type="text" label="Location" id="location" name="location" />
        </Dropdown>
        <Dropdown
          title="Experience"
          onShow={() => handleDropdownClick(1)}
          isActive={activeIndex === 1}
        >
          {activeForm === 'experience' && (
            <>
              <Input
                type="text"
                label="Employer"
                id="employer"
                name="employer"
                onChange={handleInputChange}
              />
              <Input
                type="text"
                label="Position"
                id="position"
                name="position"
                onChange={handleInputChange}
              />
              <Input
                type="text"
                label="Start Date"
                id="start-date"
                onChange={handleInputChange}
                name="startDate"
              />
              <Input
                type="text"
                label="End Date"
                id="end-date"
                onChange={handleInputChange}
                name="endDate"
              />
              <Input
                type="text"
                label="Location"
                onChange={handleInputChange}
                id="location"
                name="location"
              />
              <Input
                type="text"
                label="Description"
                onChange={handleInputChange}
                id="description"
                name="description"
              />
            </>
          )}
          {activeForm ? (
            <>
              <button
                type="button"
                className="w-fit border-2 border-zinc-600"
                onClick={handleCancelBtn}
              >
                Cancel
              </button>
              <button
                type="button"
                className="w-fit border-2 border-zinc-600"
                onClick={handleSaveBtn}
              >
                Save
              </button>
            </>
          ) : (
            <>
              {experiences.map((exp) => (
                <div key={exp.id} className="flex">
                  <p>{exp.employer}</p>
                  <button
                    className="w-fit border-2 border-zinc-600"
                    onClick={() => {
                      showForm('experience');
                      setFormValues(exp);
                    }}
                  >
                    Edit
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="w-fit border-2 border-zinc-600"
                onClick={() => showForm('experience')}
              >
                Add
              </button>
            </>
          )}
        </Dropdown>
      </section>
      <section></section>
    </div>
  );
}

export default App;
