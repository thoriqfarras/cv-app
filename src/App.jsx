import { useState, Fragment } from 'react';
import Dropdown from './components/dropdown';
import PersonalInfoForm from './components/PersonalInfoForm';
import WorkExperienceForm from './components/WorkExperienceForm';
import EducationForm from './components/EducationForm';
import SkillForm from './components/SkillForm';
import { personalInfo as _personalInfo } from './utils/personalInfoData';
import { experiences } from './utils/experienceData';
import { education as educationalExperiences } from './utils/educationData';
import { skills as skillsData } from './utils/skillData';
import { v4 as uuid } from 'uuid';
import { isEmpty } from 'lodash';

function App() {
  const [activeDropdown, setActiveDropdown] = useState(-1);
  const [activeSubDropdown, setActiveSubDropdown] = useState(-1);
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState(educationalExperiences);
  const [workExperiences, setWorkExperiences] = useState(experiences);
  const [skills, setSkills] = useState(skillsData);

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

  function handleWorkExperienceFormChange(e, id) {
    const newEntry = [...workExperiences];
    newEntry.find((exp) => exp.id === id)[e.target.name] = e.target.value;
    setWorkExperiences(newEntry);
  }

  function handleEducationFormChange(e, id) {
    const newEntry = [...education];
    newEntry.find((ed) => ed.id === id)[e.target.name] = e.target.value;
    setEducation(newEntry);
  }

  function handleSkillFormChange(e, id) {
    const newEntry = [...skills];
    newEntry.find((skill) => skill.id === id)[e.target.name] = e.target.value;
    setEducation(newEntry);
  }

  function moveItemUp(id) {
    const itemMoved = workExperiences.find((exp) => exp.id === id);
    const index = workExperiences.indexOf(itemMoved);
    // console.log([...workExperiences.toSpliced(index - 1, 0, itemMoved)]);
    setWorkExperiences([
      ...workExperiences.toSpliced(index, 1).toSpliced(index - 1, 0, itemMoved),
    ]);
  }

  function moveItemDown(id) {
    const itemMoved = workExperiences.find((exp) => exp.id === id);
    const index = workExperiences.indexOf(itemMoved);
    // console.log([...workExperiences.toSpliced(index - 1, 0, itemMoved)]);
    setWorkExperiences([
      ...workExperiences.toSpliced(index, 1).toSpliced(index + 1, 0, itemMoved),
    ]);
  }

  console.log(education);

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
            onCancel={() => {
              setPersonalInfo({});
              handleDropdownClick(0);
            }}
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
                onEdit={(e) => handleWorkExperienceFormChange(e, exp.id)}
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
                onEdit={(e) => handleEducationFormChange(e, ed.id)}
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
                onEdit={(e) => handleSkillFormChange(e, skill.id)}
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
