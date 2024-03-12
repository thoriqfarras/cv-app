function SkillForm(props) {
  return (
    <form className="flex flex-col gap-2">
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
      <div className="flex [&>*]:flex-1">
        <button onClick={props.onDelete}>Delete</button>
        <button onClick={props.onMoveUp} disabled={props.isOnTop}>
          Move up
        </button>
        <button onClick={props.onMoveDown} disabled={props.isOnBottom}>
          Move down
        </button>
      </div>
    </form>
  );
}

export default SkillForm;
