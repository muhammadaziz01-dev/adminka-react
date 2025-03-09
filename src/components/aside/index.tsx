import { NavLink } from "react-router-dom";
import { dataMenu } from "../../constants/constanta";
import "./style.scss";

function Index() {
  return (
    <>
      <aside className="aside">
        <nav className="aside--nav">
          {dataMenu.map((el) => {
            return (
              <NavLink to={el?.path} key={el?.id} className="aside--nav--itme">
                <span dangerouslySetInnerHTML={{ __html: el?.icon }}></span>
                <span>{el.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

export default Index;
