document
  .getElementById("math-evaluator")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    evaluateExpression(event.target.expression.value);
  });

function evaluateExpression(expression) {
  const resultLine = document.getElementById("result");
  try {
    const result = eval(expression);
    resultLine.innerHTML = !!result ? `Result: ${result}` : "Result: ";
  } catch (error) {
    resultLine.innerHTML = error;
  }
}
