import React from "react"

function Username() {
	return (
		<>
			<Head>
				<title>Profile | Nextrap</title>
			</Head>
			{/*  */}
			<div className="container-fluid  p-0 ">
				<div className="bg-white ">
					<div className="px-4 pt-3 pt-0 cover">
						<div className="media align-items-end profile-head">
							<div className="profile mr-3">
								<img
									src="/assets/profil.jpeg"
									alt="..."
									width="130"
									className="rounded mb-2 img-thumbnail"
								/>
								<a href=" " className="btn btn-outline-dark btn-sm btn-block">
									Edit profile
								</a>
							</div>
							<div className="media-body mb-5 text-white">
								<h4 className="mt-0 mb-2">{username}</h4>
								<p className="small mb-5">New York, USA</p>
							</div>
						</div>
					</div>
					<div className="bg-light p-4 d-flex justify-content-end text-center">
						<ul className="list-inline mb-0">
							<li className="list-inline-item">
								<h5 className="font-weight-bold mb-0 d-block">215</h5>
								<small className="text-muted">comments</small>
							</li>
							<li className="list-inline-item">
								<h5 className="font-weight-bold mb-0 d-block">745</h5>
								<small className="text-muted">Wishlist</small>
							</li>
							<li className="list-inline-item">
								<h5 className="font-weight-bold mb-0 d-block">340</h5>
								<small className="text-muted">cart</small>
							</li>
						</ul>
					</div>

					<div className="py-4 px-4">
						<div className="d-flex justify-content-between mb-3">
							<h5 className="my-3">Recent purchase</h5>
							<h5 className="my-3">My Orders</h5>
						</div>
						<div className="d-flex justify-content-between mb-3">
							<div>
								<h5 className="my-3">Personal Info</h5>
								<div className="text-muted">firstname : {user.firstname}</div>
								<div className="text-muted">lastname : {user.lastname}</div>
								<div className="text-muted">username : {user.username}</div>
								<div className="text-muted">email : {user.email}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Username
