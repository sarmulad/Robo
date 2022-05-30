import Hero from '../components/Hero'
import Stake from '../components/Stake'
import Features from '../components/Features'
import Governance from '../components/Governance'
import Tokenomics from '../components/Tokenomics'
import Roadmap from '../components/Roadmap'
import FAQ from '../components/FAQ'

function Home() {
    return (
      <>
        {/* <Navbar /> */}
        <Hero />
        <Stake />
        <Features/>
        <Governance/>
        <Tokenomics/>
        <Roadmap/>
        <FAQ/>
      </>
    );
  }
  
  export default Home;
  