import React from 'react'
import './about.css'

const AboutMe = () => {
    return (
        <section className="aboutme">
            <div className="row-featurette my-picture">
                <img src="https://picsum.photos/200/300" alt="flower" width={200} height={250} />
            </div>
            <div>
                <h2 className="featurette-heading">My Story</h2>
                <p className="lead">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque alias cum numquam fuga dicta ipsum quod velit. Voluptas ipsam repellendus adipisci molestias quia aspernatur, consectetur, voluptates magnam quas numquam eum.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, unde quibusdam soluta cupiditate qui hic pariatur quia ex corrupti, tenetur iure dolor ut magnam aut ipsam voluptates aliquid. Quas, nesciunt.
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ab similique illum aspernatur accusantium? Labore animi vero sit, velit quas pariatur exercitationem delectus blanditiis necessitatibus ab mollitia similique quos dolor.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, vero nostrum unde aspernatur ipsa molestiae nam. Nesciunt cumque recusandae, ut aliquam asperiores repellendus libero, explicabo, maxime molestiae voluptate voluptatum quasi?
                </p>
            </div>
        </section>
    )
}

export default AboutMe