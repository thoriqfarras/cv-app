import { Chevron, TrashCan } from './Icons';

function EducationForm(props) {
  return (
    <form className="flex flex-col gap-2 [&>*>input]:text-zinc-800 [&>*>input]:rounded-sm [&>*>input]:p-1">
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

export default EducationForm;
