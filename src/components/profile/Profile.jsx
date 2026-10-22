export default function Profile() {
    return (
        <section>
            <form>
                <div className="container">
                    <h1>Profile</h1>

                    {/* Profile Picture */}
  
                    <label htmlFor="profile-picture">Profile Picture</label>
                    <input type="file" id="profile-picture" name="profile-picture" placeholder="Profile Picture" accept="image/*" />

                    <input type="submit" className="btn submit" value="Update Profile" />
                </div>
            </form>
        </section>
    );
}
