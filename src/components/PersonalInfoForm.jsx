function PersonalInfoForm(props) {
  return (
    <form className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label htmlFor="full-name">Full Name</label>
        <input
          type="text"
          id="full-name"
          name="fullName"
          onChange={props.onEdit}
          value={props.personalInfo.fullName}
          className="text-zinc-800 rounded-sm p-1"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={props.onEdit}
          value={props.personalInfo.email}
          className="text-zinc-800 rounded-sm p-1"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={props.onEdit}
          value={props.personalInfo.phone}
          className="text-zinc-800 rounded-sm p-1"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          onChange={props.onEdit}
          value={props.personalInfo.location}
          className="text-zinc-800 rounded-sm p-1"
        />
      </div>
    </form>
  );
}

export default PersonalInfoForm;
