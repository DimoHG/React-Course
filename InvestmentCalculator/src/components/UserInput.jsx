export default function UserInput({ onUserInput }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userInput = {
      initialInvestment: +formData.get("initialInvestment"),
      annualInvestment: +formData.get("annualInvestment"),
      expectedReturn: +formData.get("expectedReturn"),
      duration: +formData.get("duration"),
    };

    onUserInput(userInput);
  }

  function handleReset() {
    onUserInput({
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0,
    });
  }

  return (
    <div id="user-input">
      <h2>User Input</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-input">
          <p>
            <label>Initial Investment ($)</label>
            <input
              type="number"
              id="initial-investment"
              name="initialInvestment"
              defaultValue={10000}
              required
            />
          </p>
        </div>
        <div className="user-input">
          <p>
            <label>Annual Investment ($)</label>
            <input
              type="number"
              id="annual-investment"
              name="annualInvestment"
              defaultValue={1000}
              required
            />
          </p>
        </div>
        <div className="user-input">
          <p>
            <label>Expected Return (%)</label>
            <input
              type="number"
              id="expected-return"
              name="expectedReturn"
              defaultValue={10}
              required
            />
          </p>
        </div>
        <div className="user-input">
          <p>
            <label>Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              defaultValue={10}
              required
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
          <button type="submit">Calculate</button>
        </p>
      </form>
    </div>
  );
}
