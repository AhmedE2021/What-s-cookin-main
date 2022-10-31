
import SimpleSlider from "./SimpleSlider"
export default function RecommendedRecipes(){



return(

    <section className="recom">
    <SimpleSlider
      settings={{
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1.1,
        speed: 500,
      }}
    />
  </section>
)



}