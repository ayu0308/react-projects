/* eslint-disable react/prop-types */
import { useState } from 'react';
import Card from './Card';

const Cards = ({ courses, category }) => {
  const [likedCources, setLikedCources] = useState([]);

  const getCourse = () => {
    if (category === 'All') {
      let allCourses = [];

      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      // main sirf specific category ka data array krunga
      return courses[category];
    }
  };

  return (
    <div className=" flex flex-wrap justify-center gap-4 mb-4">
      {getCourse().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCources={likedCources}
            setLikedCources={setLikedCources}
          />
        );
      })}
    </div>
  );
};

// const Cards = (props) => {
//   let cources = props.cources;

//   // Check if `props.cources` is defined
//   if (!cources) {
//     return null; // Or any other fallback JSX if appropriate
//   }

//   function getCourse() {
//     let allCourses = [];
//     Object.values(cources).forEach((array) => {
//       array.forEach((courseData) => {
//         allCourses.push(courseData);
//       });
//     });
//     return allCourses;
//   }

//   return (
//     <div>
//       {getCourse().map((course) => {
//         return <Card key={course.id} course={course} />;
//       })}
//     </div>
//   );
// };

export default Cards;
