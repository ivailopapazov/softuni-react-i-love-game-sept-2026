import styles from './Profile.module.css';

export default function Profile() {
    return (
        <section>
            <form>
                <div className={styles.container}>
                    <h1>My Profile</h1>

                    {/* Profile Picture */}
                    <div>
                        <img src="https://www.shutterstock.com/image-vector/user-profile-icon-amazing-flat-260nw-2013390644.jpg" alt="Profile Picture" />
                    </div>

                    <label htmlFor="profile-picture">Profile Picture</label>
                    <input className={styles.input} type="file" id="profile-picture" name="profile-picture" placeholder="Profile Picture" accept="image/*" />

                    <input type="submit" className="btn submit" value="Update Profile" />
                </div>
            </form>
        </section>
    );
}
