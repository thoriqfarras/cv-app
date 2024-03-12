export const personalInfo = {
  _fullName: null,
  _email: null,
  _phone: null,
  _location: null,
  update: ({ fullName, email, phone, location }) => {
    this._fullName = fullName || this._fullName;
    this._email = email || this._email;
    this._phone = phone || this._phone;
    this._fullName = location || this._location;
  },
};
