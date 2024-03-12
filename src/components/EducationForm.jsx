function EducationForm(props) {
  return (
    <form className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label htmlFor="certification">Degree/Certification</label>
        <input
          type="text"
          id="certification"
          name="certification"
          value={props.data.certification}
          onChange={props.onEdit}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="school">School</label>
        <input
          type="text"
          id="school"
          name="school"
          value={props.data.school}
          onChange={props.onEdit}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="focus">Area of focus</label>
        <input
          type="text"
          id="focus"
          name="focus"
          value={props.data.focus}
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

export default EducationForm;
