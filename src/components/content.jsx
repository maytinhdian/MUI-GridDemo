import { Outlet } from "react-router-dom";


function Content() {
  return (
    <div className="content">
      <h1>This is content</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ut saepe.
        Perspiciatis dolor totam illo fuga odit quam, doloribus labore animi
        deserunt nobis perferendis sunt! Vitae doloribus illo eius labore?
      </p>
      <Outlet/>
    </div>
  );
}

export default Content;
