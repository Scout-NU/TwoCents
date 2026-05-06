function ScrollingFeatures() {

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 w-max">
            <img src="images/feature 1.png" alt="proactive spending feature" className="w-45 md:w-70"/>
                <img src="images/feature 2.png" alt="priorities (not budgets) feature" className="w-45 md:w-70"/>
                <img src="images/feature 3.png" alt="real-time bank sync feature"  className="w-45 md:w-70"/>
                
                {/* <img src="images/feature 1.png" alt="proactive spending feature" className="w-40 md:w-65 shrink-0" loading="eager"/>
                <img src="images/feature 2.png" alt="priorities (not budgets) feature" className="w-40 md:w-65 shrink-0"/>
                <img src="images/feature 3.png" alt="real-time bank sync feature"  className="w-40 md:w-65 shrink-0"/> */}
            </div>
        </div>
    );
  }
  
  export default ScrollingFeatures;