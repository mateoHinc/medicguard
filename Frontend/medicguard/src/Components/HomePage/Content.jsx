import InputSearch from "./InputSearch";
import CardProfessional from "./CardProfessional";

import "../css/styleContent.css";

const Content = () => {
  return (
    <>
      <div className="content2">
        <div className="main-content">
          <InputSearch />
          <CardProfessional />
        </div>
      </div>
    </>
  );
};

export default Content;
