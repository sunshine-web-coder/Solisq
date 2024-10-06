import cn from "classnames";
import styles from "./Development.module.sass";
import styles2 from "./Development.module.scss";
import RubicWidget from "@/components/RubicWidget/RubicWidget";

const Development = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container-wide", styles.container)}>
        <div className={styles2.inner_vince_ecosystem}>
          <RubicWidget />
        </div>
      </div>
    </div>
  );
};

export default Development;
