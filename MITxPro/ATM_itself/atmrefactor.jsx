const ATMDeposit = ({ onChange, isDeposit , isValid}) => {
  const choice = ["Deposit", "Cash Back"];
  console.log(`ATM isDeposit: ${isDeposit}`);
  
  return (
    <label className="label huge">
      <h3>{choice[Number(!isDeposit)]}</h3>
      <input id="number-input" type="number" width="200" onChange={onChange} placeholder="0"></input>
      <input type="submit" width="200" value="Submit" id="submit-input" disabled={!isValid}></input>
    </label>
  );
};

const Account = () =>{
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [atmMod, setAtmMode] = React.useState("");
  const [validTransaction, setValidTransaction] = React.useState(false);
  // const [inputLeftover, setInputLeftover] = React.useState(0);
  // let deposit=0;

  let status = `Account Balance $ ${totalState}`;
  console.log(`Account rendered with isDeposit: ${isDeposit}`);

  const handleChange = (event) => {
    console.log(`handleChange ${event.target.value}`)
    if (event.target.value <= 0){
      setValidTransaction(false);
      alert("Cannot deposit 0 or negative amount. Try again");
      // console.log(validTransaction); 
      return;
    } 
    if (atmMod == "Cash Back" && event.target.value > totalState) {
      setValidTransaction(false)
      // console.log(validTransaction);\
      alert("Not enough money in your account");
      return;
    } else{
        setValidTransaction(true);
        // console.log(validTransaction);
        setDeposit(Number(event.target.value))} ;   
  };

  const handleSubmit = (event) =>{
    // alert(`Account total = ${totalState}`);
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setDeposit(deposit);
    setTotalState(newTotal);
    // setValidTransaction(false);
    event.preventDefault();
  };

  const handleModeSelect = (event) => {
    if (event.target.value == "Deposit"){ 
      setIsDeposit(true);
      setAtmMode("Deposit");
    } if (event.target.value == "Cash Back"){ 
      setAtmMode("Cash Back");
      setIsDeposit(false);
    } if (event.target.value == ""){
      setAtmMode("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total"> {status} </h2>
      <label>Select an action below to continue</label>
      <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
      <option id="no-selection" value=""></option>
      <option id="deposit-selection" value="Deposit">Deposit</option>
      <option id="cashback-selection" value="Cash Back">Cash Back</option>
      </select>
      {
        atmMod && 
        <ATMDeposit onChange={handleChange} isDeposit={isDeposit} isValid={validTransaction}> </ATMDeposit>
      }   
    </form>
  );
};

ReactDOM.render(<Account />, document.getElementById("root"));