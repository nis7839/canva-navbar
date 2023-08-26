const drop = document.querySelector(".lists");
const container = document.querySelector(".dropbox");

const spot = () => {
    //   console.log("Nishant");
    const update = `
  <div class="spotlight">
  <div class="spot">
      <div class="list">
          <ul>
              <li class="bold">Visual Documents</li>
              <li>Visual Suits</li>
              <li>Docs</li>
              <li>Presentations</li>
              <li>Whiteboards</li>
              <li>PDF Editors</li>
              <li>Graph and Charts</li>
          </ul>
      </div>
  </div>
  <div class="spot">
      <div class="list">
          <ul>
              <li class="bold">Photo and Videos</li>
              <li>Video Editor</li>
              <li>Youtube Video Editor</li>
              <li>Photo Editor</li>
              <li>Photo Collages</li>
          </ul>
      </div>
  </div>
  <div class="spot">
      <div class="list">
          <ul>
              <li class="bold">Prints</li>
              <li>Business Cards</li>
              <li>Cards</li>
              <li>Invitation</li>
              <li>Mugs</li>
              <li>T-shirts</li>
              <li>Hoodies</li>
              <li>Calenders</li>
              <li>Labels</li>
          </ul>
      </div>
  </div>
  <div class="spot">
      <div class="list">
          <ul>
              <li class="bold">Marketing</li>
              <li>Logos</li>
              <li>Posters</li>
              <li>Flyers</li>
              <li>Brochures</li>
              <li>Social Media</li>
              <li>Websites</li>
              <li>Stickers</li>
              <li>Yard Signs</li>
              <li>QR Generators</li>
          </ul>
      </div>
  </div>
  <div class="videos">
      <div class="list">
          <ul>
              <img src="./images/canvatemplate.png" alt="" />
              <p class="bold">Browse Canvas Template</p>
              <p>Choose from thousands of free ready to use templates</p>
              <p></p>
          </ul>
      </div>
  </div>
</div>
  `;
    drop.innerHTML = update;
};
const stop = () => {
    drop.innerHTML = "";
};

const business = () => {
    const update = `
  <div class="spotlight">
  <div class="spot">
      <div class="list">
          <ul>
              <li class="bold">Canvafor Business </li>
              <li>Content Creation</li>
              <li>Visual communication</li>
              <li>Brand Management</li>
              <li>Team Collaboration</li>
              <li>Plan and Schedule content</li>
              <li>Asset management</li>
              <li>Brainstorms and workshops</li>
              <li>Branded team templates</li>
              <li>Asset Productivity and workflows</li>
          </ul>
      </div>
  </div>
  <div class="spot">
      <div class="list">
          <ul>
              <li class="bold">Solutions</li>
              <li>Video Marketing</li>
              <li>Creatives</li>
              <li>Agencies</li>
              <li>Sales</li>
              <li>Communications</li>
              <li>Media and Publishing</li>
              <li>Startups</li>
              <li>Real estate</li>
          </ul>
      </div>
  </div>
  <div class="spot">
      <div class="list">
          <ul>
              <li class="bold">Resources</li>
              <li>Business Resources</li>
              <li>Case studies</li>
              <li>Features</li>
              <li>Integrations and apps</li>
              <li>T-Contact Sales</li>
              
          </ul>
      </div>
  </div>
  <div class="vid">
    
          
             <div class="suite">
              <img src="./images/visualSuite.png" alt="" />
              <div class="con">
              <p class="bold">Visual Suite ></p>
              <p>Reimagine the way you work</p>
              </div>
              </div>
              <div class="team">
              <img src="./images/canvaForteam.png" alt="" />
              <div class="con">
              <p class="bold">Canva for Teams ></p>
              <p>For teams of all sizes wanting to create together</p>
              </div>
              </div>
          
    
  </div>
</div>
  `;
    drop.innerHTML = update;
};

