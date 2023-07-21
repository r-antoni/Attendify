import Breadcrumb from "../components/Breadcrumb";

const StudentsAdd = () => {
    const model = [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "Students",
          path: "/student",
        },
        {
            
        }
      ];
  return (
    <div>StudentsAdd
        <Breadcrumb model={model}/>
    </div>
  )
}

export default StudentsAdd