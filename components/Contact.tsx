import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className={`container grid grid-2 ${styles.grid}`}>
        <div className={styles.info}>
          <h2 className={styles.heading}>Konsultasikan Kebutuhan Limbah Industri Anda</h2>
          <p className={styles.desc}>
            Tim ahli kami siap membantu Anda melakukan survei TENORM dan pengelolaan limbah B3 sesuai regulasi pemerintah.
          </p>
          
          <div className={styles.contactItems}>
            <div className={styles.contactItem}>
              <div className={styles.itemIcon}>📍</div>
              <div>
                <h5>Kantor Pusat</h5>
                <p>Infiniti Office, Menara Cakrawala Lt 12, Unit 05A, Jl. M.H. Thamrin No.9, Menteng, Jakarta Pusat 10340</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.itemIcon}>📞</div>
              <div>
                <h5>Hotline Layanan</h5>
                <p>+62878-9076-0055</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.itemIcon}>✉️</div>
              <div>
                <h5>Email</h5>
                <p>digdosesudarto@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.formWrapper}>
          <form className={styles.form}>
            <h3 className={styles.formTitle}>Formulir Permintaan Survey</h3>
            <div className={styles.formGrid}>
              <div className={styles.field}>
                <label>Nama *</label>
                <input type="text" placeholder="Nama Anda" />
              </div>
              <div className={styles.field}>
                <label>Perusahaan *</label>
                <input type="text" placeholder="Nama PT" />
              </div>
              <div className={styles.field}>
                <label>Email *</label>
                <input type="email" placeholder="email@perusahaan.com" />
              </div>
              <div className={styles.field}>
                <label>WhatsApp *</label>
                <input type="text" placeholder="08xxxxxxxxxx" />
              </div>
            </div>
            <div className={styles.field}>
              <label>Layanan yang Dibutuhkan *</label>
              <select>
                <option>Pengelolaan Limbah B3</option>
                <option>Pengelolaan TENORM</option>
                <option>Konsultansi K3L/HSE</option>
              </select>
            </div>
            <div className={styles.field}>
              <label>Detail Kebutuhan *</label>
              <textarea placeholder="Tulis detail kebutuhan Anda..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
              Kirim Permintaan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
