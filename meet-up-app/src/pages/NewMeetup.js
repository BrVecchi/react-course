import { useNavigate } from 'react-router-dom';

import NewMeetupsForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
    const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-fast-course-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/jason",
        },
      }
    ).then(()=>{
        navigate.replace('/')
    })
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupsForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
