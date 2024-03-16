import { forwardRef } from 'react';

const Preview = forwardRef(function Preview(props, ref) {
  return (
    <div
      className="cv-container bg-zinc-100 aspect-[1/1.414] h-[48rem] p-12"
      ref={ref}
    >
      <h1 className="text-lg font-bold">{props.personalInfo.fullName}</h1>
      <p className="text-sm">{props.personalInfo.email}</p>
      <p className="text-sm">{props.personalInfo.phone}</p>
      <p className="text-sm">{props.personalInfo.location}</p>
      <h1 className="text-base my-4 font-bold bg-zinc-300 text-center py-[1px]">
        Work Experience
      </h1>
      {props.workExperiences.map((exp) => (
        <div key={exp.id} className="grid grid-cols-2 grid-rows-[2.5ch_3ch]">
          <div className="flex gap-2 text-sm">
            <span className="font-bold">{exp.company}</span>
            <span className="opacity-60">{exp.role}</span>
          </div>
          <div className="row-span-2 justify-self-end text-xs text-right">
            <p>
              {exp.startDate && exp.endDate
                ? `${exp.startDate} - ${exp.endDate}`
                : exp.startDate || exp.endDate}
            </p>
            <p className="opacity-60">{exp.location}</p>
          </div>
          <p className="text-xs">{exp.description}</p>
        </div>
      ))}
      <h1 className="text-base my-4 font-bold bg-zinc-300 text-center py-[1px]">
        Education
      </h1>
      {props.education.map((ed) => (
        <div key={ed.id} className="grid grid-cols-2 grid-rows-[2.5ch_2.5ch]">
          <div className="flex gap-2 text-sm">
            <span className="font-bold">{ed.certification}</span>
            <span className="opacity-60">{ed.school}</span>
          </div>
          <div className="row-span-2 justify-self-end text-xs text-right">
            <p>
              {ed.startDate && ed.endDate
                ? `${ed.startDate} - ${ed.endDate}`
                : ed.startDate || ed.endDate}
            </p>
            <p className="opacity-60">{ed.location}</p>
          </div>
          <p className="text-xs">{ed.focus}</p>
        </div>
      ))}
      <h1 className="text-base my-4 font-bold bg-zinc-300 text-center py-[1px]">
        Skills
      </h1>
      <div className="grid grid-cols-2 grid-rows-[2.5ch_2.5ch] gap-x-2">
        {props.skills.map((skill) => (
          <div key={skill.id} className="text-xs">
            <span className=" font-bold mr-2">{skill.skill}</span>
            <span className=" opacity-60">{skill.level}</span>
            <p>{skill.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Preview;
