function Portfolio(props) {
    return (
        <div className="port-wrapper">
            <h1 className="portfolio">Portfolio</h1>
            <div className="Project4">
                <div className="proj-box">
                    <h2 classname="proj-name">SupplyLab</h2>
                    <a href="https://supplylab.herokuapp.com/" target="_blank" rel="noreferrer" alt="app link">Launch SupplyLab</a>
                    <p>Django app enabling teachers to crowd-source school supplies. A group project where I was responsible for programming, user stories, image research, bug fixing, and deployment.</p>
                    <p>
                        <table>
                            <tr><th>Technologies Used:</th></tr>
                            <tr><td>Python</td></tr>
                            <tr><td>Django</td></tr>
                            <tr><td>Javascript</td></tr>
                            <tr><td>HTML</td></tr>
                            <tr><td>CSS</td></tr>
                            <tr><td>Materialize</td></tr>
                        </table>
                    </p>
                    <a href="https://github.com/kepackard/supplylab" target="_blank" rel="noreferrer" alt="app link">Go to GitHub</a>
                </div>    
                </div>
                <div className="Project3">
                    <h2 classname="proj-name">You Are Here</h2>
                    <a href="http://youarehere.netlify.app/" target="_blank" rel="noreferrer" alt="you-are-here">Launch You Are Here</a>
                    <p>You Are Here allows educators all over the country to create, share, and download lesson plans about the U.S. National Park System. Plans can be used for on-site field trips or to supplement classroom learning. All grades K-12 are covered, and subject matter ranges from Science to History, Social Studies, and English.</p>
                    <p>
                        <table>
                            <tr><th>Technologies Used:</th></tr>
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
                    <a href="https://github.com/kepackard/you-are-here" target="_blank" rel="noreferrer" alt="you-are-here">Go to GitHub</a>
                </div>
                <div className="Project2">
                    <h2 classname="proj-name">Farmers Markets</h2>
                    <a href="https://farmers-markets-08052.herokuapp.com/" target="_blank" rel="noreferrer" alt="app link">Launch Farmers Markets</a>
                    <p>A full CRUD web application for finding local farmers markets in your area. Browse local farmers markets. Easily find addresses, dates of operation, hours, and examples of wares. Do you know a market that's not on our list? Add it to our site!</p>
                    <p>
                        <table>
                            <tr><th>Technologies Used:</th></tr>
                            <tr><td>HTML</td></tr>
                            <tr><td>CSS</td></tr>
                            <tr><td>Javascript</td></tr>
                            <tr><td>Express.js</td></tr>
                            <tr><td>MongoDB</td></tr>
                            <tr><td>Mongoose</td></tr>
                            <tr><td>Postman</td></tr>
                            <tr><td>Heroku</td></tr>
                        </table>
                    </p>
                    <a href="https://github.com/kepackard/farmers-market" target="_blank" rel="noreferrer" alt="app link">Go to GitHub</a>
                </div>
                <div className="Project1">
                    <h2 classname="proj-name">Still-Life with Data and String</h2>
                    <a href="https://dataandstring.netlify.app/" target="_blank" rel="noreferrer" alt="app link">Launch Still-Life with Data and String</a>
                    <p>A basic search engine using an API from the Art Institute of Chicago. Technology allows viewers all over the world to enjoy fine art, up close and personally. The Intitute's API runs their website, mobile app, and gallery interactives as well.</p>
                    <p>
                        <table>
                            <tr><th>Technologies Used:</th></tr>
                            <tr><td>HTML</td></tr>
                            <tr><td>CSS</td></tr>
                            <tr><td>Javascript</td></tr>
                            <tr><td>Express.js</td></tr>
                            <tr><td>jQuery</td></tr>
                        </table>
                    </p>
                    <a href="https://github.com/kepackard/data-and-string" target="_blank" rel="noreferrer" alt="app link">Go to Github</a>
                </div>
        </div>
    )
}

export default Portfolio;