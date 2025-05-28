import { MdMessage } from "react-icons/md"
import BtnCompo from "../BtnCompo/BtnCompo"
import styles from "./Form.module.css"
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const Form = () => {
  return (
    <section className= {styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
            <BtnCompo text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>} />
            <BtnCompo text="VIA CALL" icon={<IoCall fontSize="24px"/>} />
            </div>
            <BtnCompo isOutline={true} text="VIA EMAIL FORM" icon={<IoMdMail fontSize="24px"/>} />
            <form action="">
                <div className={styles.formController}>
                    <label htmlFor="Name">Name</label>
                    <input type="text" />
                </div>
                <div className={styles.formController}>
                    <label htmlFor="Email">Email</label>
                    <input type="text" />
                </div>
                <div className={styles.formController}>
                    <label htmlFor="Text">Text</label>
                    <textarea name="text" rows="8"></textarea>
                </div>
                <div style={{
                    display : 'flex',
                    justifyContent : 'end'
                }}>
                    <BtnCompo text="SUBMIT BUTTON" />
                </div>
            </form>
        </div>
        <div className={styles.contactImg}>
            <img src="/images/bigService.svg" alt="bigphoto" />
        </div>
    </section>
  )
}

export default Form