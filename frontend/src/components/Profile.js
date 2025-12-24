import { useEffect,useState } from "react";
export default function Profile() {
    const [profileData, setProfileData] = useState({});
useEffect(() => {
  async function loadProfile() {
    try {
      const postRes = await fetch("http://localhost:9005/userprofile/profile", {
        method: "POST",
        credentials: 'include',
        headers: { "Content-Type": "application/json" }
      });

      if (postRes.status === 401) {
        console.warn("Not authenticated");
        setProfileData({});
        return;
      }

      if (postRes.ok) {
        const profile = await postRes.json();
        setProfileData(profile || {});
        return;
      }

      // fallback: try GET
      const getRes = await fetch("http://localhost:9005/userprofile/profile", {
        method: "GET",
        credentials: 'include',
        headers: { "Content-Type": "application/json" }
      });
      if (getRes.ok) {
        setProfileData(await getRes.json() || {});
      } else {
        setProfileData({});
      }
    } catch (err) {
      console.error("profile load error", err);
      setProfileData({});
    }
  }
  loadProfile();
}, []);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="bg-white p-[10px]">
                <div className="flex  justify-between">
                    <div><h1>Profile</h1></div>
                    <div><h1>Edit</h1></div>
                </div>
                <div className="grid grid-cols-2 gap-[10px]">
                    <div className="grid grid-rows-auto">
                        <div className="bg-[rgba(218,219,220,1)] mt-[10px] p-[10px]">
                            <p>Name:</p>
                            <p>{profileData.username}</p>
                        </div>
                        <div className="bg-[rgba(218,219,220,1)] mt-[10px] p-[10px]">
                            <p>Phone:</p>
                            <p></p>
                        </div>
                        <div className="bg-[rgba(218,219,220,1)] mt-[10px] p-[10px]">
                            <p>Email:</p>
                            <p>{profileData.email}</p>
                        </div>
                        <div className="bg-[rgba(218,219,220,1)] mt-[10px] p-[10px]">
                            <p>Gender:</p>
                            <p></p>
                        </div>
                    </div>
                    <div className="grid grid-rows-auto">
                        <div className="bg-[rgba(218,219,220,1)] mt-[10px] p-[10px]">
                            <p>Age:</p>
                            <p></p>
                        </div>
                        <div className="bg-[rgba(218,219,220,1)] mt-[10px] p-[10px]">
                            <p>State</p>
                            <p></p>
                        </div>
                        <div className="bg-[rgba(218,219,220,1)] mt-[10px] p-[10px]">
                            <p>Income</p>
                            <p></p>
                        </div>
                        <div className="bg-[rgba(218,219,220,1)] mt-[10px] p-[10px]">
                            <p>Role</p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}