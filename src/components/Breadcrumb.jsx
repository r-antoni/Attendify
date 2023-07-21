import {Breadcrumb as BreadcrumbBase} from "flowbite-react";

const Breadcrumb = ({model = []}) => {
  return (
    <BreadcrumbBase>
      {model.map((item, index) => (
        <BreadcrumbBase.Item href={item.path} key={index}>
          {item.title}
        </BreadcrumbBase.Item>
      ))}
    </BreadcrumbBase>
  );
};

export default Breadcrumb;
