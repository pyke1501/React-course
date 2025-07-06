import React from 'react'

interface SimpleCardProps {
  title: string,
  movie: {
    name: string,
    year: number
  },
  updateTitle: () => void
}

function SimpleCard({ title, movie, updateTitle }: SimpleCardProps) {

  console.log('SimpleCard re-render')
  return (
    <div>
      <h4>SimpleCard</h4>
      Title: {title} <br />
      Movie: {movie.name} <br />
       <button type='button' onClick={updateTitle}>Update Title</button>
    </div>
  )
}

export default React.memo(SimpleCard);

// export default React.memo(SimpleCard, customEqual);

// function customEqual(prevProps: any, nextProps: any) {
//   console.log('customEqual: ', {
//     prevProps,
//     nextProps
//   });

//   return prevProps.movie.name === nextProps.movie.name;
// }