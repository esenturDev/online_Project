import scss from "./UserProfile.module.scss";
import iconWatch from "../../../assets/timer-line.svg";
import iconHuman from "../../../assets/heart-3-line (1).svg";
import iconMobile from "../../../assets/smartphone-fill.svg";
import iconMessage from "../../../assets/message-2-line.svg";
import iconSupports from "../../../assets/store-2-fill.svg";

const UserProfile = () => {
	return (
		<div className={scss.userProfile}>
			<div className="container">
				<div className={scss.content}>
					<nav className={scss.navbar}>
						<div>
							<img src={iconWatch} alt="icon" />
							<p>My dashboard</p>
						</div>
						<div>
							<img src={iconHuman} alt="icon" />
							<p>Aoodunts</p>
						</div>
						<div>
							<img src={iconMobile} alt="icon" />
							<p>Mobile</p>
						</div>
						<div>
							<img src={iconMessage} alt="icon" />
							<p>Complaints</p>
						</div>
						<div>
							<img src={iconSupports} alt="icon" />
							<p>Supports</p>
						</div>
					</nav>
					<div className={scss.contentsDiv1}>
						<div className={scss.contentsDivProfile}>
							<img
								src="https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue.png"
								alt="photo is user Profile"
							/>
							<p>My profile</p>
							<div className={scss.textsIsAdminProject}>
								<span>Esentur Ismailov</span>
								<span>+996779674593</span>
							</div>
							<p className={scss.ProjectNameText}>
								Project ONLINE WEP SITE APPLE Shop
							</p>
							<div className={scss.borderDiv}></div>
							<button>Save</button>
						</div>
						<div className={scss.div2Contents}>
							<div className={scss.divTexts1}>
								<div>
									<p>My xPay accounts</p>
									<div>
										<img src="" alt="" />
										<button>Edit</button>
									</div>
								</div>
							</div>
							<div className={scss.divTexts2}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
