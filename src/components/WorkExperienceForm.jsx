import { Chevron, TrashCan } from './Icons';

function WorkExperienceForm(props) {
  return (
    <form className="flex flex-col gap-2 ">
      <div className="flex flex-col gap-1">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={props.data.company}
          className="text-zinc-800 rounded-sm p-1"
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
          className="text-zinc-800 rounded-sm p-1"
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
          className="text-zinc-800 rounded-sm p-1"
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
          className="text-zinc-800 rounded-sm p-1"
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
          className="text-zinc-800 rounded-sm p-1"
          onChange={props.onEdit}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="location">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          className="text-zinc-800 rounded-sm p-1"
          onChange={props.onEdit}
        >
          {props.data.description}
        </textarea>
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

export default WorkExperienceForm;
