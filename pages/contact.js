import Head from "next/head"
import Navbar from "../organisms/Navbar"

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact US | Nextrap</title>
			</Head>

			<Navbar />

			<main>
				<div className="container">
					<div className="row py-5">
						<div className="col-md-5 mx-auto">
							<div className="h-scrollable">
								<form className="my-4">
									<div className="form-group">
										<div className="form-row">
											<div className="col">
												<input
													name="firstname"
													type="text"
													className={`form-control`}
													placeholder="First name"
												/>
											</div>
											<div className="col">
												<input
													name="lastname"
													type="text"
													className={`form-control`}
													placeholder="Last name"
												/>
											</div>
										</div>
									</div>

									<div className="form-group">
										<input
											type="email"
											className={`form-control`}
											name="email"
											id="email"
											placeholder="Votre adresse mail(facultatif)"
										/>
									</div>

									<div className="form-group">
										<select
											name="objet_contactus"
											id="objet_contactus"
											className="custom-select"
										>
											<option value="J'ai un problème de recherche de voyage">
												J'ai un problème de recherche de voyage
											</option>
											<option value="J'ai un problème pour achéter un billet">
												J'ai un problème pour achéter un billet
											</option>
											<option value="J'ai un problème pour modifier mon billet">
												J'ai un problème pour modifier mon billet
											</option>
											<option value="J'ai un problème avec mon code LOHCE pour l'embarquement">
												J'ai un problème avec mon code LOHCE pour l'embarquement
											</option>
											<option value="Autre">Autre ...</option>
										</select>
									</div>

									<div className="form-group">
										<textarea
											className={`form-control`}
											id="message_contactus"
											name="message_contactus"
											placeholder="Votre message"
											rows="3"
										/>
									</div>

									<div className="d-flex flex-row justify-content-end">
										<button type="submit" className="btn btn-primary">
											ENVOYER →
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
