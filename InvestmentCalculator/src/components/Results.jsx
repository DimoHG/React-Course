import { calculateInvestmentResults } from "../util/investment";

export default function Results({ userInput }) {
  const investmentResults = calculateInvestmentResults(userInput);
  console.log(investmentResults);

  return (
    <div id="results" className="result">
      <h2 className="center">Results</h2>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {investmentResults.map((result) => (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{result.valueEndOfYear.toFixed(2)}</td>
              <td>{result.interest.toFixed(2)}</td>
              <td>
                {(() => {
                  // totalInterest: sum of all 'interest' up to this year
                  const resultsUpToYear = investmentResults.slice(
                    0,
                    result.year
                  );
                  return resultsUpToYear
                    .reduce((sum, r) => sum + r.interest, 0)
                    .toFixed(2);
                })()}
              </td>
              <td>
                {(() => {
                  // investedCapital: initialInvestment + annualInvestment * year
                  const { initialInvestment, annualInvestment } = userInput;
                  return (
                    initialInvestment +
                    annualInvestment * result.year
                  ).toFixed(2);
                })()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
