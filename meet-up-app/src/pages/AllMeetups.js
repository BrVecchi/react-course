import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeatuups, setLoadedMeatuups] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('https://react-fast-course-default-rtdb.firebaseio.com/meetups.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        const meetups = []

        for (const key in data){
          const meetup = {
            id: key,
            ...data[key]
          };
          meetups.push(meetup)
        }

        setIsLoading(false)
        setLoadedMeatuups(meetups)
      })
  }, [])

  if (isLoading) {
    return <section>
      <p>
        Loading...
      </p>
    </section>
  }

  return <section>
    <h1>All Meetups</h1>
    <MeetupList meetups={loadedMeatuups} />
  </section>
}

export default AllMeetupsPage;