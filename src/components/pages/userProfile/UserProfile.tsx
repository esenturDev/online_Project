import scss from "./UserProfile.module.scss";
import iconWatch from "../../../assets/timer-line.svg";
import iconHuman from "../../../assets/heart-3-line (1).svg";
import iconMobile from "../../../assets/smartphone-fill.svg";
import iconMessage from "../../../assets/message-2-line.svg";
import iconSupports from "../../../assets/store-2-fill.svg";
import iconSearch from "../../../assets/search-line (3).svg";

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
								<div className={scss.divCard1}>
									<div className={scss.div11}>
										<p>My xPay accounts</p>
										<div className={scss.divContent1}>
											<img src={iconSearch} alt="icon Search" />
											<button>Edit</button>
										</div>
									</div>
									<div className={scss.div2Border}></div>
									<div className={scss.div22}>
										<p>Active account</p>
										<button>Block Account</button>
									</div>
								</div>
							</div>
							<div className={scss.divTexts2}>
								<div className={scss.div2Content1}>
									<p>My bills</p>
									<button>Filter by</button>
								</div>
								<div className={scss.div2BorderDiv}></div>
								<div className={scss.divContentsIsDiv2}>
									<p>phono bill</p>
									<button>phono bill</button>
								</div>
								<div className={scss.divContentsIsDiv2}>
									<p>phono bill</p>
									<button>phono bill</button>
								</div>
								<div className={scss.divContentsIsDiv2}>
									<p>phono bill</p>
									<button>phono bill</button>
								</div>
								<div className={scss.divContentsIsDiv2}>
									<p>phono bill</p>
									<button>phono bill</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
