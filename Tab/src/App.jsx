/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import './App.css';
import { apiUrl, filterData } from './data';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';

const App = () => {
  const [courses, setCourses] = useState([null]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      // save data into a variable
      // console.log(data);
      setCourses(output.data);
    } catch (error) {
      toast.error('Something went wrong');
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" min-h-screen flex flex-col bg-gray-900">
      <div>
        <Navbar />
      </div>

      <div className=" ">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;