import { useState, useRef } from 'react';
import Dropdown from './components/dropdown';
import PersonalInfoForm from './components/PersonalInfoForm';
import WorkExperienceForm from './components/WorkExperienceForm';
import EducationForm from './components/EducationForm';
import SkillForm from './components/SkillForm';
import Preview from './components/Preview';
import Header from './components/Header';
import { PlusSign } from './components/icons';
import { cvData } from './utils/cvData';
import { v4 as uuid } from 'uuid';
import { useReactToPrint } from 'react-to-print';
import { isEmpty } from 'lodash';
import { Chevron } from './components/icons';

function App() {
  const [activeDropdown, setActiveDropdown] = useState(-1);
  const [activeSubDropdown, setActiveSubDropdown] = useState(-1);
  const [personalInfo, setPersonalInfo] = useState(cvData.personalInfo);
  const [education, setEducation] = useState(cvData.education);
  const [workExperiences, setWorkExperiences] = useState(
    cvData.workExperiences
  );
  const [skills, setSkills] = useState(cvData.skills);

  const previewRef = useRef();
  const handlePrint = useReactToPrint({ content: () => previewRef.current });

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

  function moveItemUp(e, dataTitle, data, itemId) {
    e.preventDefault();
    const itemMoved = data.find((d) => d.id === itemId);
    const index = data.indexOf(itemMoved);
    const newEntry = [
      ...data.toSpliced(index, 1).toSpliced(index - 1, 0, itemMoved),
    ];
    if (dataTitle === 'experiences') {
      setWorkExperiences(newEntry);
    } else if (dataTitle === 'education') {
      setEducation(newEntry);
    } else if (dataTitle === 'skills') {
      setSkills(newEntry);
    }
  }

  function resetData() {
    setPersonalInfo({ fullName: '', email: '', phone: '', location: '' });
    setWorkExperiences([]);
    setEducation([]);
    setSkills([]);
  }

  function useSampleData() {
    setPersonalInfo(cvData.personalInfo);
    setWorkExperiences(cvData.workExperiences);
    setEducation(cvData.education);
    setSkills(cvData.skills);
  }

  function moveItemDown(e, dataTitle, data, itemId) {
    e.preventDefault();
    const itemMoved = data.find((d) => d.id === itemId);
    const index = data.indexOf(itemMoved);
    const newEntry = data
      .toSpliced(index, 1)
      .toSpliced(index + 1, 0, itemMoved);
    if (dataTitle === 'experiences') {
      setWorkExperiences(newEntry);
    } else if (dataTitle === 'education') {
      setEducation(newEntry);
    } else if (dataTitle === 'skills') {
      setSkills(newEntry);
    }
  }

  return (
    <div className="bg-gray-800 h-full flex flex-col md:flex-row [&>*]:flex-1 [&>*]:my-auto relative scroll-smooth">
      <section className="[&>*]:mb-4 text-zinc-100 h-full md:h-screen md:overflow-y-scroll p-8 md:p-16">
        <Header
          resetData={resetData}
          useSampleData={useSampleData}
          printCV={handlePrint}
        />
        <Dropdown
          title="Personal Info"
          headerClass="font-bold shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] bg-gray-800"
          childClass="bg-gray-900 rounded-b-xl shadow-[0_3px_10px_2px_rgba(0,0,0,0.3)]"
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
          headerClass="font-bold shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] bg-gray-800"
          childClass="bg-gray-900 rounded-b-xl shadow-[0_3px_10px_2px_rgba(0,0,0,0.3)]"
          onShow={() => handleDropdownClick(1)}
          isActive={activeDropdown === 1}
        >
          {workExperiences.map((exp, index) => (
            <Dropdown
              key={exp.id}
              title={exp.company}
              wrapperClass="mb-2"
              overwriteHeader={true}
              headerClass="border-2 border-gray-800"
              childClass="bg-gray-800 rounded-b-xl"
              onShow={() => handleSubDropdownClick(exp.id)}
              isActive={activeSubDropdown === exp.id}
            >
              <div className="flex flex-col lg:flex-row gap-2 text-left">
                <span className="font-bold">{exp.company}</span>
                {exp.role && <span className="opacity-60">{exp.role}</span>}
                {(exp.startDate || exp.endDate) && (
                  <span className="italic opacity-40">
                    {exp.startDate && exp.endDate
                      ? `${exp.startDate} - ${exp.endDate}`
                      : exp.startDate || exp.endDate}
                  </span>
                )}
              </div>
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
                onMoveUp={(e) =>
                  moveItemUp(e, 'experiences', workExperiences, exp.id)
                }
                onMoveDown={(e) =>
                  moveItemDown(e, 'experiences', workExperiences, exp.id)
                }
                isOnTop={index === 0}
                isOnBottom={index === workExperiences.length - 1}
              />
            </Dropdown>
          ))}
          <button
            className="px-12 py-2 mx-auto bg-blue-600 rounded-md w-fit mt-4"
            onClick={() =>
              setWorkExperiences([
                ...workExperiences,
                { id: uuid(), company: 'New Experience' },
              ])
            }
          >
            <PlusSign />
          </button>
        </Dropdown>
        <Dropdown
          title="Education"
          headerClass="font-bold shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] bg-gray-800"
          childClass="bg-gray-900 rounded-b-xl shadow-[0_3px_10px_2px_rgba(0,0,0,0.3)]"
          onShow={() => handleDropdownClick(2)}
          isActive={activeDropdown === 2}
        >
          {education.map((ed, index) => (
            <Dropdown
              key={ed.id}
              title={ed.certification}
              wrapperClass="mb-2"
              overwriteHeader={true}
              headerClass="border-2 border-gray-800"
              childClass="bg-gray-800 rounded-b-xl"
              onShow={() => handleSubDropdownClick(ed.id)}
              isActive={activeSubDropdown === ed.id}
            >
              <div className="flex flex-col lg:flex-row gap-2 text-left">
                <span className="font-bold">{ed.certification}</span>
                {ed.school && <span className="opacity-60">{ed.school}</span>}
                {(ed.startDate || ed.endDate) && (
                  <span className="italic opacity-40">
                    {ed.startDate && ed.endDate
                      ? `${ed.startDate} - ${ed.endDate}`
                      : ed.startDate || ed.endDate}
                  </span>
                )}
              </div>
              <EducationForm
                data={ed}
                onEdit={(e) =>
                  handleSubFormChange(e, 'education', education, ed.id)
                }
                onDelete={() => {
                  setEducation(education.filter((e) => ed.id !== e.id));
                }}
                onMoveUp={(e) => moveItemUp(e, 'education', education, ed.id)}
                onMoveDown={(e) =>
                  moveItemDown(e, 'education', education, ed.id)
                }
                isOnTop={index === 0}
                isOnBottom={index === education.length - 1}
              />
            </Dropdown>
          ))}
          <button
            className="px-12 py-2 mx-auto bg-blue-600 rounded-md w-fit mt-4"
            onClick={() =>
              setEducation([
                ...education,
                { id: uuid(), certification: 'New certification' },
              ])
            }
          >
            <PlusSign></PlusSign>
          </button>
        </Dropdown>
        <Dropdown
          title="Skills"
          headerClass="font-bold shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] bg-gray-800"
          childClass="bg-gray-900 rounded-b-xl shadow-[0_3px_10px_2px_rgba(0,0,0,0.3)]"
          onShow={() => handleDropdownClick(3)}
          isActive={activeDropdown === 3}
        >
          {skills.map((skill, index) => (
            <Dropdown
              key={skill.id}
              title={skill.skill}
              wrapperClass="mb-2"
              overwriteHeader={true}
              headerClass="border-2 border-gray-800"
              childClass="bg-gray-800 rounded-b-xl"
              onShow={() => handleSubDropdownClick(skill.id)}
              isActive={activeSubDropdown === skill.id}
            >
              <div className="flex flex-col lg:flex-row gap-2 text-left">
                <span className="font-bold">{skill.skill}</span>
                {skill.level && (
                  <span className="opacity-60">{skill.level}</span>
                )}
              </div>
              <SkillForm
                data={skill}
                onEdit={(e) =>
                  handleSubFormChange(e, 'skills', skills, skill.id)
                }
                onDelete={() =>
                  setSkills(skills.filter((s) => skill.id !== s.id))
                }
                onMoveUp={(e) => moveItemUp(e, 'skills', skills, skill.id)}
                onMoveDown={(e) => moveItemDown(e, 'skills', skills, skill.id)}
                isOnTop={index === 0}
                isOnBottom={index === skills.length - 1}
              />
            </Dropdown>
          ))}
          <button
            className="px-12 py-2 mx-auto bg-blue-600 rounded-md w-fit mt-4"
            onClick={() =>
              setSkills([...skills, { id: uuid(), skill: 'New Skill' }])
            }
          >
            <PlusSign />
          </button>
        </Dropdown>
      </section>
      <section className="h-full md:h-screen overflow-scroll p-16">
        <Preview
          personalInfo={personalInfo}
          workExperiences={workExperiences}
          education={education}
          skills={skills}
          ref={previewRef}
        />
      </section>
    </div>
  );
}

export default App;
