import React from "react";

const Testimonial = () => {
  return (
    <div className="pb-40 px-10 text-black text-sm">
    <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
  <h3
    className="mb-6 text-2xl font-bold text-title">
    Testimonials
  </h3>
  <p className="pb-10 tracking-widest">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
    amet numquam iure provident voluptate esse quasi, veritatis totam
    voluptas nostrum quisquam eum porro a pariatur veniam.
  </p>
</div>

<div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">

  <div className="mb-12 md:mb-0">
    <div className="mb-6 flex justify-center">
      <img
        src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
        className="w-32 rounded-full shadow-lg dark:shadow-black/30" />
    </div>
    <h5 className="mb-4 text-xl font-semibold">Maria Smantha</h5>
    <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
      Web Developer
    </h6>
    <p className="mb-4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
      id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
    </p>
  </div>


  <div className="mb-12 md:mb-0">
    <div className="mb-6 flex justify-center">
      <img
        src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
        className="w-32 rounded-full shadow-lg dark:shadow-black/30" />
    </div>
    <h5 className="mb-4 text-xl font-semibold">Lisa Cudrow</h5>
    <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
      Graphic Designer
    </h6>
    <p className="mb-4">
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
      suscipit laboriosam, nisi ut aliquid commodi.
    </p>
  </div>


  <div className="mb-0">
    <div className="mb-6 flex justify-center">
      <img
        src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
        className="w-32 rounded-full shadow-lg dark:shadow-black/30" />
    </div>
    <div className="mb-12 md:mb-0">
      <h5 className="mb-4 text-xl font-semibold">Lisa Cudrow</h5>
      <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">
        Graphic Designer
      </h6>
      <p className="mb-4 text-neutral-600 dark:text-neutral-300">
        Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid commodi.
      </p>
      
    </div>
  </div>
</div>
</div>
  );
};

export default Testimonial;
