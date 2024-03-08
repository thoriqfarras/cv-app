import { useState } from 'react';
import Dropdown from './components/dropdown';
import Input from './components/input';

function App() {
  const [activeIndex, setActiveIndex] = useState(-1);

  function handleDropdownClick(index) {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  }

  return (
    <div class="bg-red-300 h-screen">
      <section>
        <Dropdown
          title="Personal Info"
          onShow={() => handleDropdownClick(0)}
          isActive={activeIndex === 0}
        >
          <Input
            type="text"
            label="Full Name"
            id="full-name"
            name="full-name"
          />
          <Input type="text" label="Title" id="title" name="title" />
          <Input type="text" label="Email" id="email" name="email" />
          <Input
            type="text"
            label="Phone Number"
            id="phone-num"
            name="phone-num"
          />
          <Input type="text" label="Location" id="location" name="location" />
        </Dropdown>
        <Dropdown
          title="Experience"
          onShow={() => handleDropdownClick(1)}
          isActive={activeIndex === 1}
        >
          <Input
            type="text"
            label="Full Name"
            id="full-name"
            name="full-name"
          />
          <Input type="text" label="Title" id="title" name="title" />
          <Input type="text" label="Email" id="email" name="email" />
          <Input
            type="text"
            label="Phone Number"
            id="phone-num"
            name="phone-num"
          />
          <Input type="text" label="Location" id="location" name="location" />
        </Dropdown>
      </section>
      <section></section>
    </div>
  );
}

export default App;
