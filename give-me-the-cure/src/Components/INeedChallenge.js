import '../App.css';

const INeedChallenge = () => {
  
  let mary = 2131;
  let chain = 34434;  

  const handleMaryChain = () => {
    console.log(mary + chain);
  }
  
  return (
    <div>
      <h3 className="App-link">
        Mary is <span className="Snow">{mary}</span>
      </h3>  

      <h3 className="App-link">
        Chain is <span className="Snow">{chain}</span>
      </h3>

      <button onClick={handleMaryChain}>Click here for Mary Chain</button>

    </div>
  );
}        

export default INeedChallenge;