const education = () => {
    const update = `
    <div class="spotlight">
    <div class="edu">
        <div class="suite">
            <img src="./images/teacher.png" alt="" />
            <div class="con">
                <p class="bold">Teachers and schools ></p>
                <p>Create and collaborate visually in the classroom</p>
            </div>
        </div>
        <div class="suite">
            <img src="./images/student.png" alt="" />
            <div class="con">
                <p class="bold">Students ></p>
                <p>Design and documents to boost your learning</p>
            </div>
        </div>
        <div class="suite">
            <img src="./images/free.png" alt="" />
            <div class="con">
                <p class="bold">Free teacher resources ></p>
                <p>Tutorials, course, webinars and more, just for educators.</p>
            </div>
        </div>
    </div>
    <div class="edu">
        <div class="suite">
            <img src="./images/lms.png" alt="" />
            <div class="con">
                <p class="bold">LMS integrations ></p>
                <p>Integrate Canva with your learning management system</p>
            </div>
        </div>
        <div class="suite">
            <img src="./images/case.png" alt="" />
            <div class="con">
                <p class="bold">Case studies ></p>
                <p>Here how others deliver creative and collaborative learning</p>
            </div>
        </div>
        <div class="suite">
            <img src="./images/higher.png" alt="" />
            <div class="con">
                <p class="bold">Higher Education ></p>
                <p>Inspire future generation with the power of design</p>
            </div>
        </div>
    </div>

    <div class="videos">
        <div class="list">
            <ul>
                <img src="./images/welcome.png" alt="" />
                <p class="bold">Become an education creator ></p>
                <p>
                    Create and publish your own resources on Canva and earn by sharing
                </p>
                <p></p>
            </ul>
        </div>
    </div>
</div>
    `;
    drop.innerHTML = update;
};

const price = () => {
    const update = `
    <div class="spotlight">
        <div class="price">
            <ul>
                <img src="./images/desi.png" alt="" />
                <p class="bold">Free ></p>
                <p>
                    For anyone wanting to desing anything on your own or with others. And it's free forever.
                </p>
                <p></p>
            </ul>
        </div>
        <div class="price">
            <ul>
                <img src="./images/women.png" alt="" />
                <p class="bold">Pro ></p>
                <p>
                    For individuals wanting unlimited access to premium content and design tools.
                </p>
                <p></p>
            </ul>
        </div>
        <div class="price">
            <ul>
                <img src="./images/presentation.png" alt="" />
                <p class="bold">Teams ></p>
                <p>
                    For teams of all sizes wanting to create together premium workplace and brand tools.
                </p>
                <p></p>
            </ul>
        </div>
        <div class="pric">
            <div class="suite">
                <img src="./images/edu.png" alt="" />
                <div class="con">
                    <p class="bold">Education ></p>
                    <p>A powerful, free tool for classrooms,districts and students.</p>
                </div>
            </div>
            <div class="suite">
                <img src="./images/not.png" alt="" />
                <div class="con">
                    <p class="bold">Not-for-profits ></p>
                    <p>Canva Pro is free for all registered nonprofits. Apply today.</p>
                </div>
            </div>
        </div>
    </div>
    `;
    drop.innerHTML = update;
};
const learn = () => {
    const update = `
    <div class="spotlight">
        <div class="edu">
            <div class="suite">
                <img src="./images/create.png" alt="" />
                <div class="con">
                    <p class="bold">Create top designs ></p>
                    <p>Acess step-by-step guides and create unique designs</p>
                    <p>Logo maker</p>
                    <p>Flyer maker</p>
                    <p>Banner maker</p>
                    <p>Photo collage maker</p>
                    <p>Poster maker</p>
                    <p>Resume maker</p>
                </div>
            </div>
        </div>

        <div class="edu">
            <div class="suite">
                <img src="./images/canvablog.png" alt="" />
                <div class="con">
                    <p class="bold">Canva Blog ></p>
                    <p>Explore articles and resources</p>
                </div>
            </div>
            <div class="suite">
                <img src="./images/designSchool.png" alt="" />
                <div class="con">
                    <p class="bold">Design School ></p>
                    <p>Enjoy tutorials and courses</p>
                </div>
            </div>
            <div class="suite">
                <img src="./images/events.png" alt="" />
                <div class="con">
                    <p class="bold">Events ></p>
                    <p>Be inspired by experts and trends.</p>
                </div>
            </div>
            <div class="suite">
                <img src="./images/help.png" alt="" />
                <div class="con">
                    <p class="bold">Help centre ></p>
                    <p>Get technical support and help.</p>
                </div>
            </div>
        </div>
        <div class="videos">
            <ul>
                <img src="./images/gettingStarted.png" alt="" />
                <p class="bold">Getting Started ></p>
                <p>
                    Try our quick intro tutorial and get designing on canva, like a pro.
                </p>
                <p></p>
            </ul>
        </div>
    </div>
    `;
    drop.innerHTML = update;
};