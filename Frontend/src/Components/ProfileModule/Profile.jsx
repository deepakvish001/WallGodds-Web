import { useState } from "react";
import Footer from "../CommonModule/FooterModule/Footer";
import NavBar from "../CommonModule/NavBarModule/NavBar";
import Styles from "./Profile.module.css";

// Professional SVG Icons
const XIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

const InstaIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const EditIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
);

const LocationIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);

const ShareIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
        <polyline points="16 6 12 2 8 6"></polyline>
        <line x1="12" y1="2" x2="12" y2="15"></line>
    </svg>
);

const TagIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
        <line x1="7" y1="7" x2="7.01" y2="7"></line>
    </svg>
);


const Profile = () => {
    const [socials, setSocials] = useState({
        x: "",
        instagram: "",
        portfolio: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSocials((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
            <div className={Styles.navbarWrapper}>
                <NavBar />
            </div>

            <div className={Styles.container}>
                {/* Main Card */}
                <div className={Styles.temp}>
                    <div className={Styles.contentGrid}>
                        {/* LEFT COLUMN */}
                        <div className={Styles.leftCol}>
                            {/* Profile Pic overlapping top */}
                            <img
                                src="https://ui-avatars.com/api/?name=Samuel+Khanna&background=0D8ABC&color=fff&size=200"
                                alt="Profile"
                                className={Styles.profilePic}
                            />
                            
                            {/* Socials Box - Vertical Layout (Corrected) */}
                            <div className={Styles.socialsBox}>
                                <div className={Styles.socialRow}>
                                    <div className={Styles.iconWrapper}>
                                        <XIcon />
                                    </div>
                                    <div className={Styles.inputPill}>
                                        <input
                                            type="text"
                                            name="x"
                                            value={socials.x}
                                            onChange={handleInputChange}
                                            placeholder="Add X"
                                            className={Styles.socialInput}
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>

                                <div className={Styles.socialRow}>
                                    <div className={Styles.iconWrapper}>
                                        <InstaIcon />
                                    </div>
                                    <div className={Styles.inputPill}>
                                        <input
                                            type="text"
                                            name="instagram"
                                            value={socials.instagram}
                                            onChange={handleInputChange}
                                            placeholder="Add Instagram"
                                            className={Styles.socialInput}
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>

                                <div className={Styles.socialRow}>
                                    <div className={Styles.iconWrapper}>
                                        <img src="/socialLinks/ion_earth-sharp.png" />
                                    </div>
                                    <div className={Styles.inputPill}>
                                        <input
                                            type="text"
                                            name="portfolio"
                                            value={socials.portfolio}
                                            onChange={handleInputChange}
                                            placeholder="Add portfolio"
                                            className={Styles.socialInput}
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className={Styles.rightCol}>
                            <div className={Styles.userDetails}>
                                <div className={Styles.nameRow}>
                                    <h1 className={Styles.userName}>Samuel Khanna</h1>
                                    <button className={Styles.editBtn}><EditIcon /></button>
                                </div>

                                <div className={Styles.handleRow}>
                                    <TagIcon />
                                    <span className={Styles.userHandle}>@samuelk</span>
                                </div>

                                <div className={Styles.tagsRow}>
                                    <div className={Styles.tagPill}>+ Add upto 3 more tag</div>
                                </div>

                                <div className={Styles.locationRow}>
                                    <LocationIcon />
                                    <span className={Styles.locationText}>Add your location</span>
                                </div>

                                <button className={Styles.shareBtn}>
                                    <ShareIcon />
                                </button>
                            </div>
                            
<div className={Styles.bioBox}>
    <textarea
        name="bio"
        value={socials.bio}
        onChange={handleInputChange}
        placeholder="Add your bio here"
        spellCheck="false"
    />
</div>
                            
                            <div className={Styles.badgesSection}>
                                <h3 className={Styles.sectionTitle}>Your Badges</h3>
                                <div className={Styles.badgesList}>
                                    <div className={Styles.badgeCircle}></div>
                                    <div className={Styles.badgeCircle}></div>
                                    <div className={Styles.badgeCircle}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Your Walls Section */}
                <div className={Styles.wallsWrapper}>
                    <h3 className={Styles.wallsTitle}>Your Walls</h3>
                    <div className={Styles.wallsEmptyState}>
                        <p className={Styles.emptyTitle}>This space is waiting to be personalized</p>
                        <p className={Styles.emptySubtitle}>Upload your favorite wallpapers and bring it to life</p>
                    </div>
                </div>

                <div className={Styles.footerWrapper}>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Profile;