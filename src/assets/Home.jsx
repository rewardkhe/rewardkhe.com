import { Link  } from "react-router-dom";
 
export function Home(){
    return(
 <>
<div className="intro"> 
     <div className="intro-1">
    <h3> Hi, I&apos;m a new grad from <a href="https://www.newcastle.edu.au/study/undergraduate?utm_campaign=eni-uon-undergrad-intake-cm-ugd&gclid=EAIaIQobChMIndfk97Tw9wIVyxErCh02wgR1EAAYAiAAEgKi4PD_BwE&gclsrc=aw.ds">The University of Newcastle</a>  with a <a href="https://www.newcastle.edu.au/degrees/bachelor-of-information-technology"> Bachelor of Information technology</a> and minor in CS.</h3>
    <h4> I am currently looking for entry level opportunities in web and software development roles. I am excited to collaborate with a team that fosters a culture of continuous learning and values creativity and innovation.</h4>
    <p>One of the most exciting aspects of working in technology is the opportunity to learn and adapt constantly. I thrive in dynamic environments where there&apos;s always something new to explore. I&apos;ve been fortunate enough to work on a variety of intriguing projects during my coursework and hobby projects, from developing dynamic web applications to contributing to robust software architectures. These experiences have taught me the importance of maintaining clean code, following best practices, and adhering to industry standards. Currently, I&apos;m particularly learning and delving into the intricacies of low latency, distributed systems, and scaling techniques.</p>
        <h4> <br/> Relevant Coursework </h4>
        <ul>
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Software Verification and Validation</li>
            <li>Systems & Network Adminstration</li>
            <li>Web Programming</li>
            <li>Human-Computer Interaction</li>
            <li>Advanced database</li>
            <li>Mobile Applicaiton Programming</li>
            <li>Project Management</li>
            <li>Predictive Analytics</li>
            <li>Foundations of Law</li>
        </ul>
    </div> 
    <div className="intro-2">
    <h3> Notable projects </h3>
        <div className="carousel">
         <Link to = "/work/First-Glance"> <div> <h3> First Glance</h3> <img src = '/placeholder-square.png'/> <p>Real time interactive chatting application made in java websocket.</p></div> </Link>
        <Link to = "work/Compound-Visualiser">  <div> <h3>Compound Visualiser</h3> <img src = '/placeholder-square.png'/> <p>Visualise your investing through interactive charts and figure.</p></div> </Link>
        <Link to = "work/Expense-Calculator">  <div> <h3>Expense Calculator</h3><img src = '/placeholder-square.png'/> <p>This app can let you view all your expenses in weekly, fortnightly, quarterly and so on.</p></div> </Link>
        <Link to = "work/Sudoku-Solver">  <div> <h3>Sudoku Solver</h3> <img src = '/placeholder-square.png'/><p>Solves sudoku by using smart algorithms and data structures.</p></div> </Link>
        <Link to = "work/Flatmates-Listing-Tracker">  <div> <h3>Flatmates listing tracker</h3><img src = '/placeholder-square.png'/> <p>Posts you about all new accomodation listing so you can be on top of your house hunting journey.</p></div> </Link>
        <Link to = "work/Tic-Tac-Toe">  <div> <h3>Tic Tac Toe</h3> <img src = '/placeholder-square.png'/><p>Simple javascript multiplayer online game.</p></div> </Link>
        <Link to = "work/Web-Socket-App">  <div> <h3>Web socket app</h3> <img src = '/placeholder-square.png'/><p>Real time interactive chatting application made in java websocket.</p></div> </Link>

        </div>
    </div>


</div> 
</>
) 
}