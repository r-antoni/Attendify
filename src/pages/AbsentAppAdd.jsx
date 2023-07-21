import Breadcrumb from "../components/Breadcrumb";

const AbsentAppAdd = () => {
  const model = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Absence Record",
      path: "/absent-app",
    },
    {
      title: "Absent Application",
      path: "/form-submission",
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-3 mb-9">
        <h2 className="text-3xl text-secondary">Absent Application</h2>
        <Breadcrumb model={model} />
      </div>
    </div>
  );
};

export default AbsentAppAdd;
