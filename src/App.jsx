import { useState, Fragment } from 'react';
import Dropdown from './components/dropdown';
import PersonalInfoForm from './components/PersonalInfoForm';
import WorkExperienceForm from './components/WorkExperienceForm';
import EducationForm from './components/EducationForm';
import SkillForm from './components/SkillForm';
import { cvData } from './utils/cvData';
import { v4 as uuid } from 'uuid';
import { isEmpty } from 'lodash';

function App() {
  const [activeDropdown, setActiveDropdown] = useState(-1);
  const [activeSubDropdown, setActiveSubDropdown] = useState(-1);
  const [personalInfo, setPersonalInfo] = useState(cvData.personalInfo);
  const [education, setEducation] = useState(cvData.education);
  const [workExperiences, setWorkExperiences] = useState(
    cvData.workExperiences
  );
  const [skills, setSkills] = useState(cvData.skills);

  function handleDropdownClick(index) {
    if (activeDropdown === index) {
      setActiveDropdown(-1);
      setActiveSubDropdown(-1);
    } else {
      setActiveDropdown(index);
    }
  }

  function handleSubDropdownClick(index) {
    if (activeSubDropdown === index) {
      setActiveSubDropdown(-1);
    } else {
      setActiveSubDropdown(index);
    }
  }

  function handlePersonalInfoFormChange(e) {
    const newEntry = { ...personalInfo };
    newEntry[e.target.name] = e.target.value;
    setPersonalInfo(newEntry);
  }

  function handleSubFormChange(e, dataTitle, data, itemId) {
    const newEntry = [...data];
    newEntry.find((data) => data.id === itemId)[e.target.name] = e.target.value;
    if (dataTitle === 'experiences') {
      setWorkExperiences(newEntry);
    } else if (dataTitle === 'education') {
      setEducation(newEntry);
    } else if (dataTitle === 'skills') {
      setSkills(newEntry);
    }
  }

  function moveItemUp(id) {
    const itemMoved = workExperiences.find((exp) => exp.id === id);
    const index = workExperiences.indexOf(itemMoved);
    setWorkExperiences([
      ...workExperiences.toSpliced(index, 1).toSpliced(index - 1, 0, itemMoved),
    ]);
  }

  function moveItemDown(id) {
    const itemMoved = workExperiences.find((exp) => exp.id === id);
    const index = workExperiences.indexOf(itemMoved);
    setWorkExperiences([
      ...workExperiences.toSpliced(index, 1).toSpliced(index + 1, 0, itemMoved),
    ]);
  }

  return (
    <div className="bg-red-300 h-screen">
      <section>
        <Dropdown
          title="Personal Info"
          onShow={() => {
            handleDropdownClick(0);
          }}
          isActive={activeDropdown === 0}
        >
          <PersonalInfoForm
            personalInfo={personalInfo}
            onEdit={handlePersonalInfoFormChange}
          />
        </Dropdown>
        <Dropdown
          title="Work Experience"
          onShow={() => handleDropdownClick(1)}
          isActive={activeDropdown === 1}
        >
          {workExperiences.map((exp, index) => (
            <Dropdown
              key={exp.id}
              title={exp.company}
              onShow={() => handleSubDropdownClick(exp.id)}
              isActive={activeSubDropdown === exp.id}
            >
              <WorkExperienceForm
                data={exp}
                onEdit={(e) =>
                  handleSubFormChange(e, 'experiences', workExperiences, exp.id)
                }
                onDelete={() => {
                  setWorkExperiences(
                    workExperiences.filter((e) => e.id !== exp.id)
                  );
                }}
                onMoveUp={(e) => {
                  e.preventDefault();
                  moveItemUp(exp.id);
                }}
                onMoveDown={(e) => {
                  e.preventDefault();
                  moveItemDown(exp.id);
                }}
                isOnTop={index === 0}
                isOnBottom={index === workExperiences.length - 1}
              />
            </Dropdown>
          ))}
          <button
            className="border-2 border-zinc-650"
            onClick={() =>
              setWorkExperiences([
                ...workExperiences,
                { id: uuid(), company: 'New Experience' },
              ])
            }
          >
            Add
          </button>
        </Dropdown>
        <Dropdown
          title="Education"
          onShow={() => handleDropdownClick(2)}
          isActive={activeDropdown === 2}
        >
          {education.map((ed, index) => (
            <Dropdown
              key={ed.id}
              title={ed.certification}
              onShow={() => handleSubDropdownClick(ed.id)}
              isActive={activeSubDropdown === ed.id}
            >
              <EducationForm
                data={ed}
                onEdit={(e) =>
                  handleSubFormChange(e, 'education', education, ed.id)
                }
                onDelete={() => {
                  setEducation(education.filter((e) => ed.id !== e.id));
                }}
                onMoveUp={(e) => {
                  e.preventDefault();
                  moveItemUp(ed.id);
                }}
                onMoveDown={(e) => {
                  e.preventDefault();
                  moveItemDown(ed.id);
                }}
                isOnTop={index === 0}
                isOnBottom={index === education.length - 1}
              />
            </Dropdown>
          ))}
          <button
            className="border-2 border-zinc-650"
            onClick={() =>
              setEducation([
                ...education,
                { id: uuid(), certification: 'New certification' },
              ])
            }
          >
            Add
          </button>
        </Dropdown>
        <Dropdown
          title="Skills"
          onShow={() => handleDropdownClick(3)}
          isActive={activeDropdown === 3}
        >
          {skills.map((skill, index) => (
            <Dropdown
              key={skill.id}
              title={skill.skill}
              onShow={() => handleSubDropdownClick(skill.id)}
              isActive={activeSubDropdown === skill.id}
            >
              <SkillForm
                data={skill}
                onEdit={(e) =>
                  handleSubFormChange(e, 'skills', skills, skill.id)
                }
                onDelete={() =>
                  setSkills(skills.filter((s) => skill.id !== s.id))
                }
                onMoveUp={(e) => {
                  e.preventDefault();
                  moveItemUp(skill.id);
                }}
                onMoveDown={(e) => {
                  e.preventDefault();
                  moveItemDown(skill.id);
                }}
                isOnTop={index === 0}
                isOnBottom={index === skills.length - 1}
              />
            </Dropdown>
          ))}
          <button
            className="border-2 border-zinc-650"
            onClick={() =>
              setSkills([...skills, { id: uuid(), skill: 'New Skill' }])
            }
          >
            Add
          </button>
        </Dropdown>
      </section>
      <section>
        <h1 className="text-2xl font-bold">Personal Info</h1>

        <p>{personalInfo.fullName}</p>
        <p>{personalInfo.email}</p>
        <p>{personalInfo.phone}</p>
        <p>{personalInfo.location}</p>

        {!isEmpty(workExperiences) && (
          <>
            <h1 className="text-2xl font-bold">Work Experience</h1>
            {workExperiences.map((exp) => (
              <Fragment key={exp.id}>
                <p>{exp.company}</p>
                <p>{exp.role}</p>
                <p>{exp.startDate}</p>
                <p>{exp.endDate}</p>
                <p>{exp.location}</p>
                <p>{exp.description}</p>
                <hr />
              </Fragment>
            ))}
          </>
        )}
      </section>
    </div>
  );
}

export default App;
