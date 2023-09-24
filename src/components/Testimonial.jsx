import React from "react";

const Testimonial = () => {
  return (
    <div className="pb-40 px-10 text-black text-sm font-medium">
    <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
  <h3
    className="mb-6 text-2xl font-bold text-title">
    Testimonials
  </h3>
  <p className="pb-10 tracking-widest">
    Here is a few things our users said about our service.
  </p>
</div>

<div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">

  <div className="mb-12 md:mb-0">
    <div className="mb-6 flex justify-center">
      <img
        src="https://freeimghost.net/images/2023/09/23/3x4.jpeg"
        className="w-32 h-36 rounded-full shadow-lg dark:shadow-black/30" />
    </div>
    <h5 className="mb-4 text-xl font-semibold">Student 1</h5>
    <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
      Highschool Student
    </h6>
    <p className="mb-4">
      The app make it easy for student to submit absence application even when they are sick at home.
    </p>
  </div>


  <div className="mb-12 md:mb-0">
    <div className="mb-6 flex justify-center">
      <img
        src="https://freeimghost.net/images/2023/09/23/istockphoto-538365340-2048x2048.jpeg"
        className="w-32 h-36 rounded-full shadow-lg dark:shadow-black/30" />
    </div>
    <h5 className="mb-4 text-xl font-semibold">Teacher 1</h5>
    <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
      Teacher
    </h6>
    <p className="mb-4">
      It is easier to manage absence data for grading because we can receive report of student absence right away.
    </p>
  </div>


  <div className="mb-0">
    <div className="mb-6 flex justify-center">
      <img
        src="https://freeimghost.net/images/2023/09/23/alam.jpeg"
        className="w-32 h-36 rounded-full shadow-lg dark:shadow-black/30" />
    </div>
    <div className="mb-12 md:mb-0">
      <h5 className="mb-4 text-xl font-semibold">Student 2</h5>
      <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">
        Elementary Student
      </h6>
      <p className="mb-4 text-neutral-600 dark:text-neutral-300">
        The application is easy to use even for Elementary school students
      </p>
      
    </div>
  </div>
</div>
</div>
  );
};

export default Testimonial;
