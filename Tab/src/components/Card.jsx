/* eslint-disable react/prop-types */
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
  let course = props.course;
  let likedCources = props.likedCources;
  let setLikedCources = props.setLikedCources;

  function clickHandler() {
    //logic
    if (likedCources.includes(course.id)) {
      //phle se like hua pada hai
      setLikedCources((prev) => prev.filter((cid) => cid != course.id));
      toast.warning('Like remove');
    } else {
      //phle se like nhi hai ye course
      //insert krna h ye course liked course me
      if (likedCources.length === 0) {
        setLikedCources([course.id]);
      } else {
        //non-empty pehle se
        setLikedCources((prev) => [...prev, course.id]);
      }
      toast.success('Liked Successfully');
    }
  }

  return (
    <div className=" w-[300px] bg-blue-950 bg-opacity-90 rounded-md overflow-hidden">
      <div className="relative ">
        <img src={course.image.url}></img>

        <div className=" w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
          <button onClick={clickHandler}>
            {likedCources.includes(course.id) ? (
              <FcLike fontSize="1.74em" />
            ) : (
              <FcLikePlaceholder fontSize="1.74em" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className=" text-white font-semibold text-lg loading-6">
          {course.title}
        </p>
        <p className=" mt-2 text-white">
          {course.description.length > 100
            ? course.description.substring(0, 100) + '...'
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
