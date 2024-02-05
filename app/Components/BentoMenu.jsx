import React from 'react'

const BentoMenu = () => {

  const workouts = [
    {
      name: 'Treadmill',
      workoutTime : '00:00',
      caloriesBurnt : '100',
    },
    {
      name: 'Yoga',
      workoutTime : '00:00',
      caloriesBurnt : '100',
    },
    {
      name: 'Weight Lifting',
      workoutTime : '00:00',
      caloriesBurnt : '100',
    },
    {
      name: 'Samba',
      workoutTime : '00:00',
      caloriesBurnt : '100',
    },
    {
      name: 'Kickboxing',
      workoutTime : '00:00',
      caloriesBurnt : '100',
    },
  ]

  const WorkoutCard = ({
    classname,
    imgSrc,
    alt = "no alternative text was provided",
    title,
    caloriesBurnt,
    workoutTime
  }) => {
    return (
    <article className={classname}>
      <figure>
        <img src={imgSrc} alt={alt} />
      </figure>
      <div>
        <h2>{title}</h2>
        <p>{workoutTime}</p>
        <p>{caloriesBurnt}</p>
      </div>
    </article>)
  }

  return (
    <section class="grid md:grid-cols-3 grid-cols-2 gap-4 mt-10">
      {workouts.map(({caloriesBurnt,name, workoutTime},index)=>(WorkoutCard({
          title:name, 
          caloriesBurnt,
          workoutTime, 
          alt: '',
          classname: index > 0 ? 'p-4 bg-green-800' : 'p-4 bg-green-800 col-span-2 md:col-span-2' })))}
    </section>
  )
}

export default BentoMenu