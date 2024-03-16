import { Chevron, TrashCan } from './Icons';

function SkillForm(props) {
  return (
    <form className="flex flex-col gap-2 [&>*>input]:text-zinc-800 [&>*>input]:rounded-sm [&>*>input]:p-1">
      <div className="flex flex-col gap-1">
        <label htmlFor="skill">Skill</label>
        <input
          type="text"
          id="skill"
          name="skill"
          value={props.data.skill}
          onChange={props.onEdit}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="info">Information/Sub-skill</label>
        <input
          type="text"
          id="info"
          name="info"
          value={props.data.info}
          onChange={props.onEdit}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="skill-level">Skill Level</label>
        <input
          type="text"
          id="skill-level"
          name="level"
          value={props.data.level}
          onChange={props.onEdit}
        />
      </div>
      <div className="flex [&>*]:flex-1 [&>*]:py-2 gap-2">
        <button
          className="bg-blue-600 rounded-md disabled:opacity-50"
          onClick={props.onMoveUp}
          disabled={props.isOnTop}
        >
          <Chevron className={'rotate-90 mx-auto'} />
        </button>
        <button className="bg-red-600 rounded-md" onClick={props.onDelete}>
          <TrashCan className="mx-auto" />
        </button>
        <button
          className="bg-blue-600 rounded-md disabled:opacity-50"
          onClick={props.onMoveDown}
          disabled={props.isOnBottom}
        >
          <Chevron className="-rotate-90 mx-auto" />
        </button>
      </div>
    </form>
  );
}

export default SkillForm;
