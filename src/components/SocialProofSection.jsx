const SocialProofSection = () => {
  return (
    <main>
      <div className="wrapper">
        <div className="top-wrapper">
          <section>
            <div className="header-wrapper">
              <h1>10,000+ of our users love our products.</h1>
              <p>
                We only provide great products combined with excellent customer
                service. See what our satisfied customers are saying about our
                services.
              </p>
            </div>
          </section>
          <section>
            <div className="stars-layout">
              <article>
                <div className="star-wrapper">
                  <div className="images-wrapper">
                    <img src="/images/icon-star.svg" alt="Star Icon" />
                    <img src="/images/icon-star.svg" alt="Star Icon" />
                    <img src="/images/icon-star.svg" alt="Star Icon" />
                    <img src="/images/icon-star.svg" alt="Star Icon" />
                    <img src="/images/icon-star.svg" alt="Star Icon" />
                  </div>
                  <p>Rated 5 Stars in Reviews</p>
                </div>
              </article>
              <article>
                <div className="star-wrapper">
                  <div className="images-wrapper">
                    <img src="/images/icon-star.svg" alt="Star Icon" />
                    <img src="/images/icon-star.svg" alt="Star Icon" />
                    <img src="/images/icon-star.svg" alt="Star Icon" />
                    <img src="/images/icon-star.svg" alt="Star Icon" />
                    <img src="/images/icon-star.svg" alt="Star Icon" />
                  </div>
                  <p>Rated 5 Stars in Report Guru</p>
                </div>
              </article>
              <article>
                <div className="star-wrapper">
                  <div className="images-wrapper">
                    <img src="/images/icon-star.svg" alt="Star Icon" />
                    <img src="/images/icon-star.svg" alt="Star Icon" />
                    <img src="/images/icon-star.svg" alt="Star Icon" />
                    <img src="/images/icon-star.svg" alt="Star Icon" />
                    <img src="/images/icon-star.svg" alt="Star Icon" />
                  </div>
                  <p>Rated 5 Stars in BestTech</p>
                </div>
              </article>
            </div>
          </section>
        </div>
        <div className="bottom-wrapper">
          <section>
            <div className="reviews-layout">
              <article>
                <div className="review-wrapper">
                  <div className="profile-wrapper">
                    <img src="/images/image-colton.jpg" alt="Colton Smith" />
                    <div className="name-wrapper">
                      <p className="name">Colton Smith</p>
                      <p className="verified">Verified Buyer</p>
                    </div>
                  </div>
                  <div className="review">
                    <p>
                      "We needed the same printed design as the one we had
                      ordered a week prior. Not only did they find the original
                      order, but we also received it in time. Excellent!"
                    </p>
                  </div>
                </div>
              </article>
              <article>
                <div className="review-wrapper">
                  <div className="profile-wrapper">
                    <img src="/images/image-irene.jpg" alt="Irene Roberts" />
                    <div className="name-wrapper">
                      <p className="name">Irene Roberts</p>
                      <p className="verified">Verified Buyer</p>
                    </div>
                  </div>
                  <div className="review">
                    <p>
                      "Customer service is always excellent and very quick turn
                      around. Completely delighted with the simplicity of the
                      purchase and the speed of delivery."
                    </p>
                  </div>
                </div>
              </article>
              <article>
                <div className="review-wrapper">
                  <div className="profile-wrapper">
                    <img src="/images/image-anne.jpg" alt="Anne Wallace" />
                    <div className="name-wrapper">
                      <p className="name">Anne Wallace</p>
                      <p className="verified">Verified Buyer</p>
                    </div>
                  </div>
                  <div className="review">
                    <p>
                      "Put an order with this company and can only praise them
                      for the very high standard. Will definitely use them again
                      and recommend them to everyone!"
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
export default SocialProofSection
