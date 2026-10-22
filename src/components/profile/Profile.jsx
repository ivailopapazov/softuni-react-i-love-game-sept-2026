import { toast } from 'react-toastify';
import { storageRequest } from '../../utils/request';
import styles from './Profile.module.css';
import { useNavigate } from 'react-router';

export default function Profile() {
    const navigate = useNavigate();
    const uploadFileHandler = async (formData) => {
        const file = formData.get('profile-picture');

        try {
            await storageRequest(file.name, file);
            // TODO update database with the new profile picture URL or reference
            //https://juiegzuqlaacubisfriq.supabase.co/storage/v1/object/public/pictures
            toast.success('Profile picture updated successfully!');

            navigate('/');
        } catch (error) {
            toast.error('Failed to update profile picture.');
        }
    }

    // TODO show current profile picture from the database or storage URL
    return (
        <section>
            <form action={uploadFileHandler}>
                <div className={styles.container}>
                    <h1>Profile</h1>

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
