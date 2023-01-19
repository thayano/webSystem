import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        E temos graficos <br className="sm:block hidden" /> 
          legais tambem
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit....
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
