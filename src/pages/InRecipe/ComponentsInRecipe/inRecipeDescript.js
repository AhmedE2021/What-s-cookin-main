import { useLocation } from "react-router-dom";

export default function DescriptComponentInRecipe() {
  const location = useLocation();
  const description = location.state.description;
  return (
    <section className="inRecipe-descript-component-section">
      <div className="inRecipe-profile-descript-holder">
        <div className="inRecipe-profile-outer">
          <img
            src="https://mcuexchange.com/wp-content/uploads/2017/05/tumblr_ophslpg84y1sdxw5qo6_1280.jpg"
            className="inRecipe-profile-picture"
            alt="The person who created this recipe"
          />
          <div className="inRecipe-profile-info">
            <div className="InRecipe-name-nationality-holder">
              <h2 style={{ fontSize: "10pt" }}>NAT</h2>
              <h2 className="inRecipe-name">Jessica Jhonson</h2>
            </div>
            <p className="inRecipe-profile-short-bio">Michelin chef at Gorms</p>
          </div>
        </div>
        <div className="inRecipe-description-holder">
          <h2 className="inRecipe-description-heading">Description</h2>
          <p className="inRecipe-description-text">{description}</p>
        </div>
      </div>
    </section>
  );
}
