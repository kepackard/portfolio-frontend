function Portfolio(props) {
    return (
        <div className="port-wrapper">
            <h1 className="portfolio">Portfolio</h1>
        <div className="Project4">
            <div className="proj-box">
                <h2>SupplyLab</h2>
                <a href="https://supplylab.herokuapp.com/" target="_blank" rel="noreferrer" alt="app link">Click here</a>
                <p>A group project where I was full stack developer, user-stories, image research, bug-tracker, heroku deployment. An app to connect teachers who need supplies with local donors or businesses.</p>
                <p>
                    <table>
                        <tr><th>Technologies Used</th></tr>
                        <tr><td>Python</td></tr>
                        <tr><td>Django</td></tr>
                        <tr><td>Javascript</td></tr>
                        <tr><td>HTML</td></tr>
                        <tr><td>CSS</td></tr>
                        <tr><td>Materialize</td></tr>
                    </table>
                </p>
            </div>    
                <div>
                    <a href="https://supplylab.herokuapp.com/" target="_blank" alt="supplylab" rel="noreferrer">Launch supplylab</a>
                </div>
            </div>
            <div className="Project3">
                <h2>You Are Here</h2>
                <a href="youarehere.netlify.app/" target="_blank" rel="noreferrer" alt="you-are-here">Launch You Are Here</a>
                <p>You Are Here allows educators all over the country to create, share, and download lesson plans about the U.S. National Park System. Plans can be used for on-site field trips or to supplement classroom learning. All grades K-12 are covered, and subject matter ranges from Science to History, Social Studies, and English.</p>
                <p>
                    <table>
                        <tr><th>Technologies Used</th></tr>
                        <tr><td>MongoDB/Mongoose</td></tr>
                        <tr><td>Express</td></tr>
                        <tr><td>React</td></tr>
                        <tr><td>Node</td></tr>
                        <tr><td>HTML</td></tr>
                        <tr><td>CSS and Sass</td></tr>
                        <tr><td>Heroku</td></tr>
                        <tr><td> Netlify</td></tr>
                        <tr><td> Git</td></tr>
                    </table>
                </p>
            </div>
            <div className="Project2">
                <h2>Farmers Markets</h2>
                <a href="https://floating-ocean-08052.herokuapp.com/" target="_blank" rel="noreferrer" alt="app link">Click Here</a>
                <p>A full CRUD web application for finding local farmers markets in your area. Browse local farmers markets. Easily find addresses, dates of operation, hours, and examples of wares. Do you know a market that's not on our list? Add it to our site!</p>
                <p>
                    <table>
                        <tr><th>Technologies Used:</th></tr>
                        <tr><th>HTML</th></tr>
                        <tr><th>CSS</th></tr>
                        <tr><th>Javascript</th></tr>
                        <tr><th>Express.js</th></tr>
                        <tr><th>MongoDB</th></tr>
                        <tr><th>Mongoose</th></tr>
                        <tr><th>Postman</th></tr>
                        <tr><th>Heroku</th></tr>
                    </table>
                </p>
            </div>
            <div className="Project1">
                <h2>Still-Life with Data and String</h2>
                <a href="https://dataandstring.netlify.app/" target="_blank" rel="noreferrer" alt="app link">Click here</a>
                <p>A basic search engine using an API from the Art Institute of Chicago. Technology allows viewers all over the world to enjoy fine art, up close and personally. The Intitute's API runs their website, mobile app, and gallery interactives as well. Artwork images are NOT in the API however - images are served on a separate API that is compliant with IIIF (International Image Interoperability Framework).</p>
                <p>
                    <table>
                        <tr><th>Technologies Used:</th></tr>
                        <tr><th>HTML</th></tr>
                        <tr><th>CSS</th></tr>
                        <tr><th>Javascript</th></tr>
                        <tr><th>Express.js</th></tr>
                        <tr><th>jQuery</th></tr>
                    </table>
                </p>
            </div>
        </div>
    )
}

export default Portfolio;