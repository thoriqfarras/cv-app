function WorkExperienceForm(props) {
  return (
    <form className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={props.data.company}
          onChange={props.onEdit}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="role">Role</label>
        <input
          type="text"
          id="role"
          name="role"
          value={props.data.role}
          onChange={props.onEdit}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="start-date">Start Date</label>
        <input
          type="text"
          id="start-date"
          name="startDate"
          value={props.data.startDate}
          onChange={props.onEdit}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="end-date">End Date</label>
        <input
          type="text"
          id="end-date"
          name="endDate"
          value={props.data.endDate}
          onChange={props.onEdit}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={props.data.location}
          onChange={props.onEdit}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="location">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={props.data.description}
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

export default WorkExperienceForm;
