import { MdMessage } from "react-icons/md";
import styles from "./BtnCompo.module.css"

const BtnCompo = (props) => {
  return (
    <button className={props.isOutline ? styles.outlineBtn : styles.primaryBtn}>
        {props.icon}
        {props.text}
    </button>
  )
}

export default BtnCompo